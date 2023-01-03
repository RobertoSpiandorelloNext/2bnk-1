import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue,Radio } from '@chakra-ui/react'
import * as React from 'react'
import NextRouter from 'next/router'

function signUp(){NextRouter.push('./auth/signUp')}

export function CallToAction() {
  return (  
    <Box as="section" bg="bg-surface">
        <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '8', md: '10' }}>
            <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Bem Vindo a 2BNK</Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                Uma plataforma completa para estruturação de sua Fintech.
            </Text>
            </Stack>
            <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
            <Button variant="secondary" size="lg">
                Saber Mais
            </Button>
            <Button variant="primary" size="lg" onClick={()=>signUp()}>
                Começar o Teste
            </Button>
            </Stack>
        </Stack>
        </Container>
    </Box>
    )
}