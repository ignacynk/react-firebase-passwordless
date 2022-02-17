import React from 'react';
import { 
  FormLabel, 
  Heading, 
  Input,
} from '@chakra-ui/react'

export const Diagnosis = ({ register }) => {    
  return (
<>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Rozpoznanie
    </Heading>
    <FormLabel mt={6} mb={4} htmlFor="email">Postulowane rozpoznanie - (możliwe więcej niż 1)</FormLabel>
    <Input 
      name='diagnosis'
      type='text'
      placeholder='Jeśli więcej niz jedno prosze wpisać po przecinku' 
      ref={register({ required: true })} 
    /> 
</>
  )
}
