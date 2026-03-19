import { z } from 'zod';

export const newsletterSchema = z.object({
  name: z.string().min(1, 'Jméno je povinné.'),
  email: z.string().min(1, 'Email je povinný.').email('Email není platný.'),
  age: z.string().min(1, 'Věk je povinný.').refine(v => !isNaN(Number(v)) && Number(v) >= 0, 'Věk musí být nezáporné číslo.'),
  agree: z.literal(true).or(z.boolean().refine(val => val === true, { message: 'Musíte souhlasit s podmínkami.' })),
  language: z.enum(['cz', 'en']),
});

export type NewsletterDataZod = z.infer<typeof newsletterSchema>;