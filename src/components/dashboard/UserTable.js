import React, { useState, useEffect } from "react";

import axios from "axios";
import { useAuth } from '../../hooks/useAuth';

import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react'

export default function UserTable () {
  let [userData, setUsersData] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://medsi-api.ink2000.repl.co/api/user/dashboard-table/${user.email}`,{
        
      },
      )
      .then((response) => setUsersData(response.data));
      
  }, []);

  return (<>
   <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' mt={6}>
    <Table variant='simple'>
        <Tbody>
            <Tr>
                <Th>Ilość formularzy</Th>
                <Td textAlign='center'>{userData.count}</Td>
            </Tr>
            <Tr>
                <Th>Łączny czas</Th>
                <Td textAlign='center'>{userData.time}h</Td>
            </Tr>
            <Tr>
                <Th>Czas / formularz</Th>
                <Td textAlign='center'>{userData.timeForm}min</Td>
            </Tr>
        </Tbody>
    </Table>
    </Box>
    {/* <div className="App">
      <h2>The JSON below is loaded from an external API!</h2>
      <code>{users.time}</code>
    </div> */}
    </>
  );
}

