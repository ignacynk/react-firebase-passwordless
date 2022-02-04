import React from 'react';
import {
  Table as ChakraTable,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Tfoot,
  Input,
} from '@chakra-ui/react';

export const Table = ({ data }) => {
  console.log(data);

  return (
    <>
      <ChakraTable variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th size="sm">Dolegliwość</Th>
            {data &&
              data.map(({ text }, i) => (
                <Th key={i} size="lg">
                  {text}
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            {data &&
              data.map(({ text }, i) => (
                <Td key={i}>
                  <Input placeholder="" />
                </Td>
              ))}
          </Tr>
          <Tr>
            <Td>Miejsce dolegliwości</Td>
            {data &&
              data.map(({ text }, i) => <Td key={i}>centimetres (cm)</Td>)}
          </Tr>
          <Tr>
            <Td>Opis początku (cechy charakterystyczne; nagły/powolny):</Td>
            {data && data.map(({ text }, i) => <Td key={i}>metres (m)</Td>)}
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
          </Tr>
        </Tfoot>
      </ChakraTable>
    </>
  );
};