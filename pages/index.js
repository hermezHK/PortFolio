import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  Button,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/biography';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
   <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Developer made in Peru
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hermez Jaramillo
          </Heading>
          <p>Developer / Geek / Reader</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hermez.jpg"
              alt="Profile Image"
              borderRadius="full"
              width="150"
              height="130"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hermez is a developer in Peru With experience in creating APIs and projects as a password manager and playlist with javascript and python languages using Node.js  Express  django I am in continuous learning in computer science such as AI and Deep learning to  improve my experience as a developer of software.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Lima , Peru.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the course  
          Metasploit security vulnerabilities and penetration tests Pentesting{' '}
          <Link href="https://www.artistcode.net/" target="_blank">
              (ArtistCode).  
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Student software development Microsoft sql server - technology - programming - hardware and 
          Software Architecture{' '}
          <Link href="https://isil.pe/" target="_blank">
              (Institute San Ignacio de Loyola).  
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          bootcamp developer backend  programming languages python, javascript services Node.js, express, aws, No sql, deploy railway, vercel, netlify-docker, payment gateway Mercado Pago, django, flask, APIS{' '}
          <Link href="https://www.silabuz.com/" target="_blank">
              (Silabuz).  
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          <Link href="https://www.bnp.gob.pe/" target="_blank">
            Read
          </Link>
          {' -  '}
          <Link href="https://www.youtube.com/watch?v=MzgMBrtrFc4&list=RDMzgMBrtrFc4&start_radio=1&rv=MzgMBrtrFc4&t=1" target="_blank">
            music
          </Link>
          {' -  '}
          <Link href="https://www.tensorflow.org/" target="_blank">
            machine learning
          </Link>
          {' -  '}Developer software
        </Paragraph>
      </Section>
    </Container>
   </Layout> 
  )
}

export default Page
