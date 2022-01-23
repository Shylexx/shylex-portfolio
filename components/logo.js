import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: 400;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    margin-top: 6px;

    &:hover img {
    }
`

const Logo = () => {
    const footPrintImg = `/images/foxlogo${useColorModeValue('-light', '')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={40} height={50} alt="Logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        ml={3}
                        mt={3}
                    >
                        Alexander Dauncey
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
