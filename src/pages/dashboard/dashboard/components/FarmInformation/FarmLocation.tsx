import React from 'react'

import { Flex, Button, Box } from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

import { BoxSection, BoxArea, Tablerize, FarmDetails } from './../../components'

import { CoordinatesType } from '../../../../../types'

export const FarmLocation = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    })


    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '400px',
        borderRadius: '14px',
    };

    const center: CoordinatesType = {
        lat: 52.513281130944264, lng: 13.36346611492683
    };

    const path: CoordinatesType[] = [
        { lat: 52.513281130944264, lng: 13.36346611492683 },
        { lat: 52.512575957821824, lng: 13.362994046140209 },
        { lat: 52.512445368964684, lng: 13.363637776303783 },
        { lat: 52.513124426783875, lng: 13.364088387418285 }
    ];

    const polygonOptions: google.maps.PolygonOptions = {
        paths: path,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity: 0.35,
    };

    const mapOptions: google.maps.MapOptions = {
        mapTypeId: 'satellite',
        disableDefaultUI: true
    }

    return (
        <>
            {isLoaded ? (
                <>
                    <Flex gap={4} mb={5} justify={'flex-end'}>
                        <Button variant='outline' color={'green.400'} borderColor={'green.400'} size={'xs'}>
                            GEO
                        </Button>

                        <Button variant='outline' color={'gray.500'} borderColor={'gray.500'} size={'xs'}>
                            CAFIR
                        </Button>

                        <Button variant='outline' color={'gray.500'} borderColor={'gray.500'} size={'xs'}>
                            INCRA
                        </Button>
                    </Flex>

                    <Box position={'absolute'} top={16} zIndex={2} left={'50%'} transform={'translateX(-50%)'}>
                        <Button colorScheme='green'>
                            Propriedades
                        </Button>
                        <Button color={'gray.500'} borderColor={'gray.500'} ml={3}>
                            Clima
                        </Button>
                    </Box>
                    <GoogleMap
                        options={mapOptions}
                        mapContainerClassName='App-map'
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={17}
                    >
                        <Polygon
                            options={polygonOptions}
                            path={path}
                        />
                    </GoogleMap>
                </>
            ) : <></>}
        </>
    )
}

export default FarmLocation