import React from "react";
import { Input, Button,FormLabel, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'

export default function Dolegliwosc({ register }) {

  // DOLEGLIWOSC AKTUALNA 

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(1);

  const addDolegliwoscAktualna = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(indexes.values)
  };

  const removeDolegliwoscAktualna = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index)
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };


  // // DOLEGLIWOSC PRZEWLEKA

  const [indexes2, setIndexes2] = React.useState([]);
  const [counter2, setCounter2] = React.useState(1);

  const addDolegliwoscPrzewlekla = () => {
    setIndexes2((prevIndexes) => [...prevIndexes, counter2]);
    setCounter2((prevCounter) => prevCounter + 1);
  };

  const removeDolegliwoscPrzewlekla = (index) => () => {
    setIndexes2((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index)
    ]);
    setCounter2((prevCounter) => prevCounter - 1);
  };


  return (<>
    <Heading as="h1" mt={6} mb={6}>
        Dolegliwości
    </Heading>

    {/* DOLEGLIWOSC GŁÓWNA */}

    <FormLabel mt={6} htmlFor="wiek">Główna aktualna dolegliwość:</FormLabel>
    <Input
      type="text"
      name='glownaDolegliwosc'
      ref={register}/>
    

    {/* DOLEGLIWOSC AKTUALNA */}
    <FormLabel mt={6} htmlFor="wiek">Pozostałe aktualne dolegliwości:</FormLabel>
    <InputGroup mt={4}>
                {0}:
              <Input
                type="text"
                name={`dolegliwosciAktualna[0]`}
                // onChange={setChoroby}
                ref={register}
              />
          </InputGroup>
    {indexes.map((index) => {
        const fieldName = `dolegliwosciAktualna[${index}]`;
        return (<>            
            <InputGroup mt={4}>
                {index}:
              <Input
                type="text"
                name={`${fieldName}`}
                ref={register}
              />
            <InputRightElement width='4.5rem'>
            <Button type="button" h='1.75rem' r='1.75rem' size='sm' onClick={removeDolegliwoscAktualna(index)}>
              usuń
            </Button>
            </InputRightElement>
          </InputGroup>
          </>
        );
    })}
    <Button mt={4} type="button" onClick={addDolegliwoscAktualna}>
      Dodaj dolegliwość
    </Button>

    {/* DOLEGLIWOSC PRZEWLEKA */}
    <FormLabel mt={6} htmlFor="wiek">Pozostałe przewlekłe/towarzyszące dolegliwości:</FormLabel>
    <InputGroup mt={4}>
                {0}:
              <Input
                type="text"
                name={`dolegliwosciPrzewlekla[0]`}
                ref={register}
              />
          </InputGroup>
      {indexes2.map((index) => {
        const fieldName = `dolegliwosciPrzewlekla[${index}]`;
        return (<>            
            <InputGroup mt={4}>
                {index}:
              <Input
                type="text"
                name={`${fieldName}`}
                ref={register}
              />
            <InputRightElement width='4.5rem'>
            <Button type="button" h='1.75rem' r='1.75rem' size='sm' onClick={removeDolegliwoscPrzewlekla(index)}>
              usuń
            </Button>
            </InputRightElement>
          </InputGroup>
          </>
        );
    })}
    <Button mt={4} type="button" onClick={addDolegliwoscPrzewlekla}>
        Dodaj dolegliwość
      </Button>
      {/* <Button type="button" onClick={clearFriends}>
        Clear Friends
      </Button> */}
    </>
  );
}
