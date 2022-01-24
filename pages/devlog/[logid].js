import { Container, Badge } from "@chakra-ui/react"
import Layout from "../../components/layouts/article"
import { Title } from "../../components/devlog"
import { getAllPostIds, getPostData } from '../../lib/logpost'
import Date from "../../components/date"
import NextImage from 'next/image'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.logid)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

const LogPost = (postData) => {
    const thumbnail = "http://shylexx.com/images/devlog/thumbnails/" + postData.postData.thumbnail
    console.log(thumbnail)
    return (
        <Layout title={postData.postData.title}>
            <Container mt={6}>
                <NextImage
                    src={thumbnail}
                    alt="Post Thumbnail"
                    className='grid-item-thumbnail'
                    width={500}
                    height={375}
                    quality={100}
                />
                <Title>
                    {postData.postData.title} <Badge colorScheme="pink"><Date dateString={postData.postData.date} /></Badge>

                </Title>
                <div dangerouslySetInnerHTML={{ __html: postData.postData.contentHtml }} />
            </Container>
        </Layout>
    )
}



export default LogPost