import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Center,
    
  } from '@chakra-ui/react'

  export const Instruction = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
      <>
        <Center><Button onClick={onOpen}>Instrukcje formularza</Button></Center>
  
        <Modal isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} scrollBehavior='inside' size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Instrukcja</ModalHeader>
            <ModalCloseButton />
            <ModalBody ml={3} style={{justifyContent: 'space-between'}}>
                <p>Szanowni Państwo.</p>
                <br></br>
                <p>&emsp;&emsp;Poniższy scenariusz jest opisem dolegliwości pacjenta. Wybrany przez Państwa temat scenariusza zawiera 1 dominującą dolegliwość lub schorzenie. prosimy o uzupełnienie innych dolegliwości występujących u pacjenta w chwili badania, a także dolegliwości przewlekłe występujących.</p>
                <br></br>
                <p>&emsp;&emsp;Państwa opis posłuży jako scenariusz dla Symulowanego Pacjenta (SP) odgrywającego rolę Państwa pacjenta. Państwa opis posłuży również wzór do bazy danych dotyczących zgłaszanych dolegliwości i na jego podstawie opracowywane będzie narzędzie wspierające zbieranie wywiadu dla lekarzy.</p>
                <br></br>
                Zasady:
                <br></br>
                <ol>
                    <br></br>
                    <li>Opisany w scenariuszu pacjent może być prawdziwym pacjentem z Państwa praktyki lub pacjentem, którego znacie z innych źródeł. Można też uzupełnić opis dolegliwości tak jak według Was mógłby on wyglądać u przykładowego pacjenta.  Prosimy o uzupełnienie tych informacji/rubryk, które uważacie Państwo za istotne oraz tych, co do których posiadacie informacje lub możecie tam umieścić informacje, które, na podstawie Waszego doświadczenia uznacie za możliwe do opisania historii pacjenta.</li>
                    <li>Należy uzupełnić te informacje, które uznane za ważne z perspektywy lekarza oraz takie, o których pacjent chciałby/mógłby wg Państwa powiedzieć. Dosłowne sugerowane zwroty można ująć w cudzysłowie.</li>
                    <li>Scenariusze trafią następnie do Symulowanych Pacjentów - warto w opisach używać języka używanego przez pacjentów</li>
                    <li>Opisując postać pacjenta warto wyobrazić sobie jak zachowywałby się on i co mógł powiedzieć na wizycie w gabinecie lub w trakcie telekonsultacji gdybyśmy mieli nieograniczoną ilość czasu</li>
                    <li>Warto rozpisać w tabelach szczegółowo co najmniej 3-4 dolegliwości.</li>
                    <li>Jeśli możecie Państwo, prosimy o pisanie instrukcji w 2. osobie (jesteś 63-letnim pacjentem…)</li>
                </ol>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Zamknij
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}