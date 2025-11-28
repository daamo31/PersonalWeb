import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { resumeConfig } from '@/config/Resume';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Daniel Del Amo
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Programmer in training with a solid foundation in Python, Django, and React, complemented by over 6 years of technical experience in industrial environments. Passionate about technology and automation, I have developed various projects such as web applications and mobile management systems, applying good development practices and modern methodologies. With an analytical, self-taught, and problem-solving mindset, I am currently focusing my career on software development and the creation of efficient, scalable, and user and business-oriented digital solutions.
          </p>
          <div className="mt-4 space-y-2 text-base">
            <div><strong>Location:</strong> Zaragoza (Spain)</div>
            <div><strong>Phone:</strong> +34 626448645</div>
            <div><strong>Email:</strong> <a href="mailto:danieldelamo31@gmail.com" className="underline">danieldelamo31@gmail.com</a></div>
            <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/danieldelamotarrero/" target="_blank" className="underline">danieldelamotarrero</a></div>
            <div><strong>GitHub:</strong> <a href="https://github.com/daamo31" target="_blank" className="underline">daamo31</a></div>
          </div>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Personal Projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>
                <strong>NoirCheck:</strong> A decentralized content verification tool using zero-knowledge proofs for enhanced privacy and trust.<br />
                <em>Goal:</em> Verify content integrity without revealing the content or private keys.<br />
                <em>Tech:</em> Python 3.11+ (FastAPI, SQLAlchemy, Pydantic, SQLite), TypeScript/JavaScript (React, Next.js, Lucide-react), Dart (Flutter, Riverpod, Material Design 3), XION SDK / Abstraxion (Blockchain, zkTLS, Zero-Knowledge Proofs), SHA-256.
              </li>
              <li>
                <strong>Web Consulting Platform (New Project):</strong> Manage consulting services, client appointments, and documentation.<br />
                <em>Tech:</em> Java (Backend), Superbase (Database/Backend as a Service).
              </li>
              <li>
                <strong>Mobile Inventory App for Local Store:</strong> Manage products by batches and expiration dates for small businesses.<br />
                <em>Tech:</em> Python, Kivy, SQLite.
              </li>
              <li>
                <strong>Restaurant Management System:</strong> Manage menus, orders, and reservations from any device.<br />
                <em>Tech:</em> Django, React, PostgreSQL, Tailwind CSS, React Router, Weather App.
              </li>
              <li>
                <strong>Automation and Testing in Python:</strong> Scripts and functions with unit tests for code stability and performance.<br />
                <em>Tech:</em> Python, pytest, unittest.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>Master's in Python Programming Language (Universidad San Jorge) ’24</li>
              <li>FPII Automated Electrical Systems (IES GALLICUM) ’15</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Hard Skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>Python Programming (scripting, object-oriented programming)</li>
              <li>Web development with Django (backend) and React (frontend)</li>
              <li>HTML, CSS, Bootstrap y Tailwind CSS</li>
              <li>Relational and NoSQL databases: SQLite, PostgreSQL, Superbase</li>
              <li>REST API consumption and creation</li>
              <li>Automation with Python (bots, functional scripts)</li>
              <li>Software testing with pytest and unittest</li>
              <li>Version control with Git</li>
              <li>Mobile app development with Kivy (Python), Flutter</li>
              <li>Automation tools (IA, N8n..)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Soft Skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>Analytical thinking and problem-solving focus</li>
              <li>Self-taught learning ability</li>
              <li>Adaptability to new technologies and methodologies</li>
              <li>Organization and time management</li>
              <li>Teamwork and interdisciplinary collaboration</li>
              <li>Autonomy and responsibility in work environments</li>
              <li>Proactivity and results orientation</li>
              <li>Commitment to quality and continuous improvement</li>
              <li>Empathy and customer needs orientation</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}
