import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Text, Flex, Icon } from '@chakra-ui/react'
import { ReactComponent as locationIcon } from '../assets/location.svg'

const LocationPin = ({ text }) => {
    return (
        <Flex >
            <Icon h="50px" w="50px" fill="primary.500" as={locationIcon} />
            <Text color="primary.500" fontWeight="bold">{text}</Text>
        </Flex>
    )
}

const Map = ({ location, zoomLevel, ...props }) => {
    return (
        <Flex {...props}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBWTAV9TN9LtckmoBGBra15EujoVCkzz3A' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </Flex>
    )
}

export default Map