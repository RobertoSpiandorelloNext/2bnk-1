import { FaChartBar
        ,FaPaintBrush
        ,FaServer 
        ,FaDraftingCompass
        ,FaShieldAlt
        ,FaGlobe} from 'react-icons/fa'


export const features = [
   {
    name: 'Design Customizável',
    description:
      "A Plataforma utiliza componentes gráficos baseado em Design System com fácil adaptação de logos e estilos(CSS).",
    icon: FaPaintBrush,
  },
   {
    name: 'Infraestrutura',
    description: 'Completa infraestrutura Multicloud em AWS ou CGP com todos os serviços automaticamente escaláveis.',
    icon: FaServer,
  },
  {
    name: 'Arquitetura',
    description:
      'Todos os engenheiros utilizam as melhores práticas de desenvolvimento com principios sólidos para desacoplamento da funções.',
    icon: FaDraftingCompass,
  },
  {
    name: 'Segurança',
    description: 'A Segurança é prioridade da plataforma, com rigoroso controle de acesso e frenquentes testes de intrusão.',
    icon: FaShieldAlt,
  },

  {
    name: 'Governança',
    description: 'Gestão de processos simples e eficientes permitem uma governança eficaz.',
    icon: FaGlobe,
  },
  {
    name: 'Monitoramento',
    description:
      "Todos os serviços são monitorados 24x7 por ferramentas automatizadas que disparam alertas quando houver quaisquer interupção.",
    icon: FaChartBar,
  },
]