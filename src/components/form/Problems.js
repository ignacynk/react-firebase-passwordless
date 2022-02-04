import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';

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

  const appendField = () => append({ [pathNameProblems]: '' });
  return (
<>
        <FormLabel mt={6}>{pathTitle}</FormLabel>  
        {fields.flatMap((field, fieldIndex) => (
          <InputGroup key={field.id} mt={4}>
          {console.log(field)}
            <Input
              type="text"
              ref={register({require: true})}
              name={`${pathNameProblems}[${fieldIndex}].problem`}
              
              placeholder={pathPlaceholder}
            />
            <InputRightElement width="4.5rem">
              <Button
                type="button"
                h="1.75rem"
                r="1.75rem"
                size="sm"
                onClick={() => remove(fieldIndex)}
              >
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