import React, {useState} from "react";
// 
import { useHistory } from "react-router-dom"

// Import hooks for form
import { useForm } from "react-hook-form";
import axios from "axios";
// Import UI library 
import { 
  GridItem, 
  Button,
  Heading,
  Divider
} from '@chakra-ui/react'

// Import components
import { UserInfo } from "./UserInfo"
import { Age } from "./Age";
import { Problems } from "./Problems";
import { Historia } from "./Historia";
import { Table } from "./Table";
import { Timer } from './Timer';
import { Instruction } from "./Instruction";
import { NumberVariant } from "./NumberVariant";
// Import texts for components
import { pathing } from "./pathNames";


export default function Form() {
  const { control, register, handleSubmit, watch, formState: { isSubmitting } } = useForm({
    mode: 'onChange',
  });
  // Redirecting from RRD
  let history = useHistory()

  // Watch live input datas
  const formData = watch();
  console.log(JSON.stringify(formData))

  function onSubmit(values) {
    return new Promise((resolve) => {
      const postURL = 'https://api-form-connector.konomlopek.repl.co/api/postForm'
      setTimeout(() => {
      //   axios({
      //     method: 'post',
      //     url: 'https://api-form-connector.konomlopek.repl.co/api/postForm',
      //     auth: {
      //       username: 'medsi',
      //       password: 'uNfaxM27NBKj6jHW',    
      //     },
      //     headers:{
      //       'Content-Type': 'application/json',         
      //     },
      //     data: JSON.stringify(values)
      // })
              fetch( postURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/html',
            
          },
          body: JSON.stringify(values),
        }) 
        .then(response => response.json())
        .then(data => {
          console.log('Success!');
        })
        .catch((error) => {
          console.error('Error!');
        });
        // console.log(JSON.stringify(values, null, 2));
        resolve(history.push("/"));
      }, 3000);
    });
  }

  return (
    
    <GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Easy import user's info */}
      <UserInfo register={register} />

      <Instruction />
      <NumberVariant register={register}/>
      <Divider mt={12} mb={12}/>

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
      <Table data={formData.mainProblems} register={register} path={pathing.main}/>
      <Table data={formData.actualProblems} register={register} path={pathing.actual}/>
      <Table data={formData.chronicProblems} register={register} path={pathing.chronic}/>
      <Timer register={register} />
      
      <Button
          // mt={4}
          // colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}>
          Wyślij
        </Button>
    </form>
    </GridItem>
  );
}