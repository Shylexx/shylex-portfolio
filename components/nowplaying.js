import {Box, useColorModeValue, Image, Icon} from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'
import useSWR from 'swr';

export const NowPlaying = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const {data} = useSWR('../pages/api/spotify', fetcher);

    
    {console.log(data)};
    return(
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={6} mb={6} p={3} align="center">
            <div>{data.isPlaying ? 
                <Image 
                    borderColor ={useColorModeValue("blackAlpha.800", "pink")}
                    borderWidth={2}
                    borderStyle="solid"
                    src={data.albumImageUrl}
                    maxWidth="150px"
                    display="block"
                    alt="Album Art"
                    mb={3}
                /> : <></>}
            </div>
            <Icon as={FaSpotify}/>
            <a href={data.isPlaying ? data.songURL : 'https://open.spotify.com/user/21hs7w4szqul5yoyestomcd7y'} target='_blank' rel="noopener noreferrer">
                {data.isPlaying ? ` ${data.title}` : ' Not Currently Playing'}{data.isPlaying ? ` by  ${data.artist}` : ''}
            </a>
            
        </Box>
            
    )
}

export default NowPlaying