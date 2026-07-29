'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import Chat from '../svgs/Chat';

// Full phone (prefix + local digits) must have at least 10 digits total.
// A Spanish number (+34 = 2 extra digits) + 9 local digits = 11 chars → still passes.
// But a bare 9-digit local number without a prefix is blocked.
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-().]{10,25}$/, {
      message: 'Please enter a valid phone number (minimum 10 digits).',
    })
    .refine(
      (val) => {
        // Count only actual digits – must be at least 10
        const digits = val.replace(/\D/g, '');
        return digits.length >= 10;
      },
      { message: 'Phone number must contain at least 10 digits.' },
    ),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(1000, {
      message: 'Message must not exceed 1000 characters.',
    }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState('+34');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        const message =
          typeof body?.error === 'string'
            ? body.error
            : 'Failed to send message. Please try again.';
        throw new Error(message);
      }

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Chat className="size-5" />
          </div>
          <div>
            <CardTitle>Send me a message</CardTitle>
            <CardDescription>
              Fill out the form below and I will get back to you as soon as possible.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input className="bg-background/80" placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <select
                          className="border rounded px-2 py-1 bg-background"
                          style={{ minWidth: '80px' }}
                          value={phonePrefix}
                          onChange={e => {
                            const newPrefix = e.target.value;
                            setPhonePrefix(newPrefix);
                            // Keep the local digits already typed, update full value
                            const localDigits = field.value.replace(/^\+\d+\s*/, '');
                            field.onChange(newPrefix + ' ' + localDigits);
                          }}
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+52">🇲🇽 +52</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+55">🇧🇷 +55</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+86">🇨🇳 +86</option>
                          <option value="+7">🇷🇺 +7</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+351">🇵🇹 +351</option>
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+212">🇲🇦 +212</option>
                          <option value="+90">🇹🇷 +90</option>
                          <option value="+62">🇮🇩 +62</option>
                          <option value="+234">🇳🇬 +234</option>
                          <option value="+82">🇰🇷 +82</option>
                          <option value="+972">🇮🇱 +972</option>
                          <option value="+420">🇨🇿 +420</option>
                          <option value="+358">🇫🇮 +358</option>
                          <option value="+48">🇵🇱 +48</option>
                          <option value="+370">🇱🇹 +370</option>
                          <option value="+386">🇸🇮 +386</option>
                          <option value="+372">🇪🇪 +372</option>
                          <option value="+371">🇱🇻 +371</option>
                          <option value="+353">🇮🇪 +353</option>
                          <option value="+47">🇳🇴 +47</option>
                          <option value="+46">🇸🇪 +46</option>
                          <option value="+41">🇨🇭 +41</option>
                          <option value="+43">🇦🇹 +43</option>
                          <option value="+31">🇳🇱 +31</option>
                          <option value="+32">🇧🇪 +32</option>
                        </select>
                        <Input
                          className="bg-background/80"
                          placeholder="Local number (min 7 digits)"
                          value={field.value.replace(/^\+\d+\s*/, '')}
                          onChange={e => {
                            // Only allow digits, spaces, dashes, dots, parentheses
                            const localPart = e.target.value.replace(/[^\d\s\-().]/g, '');
                            field.onChange(phonePrefix + ' ' + localPart);
                          }}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                        className="bg-background/80"
                      placeholder="your.email@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                        className="min-h-30 resize-none bg-background/80"
                      placeholder="Tell me about your project or just say hello..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full sm:w-fit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending your message...
                </>
              ) : (
                <>
                  <Chat className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
