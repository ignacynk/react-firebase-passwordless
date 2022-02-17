import React from 'react';
import { 
  FormLabel, 
  Heading,
  Textarea,
  Text
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
    <FormLabel mt={6} mb={4} htmlFor="powod">Inne dolegliwości</FormLabel>
    <Text fontSize='xs' mb={4} mt={4}>Wymień i krótko scharakteryzuj (niezwiązane z głównymi dolegliwościami lub przewlekłe):</Text>
    <Textarea 
      name='otherProblems'
      type='text'
      minHeight={150}
      placeholder='Wymień i krótko scharakteryzuj' 
      ref={register({ required: true })} 
    />
</>
  )
}
