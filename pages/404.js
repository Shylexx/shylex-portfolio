import NextLink from 'next/link'
import { Box, Heading, Container, Divider, Button, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const NotFound = () => {
    return (
        <Container mt={6}>
            <Heading as="h1">Nothing Here</Heading>
            <Text>No Really, you&apos;re in the wrong place.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button leftIcon={<ChevronLeftIcon />} colorScheme="pink">Return to Home page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound