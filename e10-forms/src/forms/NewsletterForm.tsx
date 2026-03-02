import { useState } from 'react';

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

export function NewsletterForm({ onSubmit }: NewsletterFormProps) {

  const [name, setName] = useState('Alfons');
  const [email, setEmail] = useState('alfons@mail.test');
  const [age, setAge] = useState('15');
  const [agree, setAgree] = useState(false);
  const [language, setLanguage] = useState('cz');
  const [errors, setErrors] = useState<{ name?: string; email?: string; age?: string; agree?: string; language?: string }>({});

  function validate() {
    const newErrors: { name?: string; email?: string; age?: string; agree?: string; language?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Jméno je povinné.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email je povinný.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email není platný.';
    }
    if (!age.trim()) {
      newErrors.age = 'Věk je povinný.';
    } else if (isNaN(Number(age)) || Number(age) < 0) {
      newErrors.age = 'Věk musí být nezáporné číslo.';
    }
    if (!agree) {
      newErrors.agree = 'Musíte souhlasit s podmínkami.';
    }
    if (!language) {
      newErrors.language = 'Vyberte jazyk.';
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({ name, email, age, agree, language });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>
          Jméno:
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <div>
        <label>
          Věk:
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
      </div>
      <div>
        <label>
          <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} /> Souhlasím s podmínkami
        </label>
        {errors.agree && <div style={{ color: 'red' }}>{errors.agree}</div>}
      </div>
      <div>
        Preferovaný jazyk:
        <label>
          <input type="radio" name="language" value="cz" checked={language === 'cz'} onChange={e => setLanguage(e.target.value)} /> Čeština
        </label>
        <label>
          <input type="radio" name="language" value="en" checked={language === 'en'} onChange={e => setLanguage(e.target.value)} /> Angličtina
        </label>
        {errors.language && <div style={{ color: 'red' }}>{errors.language}</div>}
      </div>
      <button type="submit">Odeslat</button>
    </form>
  );
}