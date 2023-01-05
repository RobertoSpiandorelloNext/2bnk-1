import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
import * as React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import { Sidebar } from 'src/content/admin/Sidebar'
import NavBar from "src/components/NavBar";
import { FiSearch } from 'react-icons/fi'
import { MemberTable } from 'src/content/admin/MenberTable';


  
function Users() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Flex
        as="section"
        direction={{ base: 'column', lg: 'row' }}
        height="100vh"
        bg="bg-canvas"
        overflowY="auto"
      >
        {isDesktop ? <Sidebar /> : <NavBar />}
        <Container py="8" flex="1">
          <Stack spacing={{ base: '8', lg: '6' }}>
            <Stack
              spacing="4"
              direction={{ base: 'column', lg: 'row' }}
              justify="space-between"
              align={{ base: 'start', lg: 'center' }}
            >
              <Stack spacing="1">
                <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
                  Usuários
                </Heading>
                <Text color="muted">All important metrics at a glance</Text>
              </Stack>
              <HStack spacing="3">
                <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
                  Download
                </Button>
                <Button variant="primary">Criar</Button>
              </HStack>
            </Stack>
            <Box
                bg="bg-surface"
                boxShadow={{ base: 'none', md: useColorModeValue('sm', 'sm-dark') }}
                borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
            >
                <Stack spacing="5">
                <Box px={{ base: '4', md: '6' }} pt="5">
                    <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
                    <Text fontSize="lg" fontWeight="medium">
                        Members
                    </Text>
                    <InputGroup maxW="xs">
                        <InputLeftElement pointerEvents="none">
                        <Icon as={FiSearch} color="muted" boxSize="5" />
                        </InputLeftElement>
                        <Input placeholder="Search" />
                    </InputGroup>
                    </Stack>
                </Box>
                <Box overflowX="auto">
                    <MemberTable />
                </Box>
                <Box px={{ base: '4', md: '6' }} pb="5">
                    <HStack spacing="3" justify="space-between">
                    {!isMobile && (
                        <Text color="muted" fontSize="sm">
                         1 to 5 de 42 resultados
                        </Text>
                    )}
                    <ButtonGroup
                        spacing="3"
                        justifyContent="space-between"
                        width={{ base: 'full', md: 'auto' }}
                        variant="secondary"
                    >
                        <Button>Anterior</Button>
                        <Button>Próximo</Button>
                    </ButtonGroup>
                    </HStack>
                </Box>
                </Stack>
            </Box>

          </Stack>
        </Container>
      </Flex>
    )
  }

  export default Users;