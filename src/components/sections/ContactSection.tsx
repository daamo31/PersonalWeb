'use client';

import { FormEvent, useState } from 'react';

type ContactData = {
  email: string;
  phone: string;
  availability: string;
  linkedin?: string;
  github?: string;
};

type ContactSectionProps = {
  contact: ContactData;
};

export default function ContactSection({ contact }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      event.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="mt-20 rounded-3xl border border-primary/15 bg-card p-8 shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Tell me your idea and let's build it</h2>
          <p className="mt-4 text-muted-foreground">{contact.availability}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Email: <span className="font-medium text-foreground">{contact.email}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Phone: <span className="font-medium text-foreground">{contact.phone}</span>
          </p>
          {contact.linkedin ? (
            <p className="text-sm text-muted-foreground">
              LinkedIn:{' '}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Professional profile
              </a>
            </p>
          ) : null}
          {contact.github ? (
            <p className="text-sm text-muted-foreground">
              GitHub:{' '}
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                @daamo31
              </a>
            </p>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            minLength={2}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none ring-primary/20 focus:ring"
            placeholder="Tu nombre"
          />
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none ring-primary/20 focus:ring"
            placeholder="tu@email.com"
          />
          <input
            name="phone"
            required
            minLength={10}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none ring-primary/20 focus:ring"
            placeholder="+34 600 000 000"
          />
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none ring-primary/20 focus:ring"
            placeholder="Tell me what you need"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' ? (
            <p className="text-sm text-green-600">Message sent. I will reply soon.</p>
          ) : null}
          {status === 'error' ? (
            <p className="text-sm text-red-600">Could not send the message. Please try again.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
