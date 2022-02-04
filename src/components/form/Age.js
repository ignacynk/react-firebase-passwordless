import React from 'react';
import { FormLabel, Heading, Input, Select } from '@chakra-ui/react'

  export default function Wiek({ register }) {
  return <>
    <Heading as="h1" mb={6}>
        Dane Pacjenta
    </Heading>

    {/* Age */}
    <FormLabel mt={6} htmlFor="wiek">Podaj wiek</FormLabel>
    <Input 
        name='patientInfo.age' 
        type='text' 
        placeholder='Podaj wiek pacjenta' 
        ref={register({ required: true, maxLength: 80 })} /> 

    {/* Gender */}
    <FormLabel mt={6} htmlFor="email">Płeć</FormLabel>
    <Select placeholder='Wybierz płeć' name="patientInfo.gender" ref={register({ required: true })}>
        <option value='kobieta'>Kobieta</option>
        <option value='mezczyzna'>Mężczyzna</option>
        <option value='mezczyzna'>Inne</option>
    </Select>

    {/* Main Emotion */}
    <FormLabel mt={6} htmlFor="mainEmotion">Dominujące emocje/nastawienie</FormLabel>
    <Input 
        name='patientInfo.mainEmotion' 
        type='text' 
        placeholder='np. neutralny, zaniepokojony, zirytowany, etc.' 
        ref={register({ required: true, maxLength: 80 })} /> 
    </>
}

