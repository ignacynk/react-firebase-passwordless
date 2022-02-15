import React from 'react';
import { 
  FormLabel, 
  Heading,
  Textarea,
} from '@chakra-ui/react'

export const RestActualProblems = ({ register }) => {    
  return (
<>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Pozostałe aktualne dolegliwości
    </Heading>
    <FormLabel mt={6} mb={4} htmlFor="email">Pozostałe aktualne dolegliwości (wymień i scharakteryzuj)</FormLabel>
    <Textarea 
      name='restActualProblems'
      type='text'
      minHeight={150}
      placeholder='Jeśli więcej niz jedno prosze wpisać po przecinku'
      ref={register({ required: true})}
    /> 
</>
  )
}
