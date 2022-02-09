import React from 'react';
import { 
    Heading,
    LinkBox,
    LinkOverlay,
    Circle,
    Center
  } from '@chakra-ui/react'
  
  // Import Icons
  import {
    AddIcon,  
  } from '@chakra-ui/icons'

  export const AddButtonForm = () => {
  return <>
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Heading size='lg' my='2' textAlign='center' mt={4}>
          <LinkOverlay href='/form'>
            Dodaj nowy formularz
          </LinkOverlay>
        </Heading>
        <Center mt={30} mb={4}>
          <Circle size={20} bg='white' color="#1A202C" textAlign='center'>
            <AddIcon w={10} h={10} size="lg"/>
          </Circle>
        </Center>
    </LinkBox>
    </>
}





