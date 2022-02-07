import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage, Heading,
    Input, GridItem, Button, NumberInput, NumberInputField, 
    NumberIncrementStepper, NumberInputStepper, 
    NumberDecrementStepper, Select
  } from '@chakra-ui/react'

import MultipleData from './MultipleData';
import { useForm } from 'react-hook-form';

function Form() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
      } = useForm();
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
          }, 3000);
        });
      }

  return(<GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
      <Heading as="h1" mb={6}>
        Dane Pacjenta
      </Heading>
      {/* Wiek */}
      <FormLabel mt={6} htmlFor="age">Wiek</FormLabel>
        <NumberInput min={1} max={100}>
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
        {/* Płeć */}
        <FormLabel mt={6} htmlFor="email">Płeć</FormLabel>
        <Select placeholder='Wybierz płeć' name="plec">
            <option value='kobieta'>Kobieta</option>
            <option value='mezczyzna'>Mężczyzna</option>
        </Select>
        <FormLabel mt={6} htmlFor='emocja'>Dominujące emocje/nastawienie</FormLabel>
        <Input id='emocja' type='emocja' {...register("emocje", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}/>
          <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage> 
        <FormLabel mt={6} htmlFor="age">Dolegliwości</FormLabel>
        <MultipleData />
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </FormControl>
    </form>
  </GridItem>)
}

export default Form;
