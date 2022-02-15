import React, { useState, useEffect } from "react";

import axios from "axios";
import { useAuth } from '../../hooks/useAuth';
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


export const GetForm =  () => { 
    // Import user's email
    const { user } = useAuth();


    let [formsData, setFormsData] = useState([]);

    // Import forms data at the begining
    useEffect(() => {
    axios
        .get(
        `https://medsi-api.ink2000.repl.co/api/getn/${user.email}`,{
        
        },
        )
        .then((response) => setFormsData(response.data));
        
    }, []);

    // Function for button's onClick - kinda refresh data
    const getNewOne = () => {
        axios
        .get(
        `https://medsi-api.ink2000.repl.co/api/getn/${user.email}`,{
        
        },
        )
        .then((response) => setFormsData(response.data));
    }

  return (
    <GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <Heading style={{textAlign: 'center'}}>
        Wybierz formularz
    </Heading>
    <Divider mt={12} mb={12} />
    {formsData && formsData.map((forms,i) => (
    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md' mt={6} mb={6} key={forms._id}>
        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
            Formularz nr: {i + 1}
        </Box>
        <Heading size='md' my='2'>
            <LinkOverlay href={`/form/${forms._id}`}>
            {forms.name}
            </LinkOverlay>
        </Heading>
    </LinkBox>
    ))}
    <Center>
        <Button colorScheme='teal' size='lg' onClick={getNewOne}>
            Wylosuj inne
        </Button>
    </Center>
    </GridItem>
  );
}