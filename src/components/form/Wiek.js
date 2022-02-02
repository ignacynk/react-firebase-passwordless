import React from 'react';
import { FormLabel, Heading, Input, Select } from '@chakra-ui/react'

  export default function Wiek({ register }) {
  return <>
    <Heading as="h1" mb={6}>
        Dane Pacjenta
    </Heading>
    {/* Wiek */}
    <FormLabel mt={6} htmlFor="wiek">Podaj wiek</FormLabel>
    <Input 
        name='wiek' 
        type='text' 
        placeholder='wiek' 
        ref={register({ required: true, maxLength: 80 })} /> 
    <FormLabel mt={6} htmlFor="email">Płeć</FormLabel>
    <Select placeholder='Wybierz płeć' name="plec" ref={register({ required: true })}>
        <option value='kobieta'>Kobieta</option>
        <option value='mezczyzna'>Mężczyzna</option>
    </Select>
    </>
}

