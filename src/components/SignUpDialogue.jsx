import {
    Button,
    AlertDialog,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function SignUpDialogue({ onClose, isOpen }) {
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent p={5} alignItems='center' maxW={400}>
                <AlertDialogHeader>Choose Sign Up Option</AlertDialogHeader>
                <AlertDialogCloseButton />

                <Link to='/customerSignUp'>
                    <Button colorScheme='black' onClick={onClose} maxW={300} marginBottom={3}>
                        Register as a customer
                    </Button>
                </Link>
                <Link to='/serviceProviderSignUp'>
                    <Button colorScheme='black' ml={3} maxW={300} fontFamily='Roboto'>
                        Register as a Service Provider
                    </Button>
                </Link>
            </AlertDialogContent>
        </AlertDialog>
    )
}