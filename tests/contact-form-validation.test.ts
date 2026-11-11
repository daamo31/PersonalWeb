import assert from 'node:assert/strict';
import { test } from 'node:test';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../src/lib/contact-form-schema';

const resolver = zodResolver(contactFormSchema);
const options = { fields: {}, shouldUseNativeValidation: false };
const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  phone: '+34 612 345 678',
  message: 'Hello, I have a project.',
};

test('contact form resolver accepts valid form data', async () => {
  const result = await resolver(valid, undefined, options);
  assert.deepEqual(result.errors, {});
  assert.deepEqual(result.values, valid);
});

test('contact form resolver returns field-specific validation messages', async () => {
  const result = await resolver(
    { name: 'A', email: 'invalid', phone: '123', message: 'short' },
    undefined,
    options,
  );

  assert.equal(result.errors.name?.message, 'Name must be at least 2 characters.');
  assert.equal(result.errors.email?.message, 'Please enter a valid email address.');
  assert.equal(result.errors.phone?.message, 'Please enter a valid phone number (minimum 10 digits).');
  assert.equal(result.errors.message?.message, 'Message must be at least 10 characters.');
});

test('contact form enforces digit and message limits', async () => {
  const result = await resolver(
    { ...valid, phone: '+1 (234) 56-78', message: 'x'.repeat(1001) },
    undefined,
    options,
  );

  assert.equal(result.errors.phone?.message, 'Phone number must contain at least 10 digits.');
  assert.equal(result.errors.message?.message, 'Message must not exceed 1000 characters.');
});
