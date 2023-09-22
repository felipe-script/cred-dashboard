import {
  Flex, Heading, Box, Text, Divider,
  TableContainer, Th, Table, Thead, Tbody, Tr, Td,
  Tfoot
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import { BoxSection, BoxArea, Tablerize, FarmDetails } from './../../components'
import * as Icons from '../../../../../components/Icons/Icons.tsx'

import React, { useState, useRef, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 52.513281130944264, lng: 13.36346611492683
};


export const FarmInformationSection = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const path = [
    { lat: 52.513281130944264, lng: 13.36346611492683 },
    { lat: 52.512575957821824, lng: 13.362994046140209 },
    { lat: 52.512445368964684, lng: 13.363637776303783 },
    { lat: 52.513124426783875, lng: 13.364088387418285 }
  ];

  const polygonOptions = {
    paths: path,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillOpacity: 0.35,
  };

  return (
    <BoxSection title={'Fazenda Salto Alto'} mt={6} textAlign={'left'}>
      <Flex>
        <Flex direction={'column'} width={'40%'}>
          <FarmDetails />
          <Flex direction={'column'} mt={10}>
            <Tablerize
              title="MATRÍCULAS"
              headers={['Num.', 'Área', 'UF', 'Município']}
              rows={[
                ['12102', '233.2', 'MS', 'Coxim'],
                ['1102', '23.2', 'SP', 'Braganca Paulista'],
              ]}
            />
          </Flex>

          <Flex direction={'column'} mt={10}>
            <Tablerize
              title="PROPRIETÁRIOS"
              headers={['Nome.', '%']}
              rows={[
                ['FERNANDO C.', '12.3'],
                ['CARLOS L.', '87.7'],
              ]}
            />
          </Flex>

          <Flex direction={'column'} mt={10} gap={6}>
            <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={3} color={'gray.400'}>ÁREAS</Heading>
            <Flex gap={3}>
              <BoxArea />
              <BoxArea />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={'column'} width={'60%'} bg={'gray.100'} ml={6}>
          {isLoaded ? (
            <GoogleMap
              options={{mapTypeId: 'satellite', disableDefaultUI: true}}
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
          ) : <></>}
        </Flex>
      </Flex>
    </BoxSection>
  )
}

export default FarmInformationSection