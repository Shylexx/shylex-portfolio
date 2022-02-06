import { Chakra } from '../lib/Chakra';
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from "framer-motion";
import '@fontsource/fira-sans/300.css'

const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Website