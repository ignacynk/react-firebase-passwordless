import React from 'react';
import { 
  FormLabel, 
  Heading, 
  Input,
} from '@chakra-ui/react'

export const TipsForSP = ({ register }) => {    
  return (
<>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
        Wskazówki dla SP
    </Heading>
    <FormLabel mt={6} mb={4} htmlFor="email">Ewentualne wskazówki dla Symulowanego Pacjenta</FormLabel>
    {/* <Text fontSize='xs'>To, co tu napiszesz w największym stopniu pomoże SP wczuć się w swoją postać. Postaraj się najbardziej pełnie, kompletnie opisać co działo się od momentu pojawienia się dolegliwości (ew. wcześniej, jeśli coś do nich doprowadziło), poprzez etap podejmowania decyzji o kontakcie z lekarzem do samej rozmowy z lekarzem. Potraktuj to jako instrukcję dla SP, możesz też uwzględnić proponowany sposób wypowiedzi pacjenta.</Text> */}
    <Input 
      name='tipsForSP'
      type='text'
      placeholder='np. sposób mówienia, duszność, etc.' 
      ref={register()} 
    /> 
</>
  )
}
