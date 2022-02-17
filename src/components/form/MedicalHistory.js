import React from 'react';
import { 
    FormLabel, 
    Heading, 
    Input,
    Textarea
} from '@chakra-ui/react'

  export const MedicalHistory = ({ register }) => {
  return <>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Dotychczasowa historia medyczna:
    </Heading>

    {/* Przewlekłe choroby */}
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Przewlekłe choroby i przyjmowane leki, czy pacjent pod opieką poradni</FormLabel>
    <Textarea
        min={1}
        max={122}
        name='medicalHistory.chronicDisease' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Przebyte choroby i operacje */}
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Przebyte choroby i operacje</FormLabel>
    <Input
        min={1}
        max={122}
        name='medicalHistory.operation' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Wywiad ginekologiczny */}   
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Wywiad ginekologiczny</FormLabel>
    <Input
        min={1}
        max={122}
        name='medicalHistory.gynecologist' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} />

    {/* Alergie */}   
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Alergie</FormLabel>
    <Input
        min={1}
        max={122}
        name='medicalHistory.allergies' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Używki */}   
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Używki</FormLabel>
    <Input
        min={1}
        max={122}
        name='medicalHistory.drugs' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Wywiad rodzinny (choroby w rodzinie) */}   
    <FormLabel mt={6} mb={4} htmlFor="przewlekleChoroby">Wywiad rodzinny (choroby w rodzinie)</FormLabel>
    <Textarea
        min={1}
        max={122}
        name='medicalHistory.familyProblems' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 
    </>
}

