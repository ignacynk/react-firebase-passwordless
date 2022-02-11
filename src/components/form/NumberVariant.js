import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

export const NumberVariant = ({ register }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
      
    return (
        <>
        <Button onClick={onOpen}  mt={6}>Zmień numeracje formularza bądź dodaj wariant</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Zmień dane formularza</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormLabel>
                    Numer formularza
                </FormLabel>
                <Input 
                    name='info.number' 
                    type='text' 
                    placeholder='Podaj numer do zmiany' 
                    ref={register({ required: true, maxLength: 80 })} 
                    /> 
                <FormLabel mt={6}>
                    Wariant formularza
                </FormLabel>
                <Input 
                    name='info.variant' 
                    type='text' 
                    placeholder='Podaj wiek pacjenta' 
                    ref={register({ required: true, maxLength: 80 })} 
                    />      
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose} colorScheme='blue'>Zamknij</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
    }


