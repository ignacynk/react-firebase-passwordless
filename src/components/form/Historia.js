import React from 'react';
import { FormLabel, Heading, Text, Textarea } from '@chakra-ui/react'

export default function Historia({ register }) {
  return <>
    <Heading as="h1" mt={6} mb={6}>
    Historia choroby
    </Heading>
    <FormLabel mt={6} htmlFor="email">Historia aktualnej choroby/kontekst/inne istotne informacje:</FormLabel>
    {/* <Text fontSize='xs'>To, co tu napiszesz w największym stopniu pomoże SP wczuć się w swoją postać. Postaraj się najbardziej pełnie, kompletnie opisać co działo się od momentu pojawienia się dolegliwości (ew. wcześniej, jeśli coś do nich doprowadziło), poprzez etap podejmowania decyzji o kontakcie z lekarzem do samej rozmowy z lekarzem. Potraktuj to jako instrukcję dla SP, możesz też uwzględnić proponowany sposób wypowiedzi pacjenta.</Text> */}
    <Textarea 
        name='tx' 
        type='text'
        minHeight={150}
        mt={4}
        placeholder='To, co tu napiszesz w największym stopniu pomoże SP wczuć się w swoją postać. Postaraj się najbardziej pełnie, kompletnie opisać co działo się od momentu pojawienia się dolegliwości (ew. wcześniej, jeśli coś do nich doprowadziło), poprzez etap podejmowania decyzji o kontakcie z lekarzem do samej rozmowy z lekarzem. Potraktuj to jako instrukcję dla SP, możesz też uwzględnić proponowany sposób wypowiedzi pacjenta.' 
        ref={register({ required: true, minLength: 10 })} /> 
    </>
}