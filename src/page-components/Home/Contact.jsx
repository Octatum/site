import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { encode } from '../../utils/functions';

const formName = 'Contacto';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formError, setFormError] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values, actions) => {
        setFormError(false);
        try {
          await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode({
              'form-name': formName,
              ...values,
            }),
          });
          setMessageSent(true);
          alert('Your message has been sent');
          actions.resetForm();
        } catch (exception) {
          setFormError(true);
        } finally {
          actions.setSubmitting(false);
        }
      }}
      render={({ isSubmitting, handleSubmit }) => {
        const disabled = isSubmitting || messageSent;

        return (
          <form
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name={formName}
          >
            <p hidden>
              <label>
                Don’t fill this out: <Field name="bot-field" />
              </label>
            </p>
            <label>
              <div>nombre</div>
              <Field
                disabled={disabled}
                name="name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              <label>correo</label>
              <Field
                disabled={disabled}
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>
            <label>
              <label>mensaje</label>
              <Field
                disabled={disabled}
                name="message"
                component="textarea"
                required
              />
            </label>
            <button disabled={disabled} type="submit">
              enviar
            </button>
          </form>
        );
      }}
    />
  );
}

export default Contact;
