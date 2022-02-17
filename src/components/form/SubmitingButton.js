// import React from 'react';
// import {
//     AlertDialog,
//     AlertDialogBody,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogContent,
//     AlertDialogOverlay,
//     Button,
//     useDisclosure,
//     AlertDialogCloseButton
//   } from '@chakra-ui/react'

// export const SubmitingButton = ({ register }, isSubmitting) => {    
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const cancelRef = React.useRef()
    
//     return (
//         <>
//         <Button onClick={onOpen}>Discard</Button>
//         <AlertDialog
//             motionPreset='slideInBottom'
//             leastDestructiveRef={cancelRef}
//             onClose={onClose}
//             isOpen={isOpen}
//             isCentered
//         >
//             <AlertDialogOverlay />
    
//             <AlertDialogContent>
//             <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
//             <AlertDialogCloseButton />
//             <AlertDialogBody>
//                 Are you sure you want to discard all of your notes? 44 words will be
//                 deleted.
//             </AlertDialogBody>
//             <AlertDialogFooter>
//                 <Button ref={cancelRef} onClick={onClose}>
//                 No
//                 </Button>
//                 <Button colorScheme='red' type="submit" ml={3} isLoading={isSubmitting}>
//                 Yes
//                 </Button>
//             </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//         </>
//     )
//     }
