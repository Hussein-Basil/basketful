import React from 'react'
import { Box, Flex, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

const Details = () => {
    return (
        <Flex flexDir="column" gap="60px" fontSize="18px">
            <Heading as="h2">Details</Heading>
            <UnorderedList w="1220px" spacing="20px" ml="50px">
                <ListItem><Text>Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display (Packaging may vary)</Text></ListItem>
                <ListItem><Text>All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library</Text></ListItem>
                <ListItem><Text>Immersive Entertainment - Get the best seat in the house to live concerts, groundbreaking films, exclusive events and more</Text></ListItem>
                <ListItem><Text>Easy Setup - Just open the box, set up with the smartphone app and jump into VR. No PC or console needed. Requires wireless internet access and the Oculus app (free download) to set up device</Text></ListItem>
                <ListItem><Text>Premium Display - Catch every detail with a stunning display that features 50% more pixels than the original Quest</Text></ListItem>
                <ListItem><Text>Ultimate Control - Redesigned Oculus Touch controllers transport your movements directly into VR with intuitive controls</Text></ListItem>
                <ListItem><Text>PC VR Compatible - Step into incredible Oculus Rift titles by connecting an Oculus Link cable to a compatible gaming PC. Oculus Link Cable sold separately</Text></ListItem>
                <ListItem><Text>3D Cinematic Sound - Hear in all directions with built-in speakers that deliver cinematic 3D positional audio</Text></ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Details