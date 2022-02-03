import { Container, Box, Heading, Image, Button, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section'
import Layout from "../components/layouts/article"
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"
import useSWR from "swr"


const Page = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data} = useSWR('/api/spotify', fetcher);
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={6} mb={6} p={3} align="center">
                    Hello, I&apos;m a Student at the University of Brighton, UK.
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Alexander Dauncey
                        </Heading>
                        <p>Game Developer ( Design / Programming )</p>
                    </Box>


                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 2 }}
                        ml={{ md: 4 }}
                        align="center"
                    >
                        <Image
                            borderColor={useColorModeValue("blackAlpha.800", "pink")}
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="150px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/alex.jpg"
                            alt="Profile Picture"
                        />

                    </Box>
                </Box>

                {/* Spotify Now Playing */}
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={6} mb={6} p={3} align="center">
                    <div> 
                    <Image 
                        src={data.isPlaying ? data.albumImageUrl : ""}
                        maxWidth="150px"
                        display="block"
                        alt="Album Art"
                        mb={3}
                    />
                    </div>
                    <Icon as={FaSpotify}/>
                    <a href={data.isPlaying ? data.songURL : 'https://open.spotify.com/user/21hs7w4szqul5yoyestomcd7y'} target='_blank' rel="noopener noreferrer">
                        {data.isPlaying ? ` ${data.title}` : ' Not Currently Playing'}{data.isPlaying ? ` by  ${data.artist}` : ''}
                    </a>
                </Box>
                

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Have a look at what I&apos;ve made, from game dev to websites. Check out my devlog as well to see my in progress work and find out what I&apos;m currently learning.
                    </Paragraph>

                    <Box flexShrink={0} align="center" my={4}>
                        <NextLink href="/work" >
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink" mx={2}>
                                My Portfolio
                            </Button>
                        </NextLink>
                        <NextLink href="/devlog">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink" mx={2}>
                                Dev Log
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Portsmouth, England.
                    </BioSection>
                    <BioSection>
                        <BioYear>2002-2020</BioYear>
                        To Add
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Began a Digital Games Development BSc at Brighton University
                    </BioSection>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page
