import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { variants} from "@catppuccin/palette";

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

const colors = {}

/*export const colors = {
    rosewater: variants.macchiato.rosewater.hex,
    flamingo: variants.macchiato.flamingo.hex,
    pink: variants.macchiato.pink.hex,
    mauve: variants.macchiato.mauve.hex,
    red: variants.macchiato.red.hex,
    peach: variants.macchiato.peach.hex,
    maroon: variants.macchiato.maroon.hex,
    yellow: variants.macchiato.yellow.hex,
    green: variants.macchiato.green.hex,
    teal: variants.macchiato.teal.hex,
    sky: variants.macchiato.sky.hex,
    sapphire: variants.macchiato.sapphire.hex,
    blue: variants.macchiato.blue.hex,
    lavender: variants.macchiato.lavender.hex,
    text: variants.macchiato.text.hex,
    subtext1: variants.macchiato.subtext1.hex,
    subtext0: variants.macchiato.subtext0.hex,
    overlay2: variants.macchiato.overlay2.hex,
    overlay1: variants.macchiato.overlay1.hex,
    overlay0: variants.macchiato.overlay0.hex,
    surface2: variants.macchiato.surface2.hex,
    surface1: variants.macchiato.surface1.hex,
    surface0: variants.macchiato.surface0.hex,
    base: variants.macchiato.base.hex,
    mantle: variants.macchiato.mantle.hex,
    crust: variants.macchiato.crust.hex,
}
*/

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}


const Theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default Theme
