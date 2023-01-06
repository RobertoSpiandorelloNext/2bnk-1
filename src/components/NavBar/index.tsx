import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  Stack,
  Icon,
  Link,
  Text
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { BsWallet, BsBellFill } from 'react-icons/bs'
import { Logo } from '../Logo'
import { items } from './data'

function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box as="section" pb={{ base: '12', md: '0' }}>
      <Box as="nav" bg="bg-accent" color="on-accent">
        <Container py={{ base: '3', lg: '4' }}>
          <Flex justify="space-between">
            <HStack spacing="4">
              <Logo color={'white'} />
              {isDesktop && (
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <Button aria-current="page">Home</Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <IconButton icon={<BsWallet fontSize="1.25rem" />} aria-label="Settings" />
                  <IconButton icon={<BsBellFill fontSize="1.25rem" />} aria-label="Notificações" />
                </ButtonGroup>
                
                <Popover trigger="hover" placement="bottom" gutter={12}>
                  <PopoverTrigger>
                    <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
                  </PopoverTrigger>
                  <PopoverContent width="xsm" p="3">

                  <PopoverHeader>
                  <Box>
                    <Text color="muted" fontWeight="medium" fontSize="sm">
                      Luiz Gustavo Nugnes
                    </Text>
                    <Text color="muted" fontSize="sm">
                      lnugnes@gmail.com
                    </Text>
                  </Box>
                  </PopoverHeader>
                    <Stack>
                      {items.map((item, id) => (
                        <Link variant="menu" href={item.href} key={id}>
                          <Stack spacing="1" direction="row" p="3">
                            <Icon as={item.icon} boxSize="6" color="accent" />
                            <Stack spacing="1">
                              <Text color="muted">{item.title}</Text>
                            </Stack>
                          </Stack>
                        </Link>
                      ))}
                    </Stack>
                  </PopoverContent>
                </Popover>
              </HStack>
            ) : (
              <IconButton
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default NavBar;