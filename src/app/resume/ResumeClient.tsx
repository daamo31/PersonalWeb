'use client';

import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { heroConfig } from '@/config/Hero';

export default function ResumeClient() {
    const handleDownload = () => {
        window.print();
    };

    return (
        <Container className="py-16">
            <div className="space-y-8 print:space-y-4">
                <div className="flex flex-col items-center space-y-4 text-center print:flex-row print:text-left print:space-y-0 print:space-x-6 print:items-start">
                    <Avatar className="hidden print:block size-24 border-2 border-primary">
                        <AvatarImage src={heroConfig.avatar} alt={heroConfig.name} />
                        <AvatarFallback>DD</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-4 print:space-y-1">
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                            Daniel Del Amo
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground print:text-sm print:max-w-none">
                            Programmer in training with a solid foundation in Python, Django, and React, complemented by over 6 years of technical experience in industrial environments. Passionate about technology and automation, I have developed various projects such as web applications and mobile management systems, applying good development practices and modern methodologies. With an analytical, self-taught, and problem-solving mindset, I am currently focusing my career on software development and the creation of efficient, scalable, and user and business-oriented digital solutions.
                        </p>
                    </div>
                </div>

                {/* Web only button */}
                <div className="mt-4 no-print flex justify-center">
                    <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="text-primary border-primary hover:bg-primary/10 btn-print-trigger"
                    >
                        <Download className="mr-2 size-4" />
                        Generate PDF Resume
                    </Button>
                </div>

                {/* Print-friendly contact info */}
                <div className="cv-contact mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
                    <div><strong>Location:</strong> Zaragoza (Spain)</div>
                    <div><strong>Email:</strong> <a href="mailto:danieldelamo31@gmail.com" className="underline">danieldelamo31@gmail.com</a></div>
                    <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/danieldelamotarrero/" target="_blank" className="underline">danieldelamotarrero</a></div>
                    <div><strong>GitHub:</strong> <a href="https://github.com/daamo31" target="_blank" className="underline">daamo31</a></div>
                </div>

                <Separator className="no-print" />

                <div className="mx-auto max-w-2xl space-y-8 cv-grid">
                    <div className="space-y-8 print:space-y-6">
                        <section className="cv-section">
                            <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
                            <ul className="list-disc pl-5 space-y-4 text-left print:text-sm">
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
                                    <em>Tech:</em> Django, React, PostgreSQL, Tailwind CSS, React Router.
                                </li>
                                <li>
                                    <strong>Automation and Testing in Python:</strong> Scripts and functions with unit tests for code stability and performance.<br />
                                    <em>Tech:</em> Python, pytest, unittest.
                                </li>
                            </ul>
                        </section>

                        <section className="cv-section">
                            <h2 className="text-2xl font-semibold mb-4">Education</h2>
                            <ul className="list-disc pl-5 space-y-2 text-left print:text-sm">
                                <li><strong>Master&apos;s in Python Programming Language:</strong> Universidad San Jorge ’24</li>
                                <li><strong>FPII Automated Electrical Systems:</strong> IES GALLICUM ’15</li>
                            </ul>
                        </section>
                    </div>

                    <div className="space-y-8 cv-sidebar print:space-y-6">
                        <section className="cv-section">
                            <h2 className="text-2xl font-semibold mb-4">Hard Skills</h2>
                            <ul className="list-disc pl-5 space-y-2 text-left print:text-sm">
                                <li><strong>Backend:</strong> Python (FastAPI, Django), Node.js, REST APIs.</li>
                                <li><strong>Frontend:</strong> React 18/19, Next.js 15, TypeScript.</li>
                                <li><strong>Styles:</strong> Tailwind CSS, Framer Motion.</li>
                                <li><strong>Mobile:</strong> React Native (Expo), Kivy/KivyMD.</li>
                                <li><strong>DB & BaaS:</strong> PostgreSQL, Supabase, SQLite, MongoDB.</li>
                                <li><strong>Integrations:</strong> Stripe, Hotmart, Resend.</li>
                                <li><strong>DevOps:</strong> Git, GitFlow, Pytest.</li>
                                <li><strong>Automation:</strong> Scripting, OCR, AI Workflows.</li>
                            </ul>
                        </section>

                        <section className="cv-section">
                            <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
                            <ul className="list-disc pl-5 space-y-2 text-left print:text-sm">
                                <li>Strategic Problem Solving</li>
                                <li>Continuous Learner</li>
                                <li>Communication & Empathy</li>
                                <li>Organization & Proactivity</li>
                                <li>Team Collaboration</li>
                            </ul>
                        </section>

                        <section className="cv-section print:block hidden">
                            <h2 className="text-2xl font-semibold mb-4">Languages</h2>
                            <ul className="list-disc pl-5 space-y-2 text-left print:text-sm">
                                <li>Spanish (Native)</li>
                                <li>English (Professional)</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </Container>
    );
}
