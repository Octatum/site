import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { encode } from '../../utils/functions';
import CommonContainer from '../../components/CommonContainer';
import LabelInput from '../../components/LabelInput';
import { Flex, Box } from '@rebass/grid';
import Button from '../../components/Button';
import SectionHeader from './SectionHeader';
import SectionDiv from '../../components/SectionDiv';
import { navigationIds } from '../../components/Navhub';

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
      alert('Tu mensaje ha sido enviado');
      actions.resetForm();
    } catch (exception) {
      setFormError(true);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <CommonContainer py={2}>
      <SectionDiv id={navigationIds.contact} />
      <Flex>
        <SectionHeader
          topText="Armemos"
          lightText="un gran"
          greenText="FUTURO"
        />
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
              style={{ maxWidth: '40em' }}
            >
              <p hidden>
                <label>
                  Don’t fill this out: <Field name="bot-field" />
                </label>
              </p>

              <Flex flexDirection={['column', 'column', 'row']}>
                <Box pb={2} width={[1, 1, 1 / 2]} pr={[0, 0, 5]}>
                  <LabelInput
                    text="Nombre"
                    name="name"
                    autoComplete="name"
                    disabled={disabled}
                  />
                </Box>
                <Box pb={2} width={[1, 1, 1 / 2]} pl={[0, 0, 5]}>
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
              <Flex pt={3}>
                <Box ml="auto">
                  <Button
                    px={4}
                    py={2}
                    disabled={disabled}
                    medium
                    type="submit"
                  >
                    Enviar
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
