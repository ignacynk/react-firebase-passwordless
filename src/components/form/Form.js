import React from "react";
import { useForm } from "react-hook-form";
import { GridItem, Button } from '@chakra-ui/react'
// import { ArrowForwardIcon } from '@chakra-ui/icons'
import Wiek from "./Wiek";
import Dolegliwosc from './Dolegliwosc'
import Historia from "./Historia";
import Opis from "./Opis";

export default function Form2() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {

    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
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
      <Wiek register={register} />
      <Dolegliwosc register={register} />
      <Historia register={register} />
      <Opis register={register} />
      {console.log(register)}
      <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
        //   rightIcon={<ArrowForwardIcon />}
        >
          Wyślij
        </Button>
    </form>
    </GridItem>
  );
}

