import React, { useState } from 'react';
import { submitForm } from '../../utils/ThirdPartyApi';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState('');
  async function submit(e) {
    e.preventDefault();

    try {
      const response = await submitForm({ email, message });
      if (response.code === 200) {
        setSubmitted(true);
      } else {
        setError(response.message);
      }
    } catch {
      setError(error.message);
    }
  }

  return (
    <section className='contact'>
      {' '}
      <h1 className='contact__title'>Entre em contato comigo:</h1>
      <div className='contact__container'>
        {submitted ? (
          <h3>Mensagem enviada com sucesso!</h3>
        ) : (
          <form onSubmit={submit} className='contact__form'>
            <input
              type='email'
              name='email'
              id='email-input'
              className='contact__input'
              placeholder='E-Mail'
              minLength={2}
              maxLength={40}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='tel'
              name='tel'
              id='tel-input'
              className='contact__input'
              placeholder='Celular (99) 99999-9999'
              mask='(99) 99999-9999'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              type='text'
              name='text'
              id='text-input'
              className='contact__input contact__input_message'
              placeholder='Mensagem'
              minLength={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button className='contact__submit' type='submit'>
              <span className='contact__span'>Enviar! </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
