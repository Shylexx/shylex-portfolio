import { Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";
import { Box, Heading } from "@chakra-ui/react";

const RepoLink = ({ url }) => {
    return (
        <Box>
            <NextLink href={url}>
                <div>
                    <Icon as={FaGithub} />
                    <span>{' '}</span>
                    <Heading display="inline-block" as="h3" fontSize={20} mb={4} color="#c6a0f6">
                        Repository
                    </Heading>
                </div>
            </NextLink>
        </Box>
    )
}

export default RepoLink
