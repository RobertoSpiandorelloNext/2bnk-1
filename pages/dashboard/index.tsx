import { Box, Container } from '@chakra-ui/react'
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";
import { Content } from 'src/content/dashboard/Content';


function Dashboard(){
    return (
    <Box>
        <NavBar />
            <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
                <Content />
            </Container>
        <Footer />
    </Box>
    )
}

export default Dashboard;