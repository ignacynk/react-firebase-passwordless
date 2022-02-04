import { useForm } from "react-hook-form";
import { Form } from "./Form";
import { HStack } from "@chakra-ui/react";
import { Table } from "./Table";

export const Test = () => {
    const { control, register, handleSubmit, watch } = useForm({
      mode: 'onChange',
    });
  
    // https://react-hook-form.com/api/useform/watch
    const formData = watch();
  
    return (
      <HStack>
        <Form formProps={{ control, register, handleSubmit }} />
  
        <Table data={formData.tests} />
      </HStack>
    );
  };