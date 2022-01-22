import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbCapPun from '../public/images/work/thumbCapPun.jpg'


const Work = () => {
    return (
        <Layout>
            <Container mt={6}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Work
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="cappun"
                            title="Capital Punishment"
                            thumbnail={thumbCapPun}
                        >
                            A Procedurally Generated Roguelike made in Phaser 3
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="portfolio"
                            title="Portfolio Website"
                            thumbnail={thumbCapPun}
                        >
                            Server Rendered Portfolio Site, using React, Next.js and Chakra UI as a front-end,
                            with Framer Motion animation and Three.js 3D rendered element.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
// export { getServerSideProps } from '../components/chakra'