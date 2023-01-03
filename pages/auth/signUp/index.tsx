import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Logo } from 'src/components/Logo'
  import NextRouter from 'next/router'
  import { OAuthButtonGroup } from './OAuthButtonGroup'
  import { PasswordField } from './PasswordField'

  function signIn(){NextRouter.push('./signIn')}
  
  export default function Login() {
    return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Cadastrar uma nova conta
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Você já tem uma conta?</Text>
              <Button variant="link" colorScheme="blue" onClick={()=>signIn()}>
                Entrar
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <Input id="email" type="text" />
              </FormControl>
              <FormControl>  
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox >Concordo com os Termos e Serviços</Checkbox>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Cadastrar</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  ou cadastrar com
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}