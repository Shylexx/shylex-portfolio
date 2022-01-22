import { Container, Box, Heading, Image, Link, Button, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from "../components/bio"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Page = () => {
    return (
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
                        borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/alex.jpg"
                        alt="Profile Picture"
                    />

                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Paragraph{' '}
                    <NextLink href="/works/cappun"><Link>Capital Punishment</Link></NextLink>
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                            My Portfolio
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
                    <BioYear>2020</BioYear>
                    Began a Digital Games Development BSc at Brighton University
                </BioSection>
            </Section>

        </Container>
    )
}

export default Page
