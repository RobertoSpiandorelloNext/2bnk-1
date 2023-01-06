import { FiLogOut, FiUser, FiShield } from 'react-icons/fi'

export const items = [
  {
    title: 'Meu Perfil',
    href: './userProfile',
    icon: FiUser,
  },
  {
    title: 'Users',
    href: './admin/users',
    icon: FiShield,
  },
  {
    title: 'Sair',
    href: './',
    icon: FiLogOut,
  },
]