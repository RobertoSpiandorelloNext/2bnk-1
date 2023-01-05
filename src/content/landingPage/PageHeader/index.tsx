import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue
  } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import NextRouter from 'next/router'
import { Logo } from 'src/components/Logo'
  
function signIn(){NextRouter.push('auth/signIn')}
function signUp(){NextRouter.push('auth/signUp')}
  
function PageHeader() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container py={{ base: '4', lg: '4' }}>
            <HStack spacing="5" justify="space-between">
              <Logo/> 
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Plataforma', 'Ativos Digitais', 'Contato'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost" onClick={()=>signIn()}>Entrar</Button>  
                    <Button variant="primary" onClick={()=>signUp()}>Cadastrar</Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
    )
 } 

export default PageHeader;
