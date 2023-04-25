import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
     <Container>
        <Box borderRadius="lg" bg="green" p={3} mb={6} align="center">
            Test
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hermez Jaramillo
            </Heading>
      <p>Developer / Geek / Reader</p>
         </Box> 
       </Box>
     </Container>
  )
}

export default Page