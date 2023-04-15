import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#302D41')(props),
        }
    })
}

const components = {
    Heading: {
        baseStyle: {
            fontWeight: 'light',
        },
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#C9CBFF',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#F5E0DC')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: 'Fira Sans',
    body: 'Fira Sans',
    text: 'Fira Sans'
}

const colors = {
    glassTeal: '#B5E8E0'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}


const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme
