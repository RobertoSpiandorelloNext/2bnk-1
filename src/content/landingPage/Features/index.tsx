import {
    Box,
    Container,
    Heading,
    Icon,
    SimpleGrid,
    Square,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { features } from './data'
  
  export function Features() {
    return (  
    <Box as="section" bg="bg-surface">
      <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '12', md: '16' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center" textAlign="center">
            <Stack spacing="3">
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
                Recursos
              </Text>
              <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
                O que esperar da Plataforma?
              </Heading>
            </Stack>
            <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
              A plataforma foi baseada nas melhores práticas de arquitetura de software e segurança para escalar de forma rápida e segura.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} columnGap={8} rowGap={{ base: 10, md: 16 }}>
            {features.map((feature) => (
              <Stack
                key={feature.name}
                spacing={{ base: '4', md: '5' }}
                align="center"
                textAlign="center"
              >
                <Square
                  size={{ base: '10', md: '12' }}
                  bg="accent"
                  color="inverted"
                  borderRadius="lg"
                >
                  <Icon as={feature.icon} boxSize={{ base: '5', md: '6' }} />
                </Square>
                <Stack spacing={{ base: '1', md: '2' }}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
                    {feature.name}
                  </Text>
                  <Text color="muted">{feature.description}</Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}