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

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().regex(/^[\+]?[0-9]{10,20}$/, {
    message: 'Please enter a valid phone number (10-20 digits).',
  }),
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
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle>Send me a message</CardTitle>
        <CardDescription>
          Fill out the form below and I will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                      <Input placeholder="Your full name" {...field} />
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
                          defaultValue="+34"
                          onChange={e => {
                            field.onChange(e.target.value + (field.value?.replace(/^\+?[0-9]*/, '') || ''));
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
                          <option value="+420">🇨🇿 +420</option>
                        </select>
                        <Input placeholder="Mobile number" {...field} />
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
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-30 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-fit" disabled={isSubmitting}>
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
