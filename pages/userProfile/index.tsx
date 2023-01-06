import { Box, Container } from '@chakra-ui/react'
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";
import { UserProfileTab } from 'src/content/dashboard/UserProfile';



function UserProfile(){
    return (
    <Box>
        <NavBar />
            <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
                <UserProfileTab />
            </Container>
        <Footer />
    </Box>
    )
}

export default UserProfile;