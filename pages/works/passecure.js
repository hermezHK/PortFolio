import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, PlaylistImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
   return (
    <Layout title="Passecure">
        <Container>
          <Title>Passecure</Title>
            <P>
            create a user - login - save website with your username and password and send an sms and email sending your credentials to access said website
            </P>
          <List ml={4} my={4}>
            <ListItem>
                <Meta>Repository</Meta>
                <Link href='https://github.com/teamSilabuz'>https://github.com/teamSilabuz<ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
            <ListItem>
                <Meta>Stack</Meta>
                <span>Typescript - prisma - express - react - vercel - node.js - aws - twilio </span>
            </ListItem>
           </List>
           <PlaylistImage src="/images/works/pass1.jpg" alt="Playlist"  />
           <PlaylistImage src="/images/works/pass2.jpg" alt="Playlist" />
        </Container>
    </Layout>
   )
}

export default Work;