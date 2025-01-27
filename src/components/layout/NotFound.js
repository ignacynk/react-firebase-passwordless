import React from 'react';
import { Heading, GridItem } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Błąd 404: Strona nie została znaleziona
      </Heading>
    </GridItem>
  );
};

export default NotFound;
