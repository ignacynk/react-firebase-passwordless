import React from 'react';
import { 
    FormLabel, 
    Heading, 
    Input, 
    Select 
} from '@chakra-ui/react'

  export const Age = ({ register }) => {
  return <>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Dane Pacjenta
    </Heading>

    {/* Age */}
    <FormLabel mt={6} mb={4} htmlFor="age">Podaj wiek</FormLabel>
    <Input 
        name='patientInfo.age' 
        type='text' 
        placeholder='Podaj wiek pacjenta' 
        ref={register({ required: true, maxLength: 80 })} /> 

    {/* Gender */}
    <FormLabel mt={6} mb={4} htmlFor="gender">Płeć</FormLabel>
    <Select placeholder='Wybierz płeć' name="patientInfo.gender" ref={register({ required: true })}>
        <option value='kobieta'>Kobieta</option>
        <option value='mezczyzna'>Mężczyzna</option>
        <option value='mezczyzna'>Inne</option>
    </Select>

    {/* Main Emotion */}
    <FormLabel mt={6} mb={4} htmlFor="mainEmotion">Dominujące emocje/nastawienie</FormLabel>
    <Input 
        name='patientInfo.mainEmotion' 
        type='text' 
        placeholder='np. neutralny, zaniepokojony, zirytowany, etc.' 
        ref={register({ required: true, maxLength: 80 })} 
    /> 
    </>
}

