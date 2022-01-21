import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center">
                Hello, I&apos;m a second year Student at the University of Brighton, UK.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alexander Dauncey
                    </Heading>
                    <p>Game Developer ( Design / Programming )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
