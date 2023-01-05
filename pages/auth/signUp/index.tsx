import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from 'src/components/Logo'
import { GoogleIcon } from 'src/content/auth/ProviderIcons'
import NextRouter from 'next/router'

function signIn(){NextRouter.push('./signIn')}

function SignUp() {
  return (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logo />
        <Stack spacing="3" textAlign="center">
          <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>Cadastrar Conta</Heading>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input id="password" type="password" />
            <FormHelperText color="muted">Minimo 8 caracteres</FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Button variant="primary">Criar Conta</Button>
          <Button variant="secondary" leftIcon={<GoogleIcon boxSize="5" />} iconSpacing="3">
            Cadastrar com Google
          </Button>
        </Stack>
      </Stack>
      <HStack justify="center" spacing="1">
        <Text fontSize="sm" color="muted">
          Voce já tem uma conta?
        </Text>
        <Button variant="link" colorScheme="blue" size="sm"  onClick={()=>signIn()}>
          Entrar
        </Button>
      </HStack>
    </Stack>
  </Container>
  )
}
export default SignUp;