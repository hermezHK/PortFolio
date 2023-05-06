import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbPlaylist from '../public/images/works/playlist.jpg';
import thumbPassecure from '../public/images/works/passecure.jpg';
import Layout from '../components/layouts/article.js';

const Works = ()  => {
    return (
       <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

          <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="playlist" title="API-PLAYLIST"  thumbnail={thumbPlaylist}></WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="passecure" title="PASSECURE"  thumbnail={thumbPassecure}></WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout> 
    )
}

export default Works