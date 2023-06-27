import { Container, Box, Heading, Image, Button, useColorModeValue, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section'
import Layout from "../components/layouts/article"
import Paragraph from '../components/paragraph'
//import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"
import useSWR from "swr"
import {FaSpotify} from "react-icons/fa"
 

const Page = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data} = useSWR('/api/spotify', fetcher);
    //if(error) return error;
    
    const colors = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
    const bordercolor = useColorModeValue("blackAlpha.800", "pink");
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={colors} mt={6} mb={6} p={3} align="center">
                    Hello, I&apos;m a Game Developer based in Brighton, UK.
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Alexander Dauncey
                        </Heading>
                        <p>Game Developer ( Programming / Design )</p>
                    </Box>


                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 2 }}
                        ml={{ md: 4 }}
                        align="center"
                    >
                        <Image
                            borderColor={bordercolor}
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="150px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/pfp.jpg"
                            alt="Profile Picture"
                        />

                    </Box>
                </Box>

                {/* Spotify Now Playing */}
                {data ? <Box borderRadius="lg" bg={colors} mt={6} mb={6} p={3} align="center">
                    {data.isPlaying ?
                    <>
                    <div>
                    <Paragraph>
                        Currently Playing:
                    </Paragraph>
                    <Image 
                        src={data.isPlaying ? data.albumImageUrl : ""}
                        maxWidth="150px"
                        display="block"
                        alt="Album Art"
                        mb={3}
                    />
                    </div></> : <></> }
                    
                    <Icon as={FaSpotify}/>
                    <a href={data.isPlaying ? data.songURL : 'https://open.spotify.com/user/21hs7w4szqul5yoyestomcd7y'} target='_blank' rel="noopener noreferrer">
                        {data.isPlaying ? ` ${data.title}` : ' Not Currently Playing'}{data.isPlaying ? ` by  ${data.artist}` : ''}
                    </a>
                </Box> 
                : 
                <Box borderRadius="lg" bg={colors} mt={6} mb={6} p={3} align="center">
                    <Icon as={FaSpotify}/>
                    <p>Spotify Loading...</p>
                </Box>}
                
                

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
                        <NextLink href="AlexDaunceyCV0623.pdf" alt="My CV" target="_blank" rel="noopener noreferrer">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="pink" mx={2}>
                                CV
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

        {/*
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Portsmouth, England.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020-2023</BioYear>
                        Completed a Degree in Computer Science for Games, achieving a 1:1
                    </BioSection>
                </Section>
                */}

            </Container>
        </Layout>
    )
}

export default Page
