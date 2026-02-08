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
                <strong>NoirCheck:</strong> Digital content authenticity verification platform combating misinformation using blockchain and zkTLS (Zero-Knowledge Transport Layer Security). Includes a complete mobile application for content registration and author attribution.<br />
                <em>Tech:</em> Python 3.11 (FastAPI, SQLAlchemy, Computer Vision), Next.js 15, TypeScript, React Native (Expo), XION zkTLS, SHA-256.
              </li>
              <li>
                <strong>BSB Capital:</strong> Financial investment and consulting platform specializing in cryptocurrencies. Features a membership system, educational academy, and administrative dashboard.<br />
                <em>Tech:</em> React 18, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Supabase (PostgreSQL, RLS), Stripe, Hotmart API, Resend.
              </li>
              <li>
                <strong>Chuches Inventario:</strong> Professional inventory management system for retail stores with Android and Desktop support. Features batch and expiration tracking, camera search, and OCR label scanning.<br />
                <em>Tech:</em> Python, Kivy, KivyMD, OpenCV, pytesseract (OCR), SQLite, Pandas (Reports).
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
              <li><strong>Backend Development:</strong> Python (FastAPI, Django, SQLAlchemy), Node.js, RESTful APIs.</li>
              <li><strong>Frontend Development:</strong> React 18/19, Next.js 15, TypeScript, Tailwind CSS, Framer Motion.</li>
              <li><strong>Mobile Development:</strong> React Native (Expo), Kivy/KivyMD.</li>
              <li><strong>Databases & BaaS:</strong> PostgreSQL, Supabase (RLS, Edge Functions), SQLite, MongoDB.</li>
              <li><strong>Integrations:</strong> Stripe (Payments), Hotmart API, Resend (Email), XION zkTLS (Blockchain).</li>
              <li><strong>Testing & DevOps:</strong> Pytest, Unittest, Git, GitFlow, CI/CD foundations.</li>
              <li><strong>Automation:</strong> Python scripting, document processing, OCR (Tesseract), AI-driven workflows.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Soft Skills</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li><strong>Strategic Problem Solving:</strong> Analytical mindset focused on creating scalable and efficient solutions.</li>
              <li><strong>Continuous Learner:</strong> Rapidly adaptable to new frameworks, languages, and technical challenges.</li>
              <li><strong>Communication & Empathy:</strong> Ability to translate business needs into technical requirements with a user-centric focus.</li>
              <li><strong>Organization & Proactivity:</strong> Self-managed, reliable, and committed to meeting deadlines and project goals.</li>
              <li><strong>Team Collaboration:</strong> Experience working in multi-disciplinary environments and version control (Git).</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}
