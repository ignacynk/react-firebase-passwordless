import React from 'react';
import { Heading, GridItem, Text, Center } from '@chakra-ui/react';

import { useAuth } from '../../hooks/useAuth';

import { AddButtonForm } from './AddButtonForm'
import UserTable from './UserTable';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Center>
          <Heading as="h1" mb={6}>
            Panel użytkownika
          </Heading>
        </Center>
        <Center>
          <Text fontSize="lg" mb={10}>Witaj, {user.email}!</Text>
        </Center>
      <AddButtonForm />
      <UserTable />
    </GridItem>
  );
};
export default Dashboard;
