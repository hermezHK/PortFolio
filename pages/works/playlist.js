import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, PlaylistImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
   return (
    <Layout title="Playlist">
        <Container>
          <Title>Playlist</Title>
            <P>
            create users - login user - search users by id - create song - get list of songs by user - create a playlist and add songs - encryted password user.
            </P>
          <List ml={4} my={4}>
            <ListItem>
                <Meta>Repository</Meta>
                <Link href='https://github.com/hermezHK/projectunidad_7'>https://github.com/hermezHK/projectunidad_7 <ExternalLinkIcon mx="2px"/></Link>
            </ListItem>
            <ListItem>
                <Meta>Stack</Meta>
                <span>Typescript - prisma - express</span>
            </ListItem>
           </List>
           <PlaylistImage src="/images/works/p1.jpg" alt="Playlist"  />
           <PlaylistImage src="/images/works/p2.jpg" alt="Playlist" />
        </Container>
    </Layout>
   )
}

export default Work;


