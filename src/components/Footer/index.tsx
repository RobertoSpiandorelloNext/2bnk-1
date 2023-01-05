import { Box,ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from '../Logo'

function Footer() {
    return (
        <Box bg="bg-accent" color="on-accent">
            <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">
                <Logo color={'white'}/>
                <ButtonGroup variant="ghost-on-accent">
                    <IconButton
                    as="a"
                    href="#"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin fontSize="1.25rem" />}
                    />
                    <IconButton
                    as="a"
                    href="#"
                    aria-label="GitHub"
                    icon={<FaGithub fontSize="1.25rem" />}
                    />
                    <IconButton
                    as="a"
                    href="#"
                    aria-label="Twitter"
                    icon={<FaTwitter fontSize="1.25rem" />}
                    />
                </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="on-accent-subtle">
                &copy; {new Date().getFullYear()} 2BNK Ltda. Todos os direitos reservados.
                </Text>
            </Stack>
            </Container>
        </Box>
    )    
};

export default Footer;