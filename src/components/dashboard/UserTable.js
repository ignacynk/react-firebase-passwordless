import React from 'react';
import {
    Table,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
  } from '@chakra-ui/react'
  

  export const UserTable = () => {
  return <>
   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' mt={6}>
    <Table variant='simple'>
        <Tbody>
            <Tr>
                <Th>Ilość formularzy</Th>
                <Td textAlign='center'>34 szt.</Td>
            </Tr>
            <Tr>
                <Th>Łączny czas</Th>
                <Td textAlign='center'>23:03h</Td>
            </Tr>
            <Tr>
                <Th>Czas / formularz</Th>
                <Td textAlign='center'>43:03min</Td>
            </Tr>
        </Tbody>
    </Table>
    </Box>
    </>
}





