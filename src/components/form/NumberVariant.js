import React from 'react';
import { 
    FormLabel, 
    Heading, 
    Input
} from '@chakra-ui/react'

  export const NumberVariant = ({ register }) => {
  return <>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Dane scenariusza
    </Heading>

    {/* Number */}
    <FormLabel mt={6} mb={4} htmlFor="number">Podaj numer scenariusza</FormLabel>
    <Input
        min={1}
        max={2000}
        name='form.number' 
        type='number' 
        placeholder='Wpisz numer scenariusza' 
        ref={register({ required: true, maxLength: 80 })}  /> 
    {/* Variant */}
    <FormLabel mt={6} mb={4} htmlFor="variant">Podaj waraint scenriusza</FormLabel>
    <Input
        min={1}
        max={20}
        defaultValue={1}
        name='form.variant' 
        type='number'
        placeholder='' 
        ref={register({ required: true, maxLength: 80 })} 
    /> 
    {/* Name */}
    <FormLabel mt={6} mb={4} htmlFor="variant">Podaj nazwę scenriusza</FormLabel>
    <Input
        min={1}
        max={20}
        name='form.name' 
        type='text'
        placeholder='Podaj nazwe formularza' 
        ref={register({ required: true, maxLength: 80 })} 
    />
    </>
}

