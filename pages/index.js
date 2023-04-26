import { Container, Box, Heading, Image, chakra, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section";
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
     <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Developer made in Peru
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hermez Jaramillo
            </Heading>
      <p>Developer / Geek / Reader</p>
         </Box>
            <Box flexShrink={0} mt={{ base: 4, md: 0}}  ml={{ md: 6}} align="center">
              <Box
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  w="100px"
                  h="100px"
                  display="inline-block"
                  borderRadius="full"
                  overflow="hidden">
                  
                  <ProfileImage 
                     src="/images/hermez.jpg"
                     alt="Profile Image"
                     borderRadius="full"
                     width="150"
                     height="130" />
              </Box>
          </Box> 
       </Box>
       <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Work
          </Heading>
      </Section>
    </Container>
  )
}

export default Page