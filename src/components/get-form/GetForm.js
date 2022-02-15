import React from "react";

// Import UI library 
import { 
  GridItem, 
  LinkBox, 
  LinkOverlay,
  Heading,
  Button,
  Box,
  Divider,
  Center
} from '@chakra-ui/react'
import {datas} from "./data"
// Import Components
// import { AddButtonForm } from './AddButtonForm';

export const GetForm =  () =>{ 
  return (
    <GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <Heading style={{textAlign: 'center'}}>
        Wybierz formularz
    </Heading>
    <Divider mt={12} mb={12} />
    {datas && datas.map((data,index) => (
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' mt={6} mb={6}>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            Formularz nr: {index}
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href='#'>
            {data.name}
            </LinkOverlay>
        </Heading>
    </LinkBox>
    ))}
    <Center>
        <Button colorScheme='teal' size='lg'>
            Wylosuj inne
        </Button>
    </Center>
    </GridItem>
  );
}