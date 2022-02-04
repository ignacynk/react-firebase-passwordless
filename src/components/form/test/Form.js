import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,
  HStack,
} from '@chakra-ui/react';

export const Form = ({ formProps }) => {
  const { control, register, handleSubmit } = formProps;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tests',
  });

  const appendField = () => append({ text: '' });

  return (
    <HStack w="72">
      <form onSubmit={handleSubmit(values => console.log(values))}>
        <FormLabel>Test Field Array</FormLabel>

        {fields.map((field, fieldIndex) => (
          <InputGroup key={field.id} mt={4}>
            <Input
              type="text"
              ref={register()}
              // name={`tests[${fieldIndex}].text`}
              name={`tests[${fieldIndex}].text`}
              control={control}
              defaultValue=""
              placeholder={field.id}
            />
            <InputRightElement width="4.5rem">
              <Button
                type="button"
                h="1.75rem"
                r="1.75rem"
                //   size="sm"
                onClick={() => remove(fieldIndex)}
              >
                delete
              </Button>
            </InputRightElement>
          </InputGroup>
        ))}
        <HStack>
          <Button type="button" onClick={appendField}>
            Add field
          </Button>
          <Button mt={4} type="submit">
            {'Wyślij >'}
          </Button>
        </HStack>
      </form>
    </HStack>
  );
};