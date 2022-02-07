import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Heading,
  GridItem,
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const { sendSignInLinkToEmail } = useAuth();

  const onSubmit = async data => {
    try {
      await sendSignInLinkToEmail(data.email);
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Logowanie
      </Heading>
      {errors.email && (
        <Alert status="error" variant="subtle" mt={6} mb={6}>
          <AlertIcon />
          {errors.email.message}
        </Alert>
      )}
      {formState.isSubmitSuccessful && (
        <Alert status="success" variant="subtle" mt={6} mb={6}>
          <AlertIcon />
          Sprawdź email z linkiem do logowania!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email" mb={4}>Adres email</FormLabel>
          <Input name="email" placeholder="jan@kowalski.com" ref={register()} />
          <Button
            mt={6}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Zaloguj
          </Button>
        </FormControl>
      </form>
    </GridItem>
  );
};

export default LoginForm;
