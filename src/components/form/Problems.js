import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,

} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

export const Problems = ({ formProps, path } ) => {
  const { control, register } = formProps;
  
  const pathName = path[0]
  const pathTitle = path[1]
  const pathPlaceholder = path[2]
  const pathNameProblems = `${pathName}Problems`

  const { fields, append, remove } = useFieldArray({
    control,
    name: `${pathNameProblems}`,
  });
  
  const appendField = () => append({ [pathNameProblems]: '', id: uuidv4() });
  return (
        <>
        <FormLabel mt={6}>{pathTitle}</FormLabel>  
        {fields.map((field, fieldIndex) => (
          <InputGroup key={field.id} mt={4}>
                
            <Input
              type="text"
              ref={register({require: true})}
              name={`${pathNameProblems}[${fieldIndex}].problem`}
              
              placeholder={pathPlaceholder}
            />
            <Input
              type="text"
              ref={register({require: true})}
              name={`${pathNameProblems}[${fieldIndex}].id`}
              value={uuidv4()}
              placeholder={pathPlaceholder}
              style={{display: 'none'}}
            />
            <InputRightElement width="4.5rem">
              <Button
                type="button"
                h="1.75rem"
                r="1.75rem"
                size="sm"
                onClick={() => remove(fieldIndex)}
              >
                {/* {console.log((data1))} */}
                usuń
              </Button>
            </InputRightElement>
          </InputGroup>
        ))}
          <Button type="button" mt={6} onClick={appendField}>
            Dodaj objaw
          </Button>
</>
  );
};