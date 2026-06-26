'use client';

import { FormEvent, useState } from 'react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export default function LeadForm() {
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('Could not send the message. Please try again.');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setErrorMessage('Could not send the message. Please try again.');

    const formData = new FormData(form);
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
        const body = await response.json().catch(() => ({}));
        const message = typeof body?.error === 'string' ? body.error : 'Failed to send message.';
        setErrorMessage(message);
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('success');
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <input
        name="name"
        required
        minLength={2}
        className="rounded-xl border border-input bg-background/70 px-4 py-3 outline-none ring-primary/20 transition focus:ring"
        placeholder="Your name"
      />
      <input
        name="email"
        type="email"
        required
        className="rounded-xl border border-input bg-background/70 px-4 py-3 outline-none ring-primary/20 transition focus:ring"
        placeholder="your@email.com"
      />
      <input
        name="phone"
        required
        minLength={10}
        maxLength={20}
        className="rounded-xl border border-input bg-background/70 px-4 py-3 outline-none ring-primary/20 transition focus:ring sm:col-span-2"
        placeholder="Phone number"
      />
      <textarea
        name="message"
        required
        minLength={10}
        rows={6}
        className="rounded-xl border border-input bg-background/70 px-4 py-3 outline-none ring-primary/20 transition focus:ring sm:col-span-2"
        placeholder="Tell me about your product, deadline, and goals"
      />

      <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending...' : 'Send inquiry'}
        </button>

        {status === 'success' ? <p className="text-sm text-green-600">Message sent. I will reply soon.</p> : null}
        {status === 'error' ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
      </div>
    </form>
  );
}
