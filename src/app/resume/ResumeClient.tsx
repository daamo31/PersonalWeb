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

    const highlights = [
        { label: 'Focus', value: 'Full Stack + Automation' },
        { label: 'Base', value: 'Zaragoza, Spain' },
        { label: 'Availability', value: 'Freelance & remote' },
    ];

    return (
        <Container className="py-16">
            <div className="space-y-8 print:space-y-4">
                <div className="line-grid overflow-hidden rounded-[2rem] border border-primary/15 bg-card/85 p-7 shadow-sm backdrop-blur-md sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                            <Avatar className="size-24 border-2 border-primary/15 bg-primary/10 shadow-sm">
                                <AvatarImage src={heroConfig.avatar} alt={heroConfig.name} />
                                <AvatarFallback>DD</AvatarFallback>
                            </Avatar>

                            <div className="mt-5 flex-1 space-y-4 sm:mt-0 sm:pl-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Resume</p>
                                    <h1 className="mt-2 text-4xl font-black tracking-tight lg:text-5xl">Daniel Del Amo</h1>
                                </div>
                                <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:mx-0">
                                    Programmer in training with a solid foundation in Python, Django, and React, complemented by over 6 years of technical experience in industrial environments. Passionate about technology and automation, I have developed various projects such as web applications and mobile management systems, applying good development practices and modern methodologies.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                            {highlights.map((highlight) => (
                                <div key={highlight.label} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/65">{highlight.label}</p>
                                    <p className="mt-2 text-sm font-medium text-foreground">{highlight.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 no-print flex justify-center">
                    <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="border-primary/25 text-primary shadow-sm transition hover:bg-primary/10 hover:text-primary btn-print-trigger"
                    >
                        <Download className="mr-2 size-4" />
                        Generate PDF Resume
                    </Button>
                </div>

                <div className="cv-contact mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
                    <div><strong>Location:</strong> Zaragoza (Spain)</div>
                    <div><strong>Email:</strong> <a href="mailto:danieldelamo31@protonmail.com" className="underline">danieldelamo31@protonmail.com</a></div>
                    <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/danieldelamotarrero/" target="_blank" rel="noreferrer" className="underline">danieldelamotarrero</a></div>
                    <div><strong>GitHub:</strong> <a href="https://github.com/daamo31" target="_blank" rel="noreferrer" className="underline">daamo31</a></div>
                </div>

                <Separator className="no-print" />

                <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="space-y-6">
                        <section className="cv-section rounded-[1.5rem] border border-primary/10 bg-card/85 p-6 shadow-sm print:border-none print:bg-transparent print:p-0 print:shadow-none">
                            <h2 className="mb-4 text-2xl font-semibold">Personal Projects</h2>
                            <ul className="space-y-4 text-left text-sm leading-7 print:text-sm">
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

                        <section className="cv-section rounded-[1.5rem] border border-primary/10 bg-card/85 p-6 shadow-sm print:border-none print:bg-transparent print:p-0 print:shadow-none">
                            <h2 className="mb-4 text-2xl font-semibold">Education</h2>
                            <ul className="space-y-2 text-left text-sm print:text-sm">
                                <li><strong>Master&apos;s in Python Programming Language:</strong> Universidad San Jorge ’24</li>
                                <li><strong>FPII Automated Electrical Systems:</strong> IES GALLICUM ’15</li>
                            </ul>
                        </section>
                    </div>

                    <div className="space-y-6">
                        <section className="cv-section rounded-[1.5rem] border border-primary/10 bg-card/85 p-6 shadow-sm print:border-none print:bg-transparent print:p-0 print:shadow-none">
                            <h2 className="mb-4 text-2xl font-semibold">Hard Skills</h2>
                            <ul className="space-y-2 text-left text-sm print:text-sm">
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

                        <section className="cv-section rounded-[1.5rem] border border-primary/10 bg-card/85 p-6 shadow-sm print:border-none print:bg-transparent print:p-0 print:shadow-none">
                            <h2 className="mb-4 text-2xl font-semibold">Soft Skills</h2>
                            <ul className="space-y-2 text-left text-sm print:text-sm">
                                <li>Strategic Problem Solving</li>
                                <li>Continuous Learner</li>
                                <li>Communication & Empathy</li>
                                <li>Organization & Proactivity</li>
                                <li>Team Collaboration</li>
                            </ul>
                        </section>

                        <section className="cv-section hidden rounded-[1.5rem] border border-primary/10 bg-card/85 p-6 shadow-sm print:block print:border-none print:bg-transparent print:p-0 print:shadow-none">
                            <h2 className="mb-4 text-2xl font-semibold">Languages</h2>
                            <ul className="space-y-2 text-left text-sm print:text-sm">
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
