import * as z from 'zod';

export const contactFormSchema = z.object({
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
      (val) => val.replace(/\D/g, '').length >= 10,
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

export type ContactFormValues = z.infer<typeof contactFormSchema>;
