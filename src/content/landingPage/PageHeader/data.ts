import {  FaCubes } from 'react-icons/fa'
import { BsWindowSidebar,BsBank2,BsCurrencyBitcoin} from 'react-icons/bs'

export const items = [
  {
    title: 'Plataforma Base',
    description: 'Contém principais recursos de de uma aplicação como Autenticação, Notificações e Segurança ',
    href: '#',
    icon: FaCubes,
  },
  {
    title: 'Portal Administrativo',
    description: 'Faça a gestão dos usuários, notificações e monitoria dos serviços em um único lugar',
    href: '#',
    icon: BsWindowSidebar,
  },
  {
    title: 'Digital Assets',
    description: 'O módulo de gestão de Ativos Digitais disponibiliza produtos digitais com Crypto Moedas, NFTs e outros.',
    href: '#',
    icon: BsCurrencyBitcoin,
  },
  {
    title: 'Banking',
    description: 'O módulo de Banking as a Service disponibiliza produtos financeiros como Conta Corrente, Cartão de Crédito e outros',
    href: '#',
    icon: BsBank2,
  }
]