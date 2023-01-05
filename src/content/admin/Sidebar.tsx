import {
  Divider,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FiBarChart2,
  FiActivity,
  FiCheckSquare,
  FiFileText,
  FiSettings,
  FiUsers,
  FiLayout,
} from 'react-icons/fi'
import { Logo } from 'src/components/Logo'
import { NavButton } from './NavButton'


export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('md', 'sm-dark')}
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <Stack spacing="1">
            <NavButton label="Dashboard" icon={FiBarChart2} />
            <NavButton label="Usuários" icon={FiUsers} />
            <NavButton label="Customização" icon={FiLayout} aria-current="page" />
            <NavButton label="Notificações" icon={FiCheckSquare} />
            <NavButton label="Monitoria" icon={FiActivity} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <NavButton label="Documentação" icon={FiFileText} />
            <NavButton label="Ajustes" icon={FiSettings} />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)