import React from "react";
import { useForm } from "react-hook-form";
import { GridItem, Button } from '@chakra-ui/react'
// import { ArrowForwardIcon } from '@chakra-ui/icons'
import Age from "./Age";
// import Dolegliwosc from './Dolegliwosc'
import Historia from "./Historia";
import { Problems } from "./Problems";
import { pathing } from "./pathNames";
import { TableTest } from "./TableTest";

export default function Form() {
  const { control, register, handleSubmit, watch,getValues, formState: { isSubmitting } } = useForm({
    mode: 'onChange',
  });

  // https://react-hook-form.com/api/useform/watch
  const formData = watch();
  const formData1 = getValues()
  console.log(formData1)

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }
// console.log(formData.tests)
// console.log(pathing)
  return (
    <GridItem
    colStart={[1, null, null, 2, null, null]}
    colSpan={[3, null, null, 1, null, null]}
    p={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Age register={register} />
      <Historia register={register} />
      <Problems formProps={{ control, register }} path={pathing.main} data={formData} data1={formData1}/>
      <Problems formProps={{ control, register }} path={pathing.actual}/>
      <Problems formProps={{ control, register }} path={pathing.chronic}/>
      <TableTest data={formData.mainProblems} register={register} path={pathing.main}/>
      <TableTest data={formData.actualProblems} register={register} path={pathing.actual}/>
      <TableTest data={formData.chronicProblems} register={register} path={pathing.chronic}/>
      {/* {console.log(register)} */}
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

//https://react-hook-form.com/api/usewatch
// https://app.clickup.com/30983863/v/b/6-169062274-2?pr=49110212