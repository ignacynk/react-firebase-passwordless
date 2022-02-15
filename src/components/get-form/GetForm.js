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
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' mt={6} mb={6}>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            Formularz nr: 1
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href='#'>
            OBJAWY OGÓLNE - osłabienienie odporności: ciągle choruję: cały czas mi spływa wydzielina
            </LinkOverlay>
        </Heading>
    </LinkBox>
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' mt={6} mb={6}>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            Formularz nr: 2
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href='#'>
            plecy - ból: schodzące do nogi: i mrowienie
            </LinkOverlay>
        </Heading>
        {/* <Text>
            Catch up on what’s been cookin’ at Smashing and explore some of the most
            popular community resources.
        </Text> */}
    </LinkBox>
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' mt={6} mb={6}>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            Formularz nr: 3
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href='#'>
            OBJAWY OGÓLNE - osłabienienie odporności: ciągle choruję: cały czas mi spływa wydzielina
            </LinkOverlay>
        </Heading>
        {/* <Text>
            Catch up on what’s been cookin’ at Smashing and explore some of the most
            popular community resources.
        </Text> */}
    </LinkBox>
    <Center>
        <Button colorScheme='teal' size='lg'>
            Wylosuj inne
        </Button>
    </Center>
    </GridItem>
  );
}