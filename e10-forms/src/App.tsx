import { useState } from 'react';
import { /*NewsletterForm,*/ type NewsletterData } from './forms/NewsletterForm';
import { NewsletterFormZod } from './forms/NewsletterFormZod';

function App() {
  const [formData, setFormData] = useState<NewsletterData | null>(null);

  return (
    <div>
      <h1>Demo: Newsletter registrace</h1>
      {formData === null ? (
        <NewsletterFormZod onSubmit={setFormData} />
      ) : (
        <div>
          <h2>Odeslaná data</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={() => setFormData(null)}>Vymazat data</button>
        </div>
      )}
    </div>
  );
}

export default App;
