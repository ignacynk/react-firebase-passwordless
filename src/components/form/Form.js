import React from "react";

// Redirecting
import { useHistory } from "react-router-dom"

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
import { UserInfo } from "./UserInfo"
import { Age } from "./Age";
import { Problems } from "./Problems";
import { History } from "./History";
import { Table } from "./Table";
import { Timer } from './Timer';
import { Instruction } from "./Instruction";
import { ReasonVisit } from "./ReasonVisit"
import { MedicalHistory } from "./MedicalHistory";
import { ContextSocial } from "./ContextSocial";
import { PatientsPerspective } from "./PatientsPerspective";
import { TipsForSP } from "./TipsForSP";
import { Diagnosis } from "./Diagnosis";
import { RestActualProblems } from "./RestActualProblems";
import { NumberVariant } from './NumberVariant'
// import { SubmitingButton } from './SubmitingButton'

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
  // console.log(JSON.stringify(formData))

  // API URL to post form   
  const postURL = 'https://medsi-api.ink2000.repl.co/Api/PostForm'
  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
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
        console.log(JSON.stringify(values, null, 2));
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
      <Divider mt={12} mb={12}/>

      <NumberVariant register={register} />
      <Divider mt={12} mb={12}/>
      
      <Age register={register} />
      <Divider mt={12} mb={12}/>

      <Heading textAlign='center' as="h1" mt={6} mb={12}>Dolegliwości</Heading>
      <Problems formProps={{ control, register }} path={pathing.main} data={formData}/>
      <Problems formProps={{ control, register }} path={pathing.actual}/>
      <Problems formProps={{ control, register }} path={pathing.chronic}/>
      <Divider mt={12} mb={12}/>
      
      <History register={register} />
      <Divider mt={12} mb={12}/>

      <ReasonVisit register={register} />
      <Divider mt={12} mb={12} />

      <Heading textAlign='center' as="h1" mt={6} mb={12}>Opisy dolegliwości</Heading>
      <Table data={formData.mainProblems} register={register} path={pathing.main}/>
      <Table data={formData.actualProblems} register={register} path={pathing.actual}/>
      <Table data={formData.chronicProblems} register={register} path={pathing.chronic}/>
      <Divider mt={12} mb={12}/>

      <RestActualProblems register={register} />
      <Divider mt={12} mb={12}/>

      <MedicalHistory register={register} />
      <Divider mt={12} mb={12}/>

      <ContextSocial register={register} />
      <Divider mt={12} mb={12}/>
      
      <PatientsPerspective register={register} />
      <Divider mt={12} mb={12}/>

      <TipsForSP register={register} />
      <Divider mt={12} mb={12}/>

      <Diagnosis register={register} />
      <Divider mt={12} mb={12}/>

      <Timer register={register} />

      <Button
          // mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}>
          Wyślij
        </Button>
    </form>
    </GridItem>
  );
}