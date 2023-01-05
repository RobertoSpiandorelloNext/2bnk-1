import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue,Radio } from '@chakra-ui/react'
import * as React from 'react'
import NextRouter from 'next/router'

function home(){NextRouter.push('./')}

export function PageNotFound() {
  return (  
    <Box as="section" bg="bg-surface">
        <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '8', md: '10' }}>
            <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Erro 404</Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                Página não existe !
            </Text>
            </Stack>
            <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
            <Button variant="primary" size="lg" onClick={()=>home()}>
                Voltar para página principal
            </Button>
            </Stack>
        </Stack>
        </Container>
    </Box>
    )
}

export default PageNotFound;