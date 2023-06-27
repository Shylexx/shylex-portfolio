import Head from 'next/head'
import Navbar from '../navbar.js'
import {Center,Container} from '@chakra-ui/react'

const Main = ({ children, router}) => {
    return(
        <div>
            <Navbar path={router.asPath} />
        <Center pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Alexander Dauncey</title>
                <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicons/favicon.ico" />
            </Head>


            <Container maxW="container.lg" pt={14}>
                {children}
            </Container>
        </Center>
        </div>
    )
}

export default Main
