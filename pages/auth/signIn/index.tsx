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
  import { OAuthButtonGroup } from 'src/content/auth/OAuthButtonGroup'
  import { PasswordField } from 'src/content/auth/PasswordField'

  
  function signUp(){NextRouter.push('./signUp')}
  function join(){NextRouter.push('../dashboard')}

  export default function Login() {
    return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Entrar na sua conta
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Você não tem uma conta ?</Text>
              <Button variant="link" colorScheme="blue"  onClick={()=>signUp()}>
                Cadastrar
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Permanecer Conectado</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Esqueceu a senha?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary"  onClick={()=>join()}>Entrar</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  ou continue com
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