import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';


import thumbPlaylist from '../public/images/contents/playlist.jpg';
import thumbPassecure from '../public/images/contents/passecure.jpg';

const Posts = () => (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Video Web Posts
        </Heading>

        <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="PLAYLIST "
            thumbnail={thumbPlaylist}
            href="https://www.youtube.com/watch?v=GvvxezWLpBA"/>
            <GridItem
            title="Passecure"
            thumbnail={thumbPassecure}
            href="https://www.youtube.com/watch?v=_mD74MZKW60"/>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts