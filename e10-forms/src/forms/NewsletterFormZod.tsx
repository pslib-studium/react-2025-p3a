import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { newsletterSchema } from './newsletterSchema';
import type { NewsletterDataZod } from './newsletterSchema';

interface NewsletterFormProps {
  onSubmit: (data: NewsletterDataZod) => void;
}

export function NewsletterFormZod({ onSubmit }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterDataZod>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: 'Alfons',
      email: 'alfons@mail.test',
      age: '15',
      agree: false,
      language: 'cz',
    },
  });

  function onFormSubmit(data: NewsletterDataZod) {
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <div>
        <label>
          Jméno:
          <input {...register('name')} />
        </label>
        {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...register('email')} />
        </label>
        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
      </div>
      <div>
        <label>
          Věk:
          <input type="number" {...register('age')} />
        </label>
        {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...register('agree')} /> Souhlasím s podmínkami
        </label>
        {errors.agree && <div style={{ color: 'red' }}>{errors.agree.message}</div>}
      </div>
      <div>
        Preferovaný jazyk:
        <label>
          <input type="radio" value="cz" {...register('language')} /> Čeština
        </label>
        <label>
          <input type="radio" value="en" {...register('language')} /> Angličtina
        </label>
        {errors.language && <div style={{ color: 'red' }}>{errors.language.message}</div>}
      </div>
      <button type="submit">Odeslat</button>
    </form>
  );
}
