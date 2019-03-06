import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { encode } from '../../utils/functions';
import CommonContainer from '../../components/CommonContainer';
import LabelInput from '../../components/LabelInput';
import { Flex, Box } from '@rebass/grid';
import Text from '../../components/Text';
import Button from '../../components/Button';

const formName = 'Contacto';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (values, actions) => {
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
  };

  return (
    <CommonContainer py={2}>
      <Flex justifyContent="flex-end">
        <Box w={1}>
          <Text as="p" bold size={1} align="right" size={2}>
            Ponte en
          </Text>
          <Text as="h2" font="secondary" size={10} align="right" bold>
            contacto
          </Text>
        </Box>
      </Flex>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        render={({ isSubmitting, handleSubmit }) => {
          const disabled = isSubmitting || messageSent;

          return (
            <Box
              onSubmit={handleSubmit}
              as="form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name={formName}
              my={4}
              mx="auto"
              style={{ maxWidth: '58em' }}
            >
              <p hidden>
                <label>
                  Don’t fill this out: <Field name="bot-field" />
                </label>
              </p>

              <Flex flexDirection={['column', 'column', 'row']}>
                <Box pb={3} width={[1, 1, 1 / 2]} pr={[0, 0, 5]}>
                  <LabelInput
                    text="Nombre"
                    name="name"
                    autoComplete="name"
                    disabled={disabled}
                  />
                </Box>
                <Box pb={3} width={[1, 1, 1 / 2]} pl={[0, 0, 5]}>
                  <LabelInput
                    text="Correo"
                    name="email"
                    autoComplete="email"
                    type="email"
                    disabled={disabled}
                  />
                </Box>
              </Flex>
              <LabelInput
                text="Mensajes"
                name="message"
                disabled={disabled}
                component="textarea"
              />
              <Flex pt={4}>
                <Box ml="auto">
                  <Button disabled={disabled} type="submit">
                    enviar
                  </Button>
                </Box>
              </Flex>
            </Box>
          );
        }}
      />
    </CommonContainer>
  );
}

export default Contact;
