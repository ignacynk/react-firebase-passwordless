import React from 'react';
import { 
    FormLabel, 
    Heading, 
    Input, 
} from '@chakra-ui/react'

  export const PatientsPerspective = ({ register }) => {
  return <>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Perspektywa pacjenta
    </Heading>

    <FormLabel mt={6} mb={8} style={{textAlign: 'center'}}>Jeśli dane nieznane prosimy o wpisanie możliwych treści na podstawie Państwa doświadczenia</FormLabel>

    {/* Przekonania */}
    <FormLabel mt={6} mb={4} htmlFor="patientsPerspective">Przekonania (dotyczące powodów, źródeł dolegliwości)</FormLabel>
    <Input
        min={1}
        max={122}
        name='patientsPerspective.conviction' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Obawy */}
    <FormLabel mt={6} mb={4} htmlFor="patientsPerspective">Obawy (emocje, wynikające z przekonań)</FormLabel>
    <Input
        min={1}
        max={122}
        name='patientsPerspective.worries' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    {/* Oczekiwania */}   
    <FormLabel mt={6} mb={4} htmlFor="patientsPerspective">Oczekiwania (wobec lekarza)</FormLabel>
    <Input
        min={1}
        max={122}
        name='patientsPerspective.expectations' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} />

    {/* Wpływ */}   
    <FormLabel mt={6} mb={4} htmlFor="patientsPerspective">Wpływ na funkcjonowanie (wpływ dolegliwości na styl życia, funkcjonowanie społeczne, zawodowe)</FormLabel>
    <Input
        min={1}
        max={122}
        name='patientsPerspective.influence' 
        type='text' 
        placeholder='Wpisz odpowiedź' 
        ref={register({ required: true })} /> 

    </>
}

