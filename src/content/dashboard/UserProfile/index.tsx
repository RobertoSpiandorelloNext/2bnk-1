import {
    Box,
    BoxProps,
    Button,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Container, 
    Tab, 
    TabList, 
    Tabs
  } from '@chakra-ui/react'
    import { FiDownloadCloud } from 'react-icons/fi'

  export const UserProfileTab = () => (

    <Stack spacing={{ base: '8', lg: '6' }}>
      <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between">
        <Stack spacing="1">
          <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
            Olá Luiz Gustavo,
          </Heading>
          <Text color="muted">Bem vindo à seu Dashboard</Text>
        </Stack>
        <Stack direction="row" spacing="3">
          <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
            Download
          </Button>
          <Button variant="primary">Criar</Button>
        </Stack>
      </Stack>
      <Box as="section" bg="bg-surface">
        <Container py={{ base: '4', md: '8' }}>
          <Stack spacing="16">
              <Tabs size='lg' variant="with-line">
                <TabList>
                  <Tab>Meus Dados</Tab>
                  <Tab>Documentos</Tab>
                  <Tab>Notificações</Tab>
                  <Tab>Segurança</Tab>
                </TabList>
              </Tabs>
          </Stack>
        </Container>
      </Box>
    </Stack>
  )
  
  const Card = (props: BoxProps) => (
    <Box
      minH="36"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      borderRadius="lg"
      {...props}
    />
  )