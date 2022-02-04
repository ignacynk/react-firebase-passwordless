import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormLabel,
  Heading
} from '@chakra-ui/react';

export const ProblemsPrimary = ({ formProps }) => {
  const { control, register } = formProps;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'primary',
  });

  const appendField = () => append({ primary: '' });

  return (
    <>
        <Heading as="h1" mb={6} mt={6}>
            Dane Pacjenta
        </Heading>
        <FormLabel>Główna aktualna dolegliwość</FormLabel>
        
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
                usuń
              </Button>
            </InputRightElement>
          </InputGroup>
        ))}

          <Button type="button" onClick={appendField} mt={4}>
            Dodaj objaw
          </Button>
</>
  );
};