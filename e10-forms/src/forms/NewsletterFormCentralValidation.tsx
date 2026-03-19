import { useForm, type Resolver } from 'react-hook-form';

export type NewsletterData = {
  name: string;
  email: string;
  age: string;
  agree: boolean;
  language: string;
};

interface NewsletterFormProps {
  onSubmit: (data: NewsletterData) => void;
}

const resolver: Resolver<NewsletterData> = async (values) => {
  const errors: Record<string, { type: string; message: string }> = {};
  if (!values.name?.trim()) {
    errors.name = { type: 'required', message: 'Jméno je povinné.' };
  }
  if (!values.email?.trim()) {
    errors.email = { type: 'required', message: 'Email je povinný.' };
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = { type: 'pattern', message: 'Email není platný.' };
  }
  if (!values.age?.trim()) {
    errors.age = { type: 'required', message: 'Věk je povinný.' };
  } else if (isNaN(Number(values.age)) || Number(values.age) < 0) {
    errors.age = { type: 'validate', message: 'Věk musí být nezáporné číslo.' };
  }
  if (!values.agree) {
    errors.agree = { type: 'required', message: 'Musíte souhlasit s podmínkami.' };
  }
  if (!values.language) {
    errors.language = { type: 'required', message: 'Vyberte jazyk.' };
  }
  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

export function NewsletterFormCentralValidation({ onSubmit }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterData>({
    defaultValues: {
      name: 'Alfons',
      email: 'alfons@mail.test',
      age: '15',
      agree: false,
      language: 'cz',
    },
    resolver,
  });

  function onFormSubmit(data: NewsletterData) {
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
