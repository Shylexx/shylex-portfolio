import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight:bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
    }
`

const Logo = () => {
    const footPrintImg = `/images/foxlogo${useColorModeValue('', '-dark')}.png`

    return(
        <Link href="/">
            <a>
                <LogoBox>
                 <Image src={footPrintImg} width={50} height={50} alt="Logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Alexander Dauncey
                </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
