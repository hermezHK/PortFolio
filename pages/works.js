import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbPlaylist from '../public/images/works/playlist.jpg';
import thumbPassecure from '../public/images/works/passecure.jpg';

const Works = ()  => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

          <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="playlist" title="API-PLAYLIST"  thumbnail={thumbPlaylist}>
                create users - login user - search users by id - create song - get list of songs by user - create a playlist and add songs - encryted password user.
                </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="Passecure" title="PASSECURE"  thumbnail={thumbPassecure}>
            create a user - login - save website with your username and password and send an sms and email sending your credentials to access said website
            </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
    )
}

export default Works