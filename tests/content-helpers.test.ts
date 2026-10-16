import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { NextRequest } from 'next/server';
import projectCatalog from '../src/data/projects.json';
import {
  getProjectCaseStudyBySlug,
  getProjectCaseStudySlugs,
} from '../src/lib/project';
import { getBlogPostBySlug } from '../src/lib/blog';

import { parseFrontmatter } from '../src/lib/frontmatter';
import { checkRateLimit, getClientIP } from '../src/lib/rate-limit';
import { readBoundedBody } from '../src/lib/request-body';
import { formatTelegramMessage } from '../src/lib/telegram';

const originalRedisUrl = process.env.UPSTASH_REDIS_REST_URL;
const originalRedisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

delete process.env.UPSTASH_REDIS_REST_URL;
delete process.env.UPSTASH_REDIS_REST_TOKEN;

after(() => {
  if (originalRedisUrl === undefined) delete process.env.UPSTASH_REDIS_REST_URL;
  else process.env.UPSTASH_REDIS_REST_URL = originalRedisUrl;

  if (originalRedisToken === undefined) delete process.env.UPSTASH_REDIS_REST_TOKEN;
  else process.env.UPSTASH_REDIS_REST_TOKEN = originalRedisToken;
});

test('parses YAML frontmatter and leaves markdown content intact', () => {
  const parsed = parseFrontmatter<{ title: string; tags: string[] }>(
    '---\ntitle: Example\ntags:\n  - web\n  - security\n---\n\n## Body\n',
  );

  assert.deepEqual(parsed.data, { title: 'Example', tags: ['web', 'security'] });
  assert.equal(parsed.content, '\n## Body\n');
});

test('rejects content without a frontmatter block', () => {
  assert.throws(() => parseFrontmatter('No frontmatter'), /frontmatter/);
});

test('formats Telegram messages as HTML and escapes submitted fields', () => {
  const message = formatTelegramMessage(
    {
      name: '<script>&',
      email: 'person@example.com',
      phone: '+1 555 555 5555',
      message: '<b>Injected</b> & text',
    },
    '16 October 2026',
    'Europe/Madrid',
  );

  assert.match(message, /<b>Name:<\/b> &lt;script&gt;&amp;/);
  assert.match(message, /&lt;b&gt;Injected&lt;\/b&gt; &amp; text/);
  assert.doesNotMatch(message, /\*Name:\*/);
});

test('reads request bodies up to the byte limit', async () => {
  const request = new NextRequest('http://localhost/api/test', {
    method: 'POST',
    body: 'hello',
  });

  assert.equal(await readBoundedBody(request, 5), 'hello');
});

test('cancels request bodies that exceed the byte limit', async () => {
  const request = new NextRequest('http://localhost/api/test', {
    method: 'POST',
    body: 'hello',
  });

  assert.equal(await readBoundedBody(request, 4), null);
});

test('enforces the local rate limit for repeated requests', async () => {
  const first = await checkRateLimit('test', 'unique-test-client', 2, 60_000);
  const second = await checkRateLimit('test', 'unique-test-client', 2, 60_000);
  const third = await checkRateLimit('test', 'unique-test-client', 2, 60_000);

  assert.equal(first.allowed, true);
  assert.equal(second.allowed, true);
  assert.equal(third.allowed, false);
  assert.equal(third.remaining, 0);
});

test('caps the number of local rate-limit identities', async () => {
  let lastResult = { allowed: true, remaining: 1, resetAt: 0 };
  for (let index = 0; index < 1100; index += 1) {
    lastResult = await checkRateLimit(
      'capacity-test',
      `capacity-client-${index}`,
      1,
      60_000,
    );
  }

  assert.equal(lastResult.allowed, false);
  assert.equal(lastResult.remaining, 0);
});

test('uses only a valid proxy-provided client IP', () => {
  const request = new NextRequest('http://localhost/api/test', {
    headers: {
      'x-real-ip': '203.0.113.8',
      'x-forwarded-for': '198.51.100.4',
    },
  });
  const untrustedRequest = new NextRequest('http://localhost/api/test', {
    headers: { 'x-forwarded-for': '198.51.100.4' },
  });

  assert.equal(getClientIP(request), '203.0.113.8');
  assert.equal(getClientIP(untrustedRequest), 'unknown');
});

test('project catalog has unique ids and valid detail routes', () => {
  const ids = projectCatalog.map((project) => project.id);
  const detailRoutes = projectCatalog.map((project) => project.projectDetailsPageSlug);

  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(detailRoutes).size, detailRoutes.length);
  assert.ok(
    projectCatalog.every(
      (project) => project.projectDetailsPageSlug === `/projects/${project.id}`,
    ),
  );
  assert.equal(projectCatalog.filter((project) => project.featuredOnHome).length, 4);
  assert.equal(projectCatalog.filter((project) => project.listedOnProjects).length, 5);
});

test('every catalog entry has a matching case study with canonical shared metadata', () => {
  assert.deepEqual(
    getProjectCaseStudySlugs().sort(),
    projectCatalog.map((project) => project.id).sort(),
  );

  for (const catalogEntry of projectCatalog) {
    const caseStudy = getProjectCaseStudyBySlug(catalogEntry.id);
    assert.ok(caseStudy, `Missing case study for ${catalogEntry.id}`);
    assert.equal(caseStudy.frontmatter.title, catalogEntry.title);
    assert.equal(caseStudy.frontmatter.description, catalogEntry.description);
    assert.equal(caseStudy.frontmatter.image, catalogEntry.image);
    assert.deepEqual(
      caseStudy.frontmatter.technologies,
      catalogEntry.technologies,
    );
    assert.equal(caseStudy.frontmatter.github, catalogEntry.github);
    assert.equal(caseStudy.frontmatter.live, catalogEntry.live);
    assert.equal(caseStudy.frontmatter.isPublished, catalogEntry.caseStudy.isPublished);
    assert.equal(caseStudy.content.startsWith('---'), false);
  }
});

test('project case study uses catalog metadata and retains editorial MDX fields', () => {
  const project = getProjectCaseStudyBySlug('bsb-capital');
  const catalogEntry = projectCatalog.find(({ id }) => id === 'bsb-capital');

  assert.ok(project);
  assert.ok(catalogEntry);
  assert.equal(project.frontmatter.title, catalogEntry.title);
  assert.equal(project.frontmatter.image, catalogEntry.image);
  assert.deepEqual(
    project.frontmatter.technologies,
    catalogEntry.technologies,
  );
  assert.equal(project.frontmatter.timeline, '6 months');
  assert.ok(project.frontmatter.challenges?.length);
});

test('content loaders reject path traversal slugs', () => {
  assert.equal(getBlogPostBySlug('../package'), null);
  assert.equal(getProjectCaseStudyBySlug('../package'), null);
});
