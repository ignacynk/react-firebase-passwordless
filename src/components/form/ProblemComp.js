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
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'problem',
  });
  const pathName = `${path}Problems`
  const appendField = () => append({ [pathName]: '' });
  // stąd ściaga dane do rozpoznania
  const fieldName = `${path}Field`
  console.log(fieldName)
  return (
<>
        <FormLabel mt={6}>Objawy główne {path}</FormLabel>
        
        {fields.map((field, fieldIndex) => (
          <InputGroup key={field.id} mt={4}>
            <Input
              type="text"
              ref={register()}
              // name={`tests[${fieldIndex}].text`}
              name={`${pathName}[${fieldIndex}].problem`}
              control={control}
              // defaultValue=""
              placeholder={field.id}
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
              {/* {console.log(fields)} */}
            </InputRightElement>
          </InputGroup>
        ))}

          <Button type="button" mt={6} onClick={appendField}>
            Dodaj objaw
          </Button>
</>
  );
};