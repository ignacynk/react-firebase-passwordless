import React from "react";

// Import hooks for form
import { useForm } from "react-hook-form";

// Import UI library 
import { 
  GridItem, 
  Button,
  Heading,
  Divider
} from '@chakra-ui/react'

// Import components
import { Age } from "./Age";
import { Problems } from "./Problems";
import { Historia } from "./Historia";
import { TableTest } from "./TableTest";

// Import texts for components
import { pathing } from "./pathNames";

export default function Form() {
  const { control, register, handleSubmit, watch, formState: { isSubmitting } } = useForm({
    mode: 'onChange',
  });

  const formData = watch();

  function onSubmit(values) {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch('https://mongodb-connection-using-node-js.konomlopek.repl.co/api/postForm', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', values);
        })
        .catch((error) => {
          console.error('Error:', values);
        });
        console.log(JSON.stringify(values, null, 2));
        
        resolve();
      }, 3000);
    });
  }

  return (
    <GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Age register={register} />
      <Divider mt={12} mb={12}/>

      <Heading textAlign='center' as="h1" mt={6} mb={12}>Dolegliwości</Heading>
      <Problems formProps={{ control, register }} path={pathing.main} data={formData}/>
      <Problems formProps={{ control, register }} path={pathing.actual}/>
      <Problems formProps={{ control, register }} path={pathing.chronic}/>
      <Divider mt={12} mb={12}/>
      
      <Historia register={register} />
      <Divider mt={12} mb={12}/>

      <Heading textAlign='center' as="h1" mt={6} mb={12}>Opisy dolegliwości</Heading>
      <TableTest data={formData.mainProblems} register={register} path={pathing.main}/>
      <TableTest data={formData.actualProblems} register={register} path={pathing.actual}/>
      <TableTest data={formData.chronicProblems} register={register} path={pathing.chronic}/>
      
      <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}>
          Wyślij
        </Button>
    </form>
    </GridItem>
  );
}