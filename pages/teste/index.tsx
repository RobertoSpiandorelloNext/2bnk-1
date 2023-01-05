import {
  Button,
  Center,
  Container,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { items } from './data'
import { PopoverIcon } from './PopoverIcon'

function PageHeader() {
  return (
    <Container as="section" minH="md" py={{ base: '4', md: '5' }}>
    <Center>
      <Popover trigger="hover" isOpen={true} placement="bottom" gutter={12}>
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <Button variant="link" rightIcon={<PopoverIcon isOpen={isOpen} />}>
                Resources
              </Button>
            </PopoverTrigger>
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
    </Center>
  </Container>
  )
}
export default PageHeader; 