import React from 'react'

import { Flex, Button, Box } from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

import { useFarmSelectionContext } from '../../../../../context'

export const FarmLocation = () => {
    const { selectedFarmOption: { coordinates } } = useFarmSelectionContext()
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_API_KEY ?? ''
    })

    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '400px',
        borderRadius: '14px',
    };

    const [centerOfTheFarm] = coordinates;

    const polygonOptions: google.maps.PolygonOptions = {
        paths: coordinates,
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
                        center={centerOfTheFarm}
                        zoom={17}
                    >
                        <Polygon
                            options={polygonOptions}
                            path={coordinates}
                        />
                    </GoogleMap>
                </>
            ) : <></>}
        </>
    )
}

export default FarmLocation