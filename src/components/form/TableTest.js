import React from 'react';
import {
  Input,
  FormLabel,
  Box, 
  Heading, 
  Stack
} from '@chakra-ui/react';
import { tableColumnValues, tableDataNames } from './pathNames';
import { TableCell } from './TableCell';

export const TableTest = ({ data, register, path }) => {

  const pathName = path[0]
  const pathHeaderTitle = path[3]
  setInterval(() => {
    
  }, 1000);
  return (
    <>
    {<FormLabel mt={6} mb={6} htmlFor="table-test" textAlign='center'>{pathHeaderTitle}</FormLabel>}
    {data &&
        data.map(({ problem, key }, i) => ( 
        <Box p={5} shadow='sm' borderWidth='1px' minWidth='50vw' mb={6} borderRadius='lg'>
            <Stack spacing={8} >
                <FormLabel>{pathHeaderTitle}</FormLabel>
                <Heading as="h1" mb={6}>
                    {problem}
                </Heading>   
                <Input style={{display: 'none'}} 
                    name={problem===undefined 
                    ? `trash.${pathName}Problem[${i}].problem` 
                    : `table.${pathName}Problem[${i}].problem`}
                    type='text'
                    defaultValue={problem}
                    placeholder=''
                    ref={register({  maxLength: 80 })} />
            </Stack>
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[1]} 
                problem={problem} 
                tableDataNames={tableDataNames[1]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[2]} 
                problem={problem} 
                tableDataNames={tableDataNames[2]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[3]} 
                problem={problem} 
                tableDataNames={tableDataNames[3]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[4]} 
                problem={problem} 
                tableDataNames={tableDataNames[4]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[5]} 
                problem={problem} 
                tableDataNames={tableDataNames[5]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[6]} 
                problem={problem} 
                tableDataNames={tableDataNames[6]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[7]} 
                problem={problem} 
                tableDataNames={tableDataNames[7]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[8]} 
                problem={problem} 
                tableDataNames={tableDataNames[8]} 
                i={i}  
            />   
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[9]} 
                problem={problem} 
                tableDataNames={tableDataNames[9]} 
                i={i}  
            />          
            <TableCell 
                pathName={pathName} 
                register={register} 
                tableColumnValues={tableColumnValues[10]} 
                problem={problem} 
                tableDataNames={tableDataNames[10]} 
                i={i}  
            />   

            {/* Miejsce doleglowości */}
            {/* <Stack direction={['column', 'row']} spacing={4}>                
                    <FormLabel>{tableColumnValues[0]}</FormLabel>                                
                    <Input name={problem===undefined 
                ? `trash${pathName}.${pathName}[${i}].${tableDataNames[0]}`
                : `table.${pathName}Problem[${i}].${tableDataNames[0]}`}
                type='text'
                placeholder=' ' 
                ref={register({ required: true, maxLength: 80 })} 
                />              
            </Stack> */}
        
          </Box>
        )
      )
    }
    </>
  )
};