import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import Date from '../components/date'

import cappunimage from '../public/images/work/thumbCapPun.jpg'

import portfoliothumb from '../public/images/devlog/thumbnails/portfolio.jpg'

import { getSortedPostsData } from "../lib/logpost"

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


const DevLog = ({ allPostsData }) => {
    return (
        <Layout title="Posts">
            <Container mt={6}>
                <Heading as="h4" fontSize={20} mb={4}>
                    Recent Posts
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        {allPostsData.map(({ logid, date, title }) => (
                            <PostGridItem
                                id={logid}
                                title={title}
                                thumbnail={portfoliothumb}
                                key={logid}
                            >
                                <Date dateString={date} />
                            </PostGridItem>

                        ))}

                        <PostGridItem
                            title="Node JS Adventures"
                            thumbnail={cappunimage}
                            href="/posts">

                        </PostGridItem>

                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default DevLog