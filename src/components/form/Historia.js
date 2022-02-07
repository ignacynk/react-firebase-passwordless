import React from 'react';
import { 
  FormLabel, 
  Heading, 
  Textarea,
  Popover, 
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'

export const Historia = ({ register }) => {
  return (
<>
    <Heading textAlign='center' as="h1" mt={6} mb={12}>
      Historia choroby
    </Heading>
    <FormLabel mt={6} mb={4} htmlFor="email">Historia aktualnej choroby/kontekst/inne istotne informacje:</FormLabel>
    {/* <Text fontSize='xs'>To, co tu napiszesz w największym stopniu pomoże SP wczuć się w swoją postać. Postaraj się najbardziej pełnie, kompletnie opisać co działo się od momentu pojawienia się dolegliwości (ew. wcześniej, jeśli coś do nich doprowadziło), poprzez etap podejmowania decyzji o kontakcie z lekarzem do samej rozmowy z lekarzem. Potraktuj to jako instrukcję dla SP, możesz też uwzględnić proponowany sposób wypowiedzi pacjenta.</Text> */}
    <Textarea 
      name='tx' 
      type='text'
      minHeight={150}
      placeholder='Wpisz zgodnie z instrukcją aktywowaną pod poniszym przyciskiem' 
      ref={register({ required: true, minLength: 10 })} 
    />
    <Popover mt={4}>
    <PopoverTrigger>
      <Button>Pokaż instrukcje pola</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Krótka, przejrzysta i treściwa instrukcja</PopoverHeader>
      <PopoverBody>To, co tu napiszesz w największym stopniu pomoże SP wczuć się w swoją postać. Postaraj się najbardziej pełnie, kompletnie opisać co działo się od momentu pojawienia się dolegliwości (ew. wcześniej, jeśli coś do nich doprowadziło), poprzez etap podejmowania decyzji o kontakcie z lekarzem do samej rozmowy z lekarzem. Potraktuj to jako instrukcję dla SP, możesz też uwzględnić proponowany sposób wypowiedzi pacjenta.</PopoverBody>
    </PopoverContent>
  </Popover>
</>
  )
}
