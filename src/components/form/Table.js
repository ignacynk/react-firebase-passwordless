import React from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Input,
  FormLabel
} from '@chakra-ui/react';
import { tableColumnValues, tableDataNames } from './pathNames';
export const Table = ({ data, register, path }) => {

  const pathName = path[0]
  const pathHeaderTitle = path[3]
  
  return (
    <>
    {<FormLabel mt={6} htmlFor="table">{pathHeaderTitle}</FormLabel>}
    {data &&
        data.map(({ problem }, i) => (
      <ChakraTable variant="simple" mt={6} size='sm'>
        <Thead>
          <Tr>
            <Th size="sm">Dolegliwość</Th>     
            <Th calspan='2' size="lg" style={{fontSize: "1rem", margin: "auto"}}>
              <div style={{margin: 'auto'}}>{problem}</div>
              <Input style={{display: 'none'}}name={problem===undefined ? `trash.${pathName}[${i}].problem` : `table.${pathName}[${i}].problem`}
                  type='text'
                  defaultValue={problem}
                  placeholder=''
                  ref={register({  maxLength: 80 })} />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
        {/* Miejsce doleglowości */}
          <Tr>
            <Td>{tableColumnValues[0]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[0]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[0]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Czas trwania */}
        <Tr>
            <Td>{tableColumnValues[1]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[1]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[1]}`}
                type='text'
                minWidth='400px'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Opis początku */}
        <Tr>
            <Td>{tableColumnValues[2]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[2]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[2]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Przebieg w czasie */}
        <Tr>
            <Td>{tableColumnValues[3]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[3]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[3]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>          
        {/* Opis charakteru */}
        <Tr>
            <Td>{tableColumnValues[4]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[4]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[4]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>          
        {/* Promieniowanie ból */}
        <Tr>
            <Td>{tableColumnValues[5]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[5]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[5]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Czynniki nasilające */}
        <Tr>
            <Td>{tableColumnValues[6]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[6]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[6]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Czynniki łagodzące */}
        <Tr>
            <Td>{tableColumnValues[7]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[7]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[7]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Nasilenie */}
        <Tr>
            <Td>{tableColumnValues[8]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[8]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[8]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Dotychczasowe leczenie */}
        <Tr>
            <Td>{tableColumnValues[9]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[9]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[9]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>
        {/* Jak pacjent opisze */}
        <Tr>
            <Td>{tableColumnValues[10]}</Td> 
            <Td key={i} md={3}>
              <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[10]}`
                : `table.${pathName}[${i}].duration.${tableDataNames[10]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />
            </Td>             
          </Tr>                                        
          </Tbody>
      </ChakraTable>
        )
      )
    }
    </>
  )
};