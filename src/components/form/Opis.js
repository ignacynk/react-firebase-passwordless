import React from "react";
import { Table, TableCaption, Thead, Tr, Td, Th, Tbody, Tfoot, Input} from '@chakra-ui/react'

export default function Opis({ register }) {
    console.log(this)
    return<>
        <Table variant='simple'>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th size='sm'>Dolegliwość</Th>
      <Th size='lg'></Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Th><Input placeholder="siema"/></Th>
    </Tr>
    <Tr>
      <Td>Miejsce dolegliwości</Td>
      <Td>centimetres (cm)</Td>
    </Tr>
    <Tr>
      <Td>Opis początku (cechy charakterystyczne; nagły/powolny):</Td>
      <Td>metres (m)</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
    </Tr>
  </Tfoot>
</Table>
    </>
}
