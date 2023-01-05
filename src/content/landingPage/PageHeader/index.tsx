import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Stack,    
    Link,
    Icon,
    Popover,
    PopoverContent,
    PopoverTrigger,
    IconButton,
    SimpleGrid,
    Text,
    useBreakpointValue,
    useColorModeValue
  } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import NextRouter from 'next/router'
import { Logo } from 'src/components/Logo'
import {PopoverIcon} from 'src/components/PopoverIcon'
import { items } from './data'

 
function signIn(){NextRouter.push('auth/signIn')}
function signUp(){NextRouter.push('auth/signUp')}
  
function PageHeader() {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container as="section"  py={{ base: '4', lg: '4' }}>
            <HStack spacing="5" justify="space-between">
              <Logo/> 
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <Popover trigger="hover" placement="bottom" gutter={12}>
                    {({ isOpen }) => (
                      <>
                        <ButtonGroup variant="link" spacing="8">
                          <PopoverTrigger>
                            <Button variant="link" rightIcon={<PopoverIcon isOpenPopup={isOpen} />}>
                              Produtos
                            </Button>
                          </PopoverTrigger>
                          <Button variant="link" >
                              Contato
                            </Button>
                        </ButtonGroup>
                        <PopoverContent p="5" width={{ base: 'sm', md: '2xl' }}>
                          <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="6" rowGap="2">
                            {items.map((item, id) => (
                              <Link variant="menu" href={item.href} key={id}>
                                <Stack spacing="4" direction="row" p="3">
                                  <Icon as={item.icon} boxSize="6" color="accent" />
                                  <Stack spacing="1">
                                    <Text fontWeight="medium">{item.title}</Text>
                                    <Text fontSize="sm" color="muted">
                                      {item.description}
                                    </Text>
                                  </Stack>
                                </Stack>
                              </Link>
                            ))}
                          </SimpleGrid>
                        </PopoverContent>

                      </>
                    )}
                  </Popover>

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
