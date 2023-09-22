import React, { useState, useRef, useCallback } from 'react'
import {
  Flex, Heading, Box, Text, Divider,
  TableContainer, Th, Table, Thead, Tbody, Tr, Td,
  Button,
  Tfoot
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';


import { BoxSection, BoxArea, Tablerize, FarmDetails, FarmLocation } from './../../components'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { CoordinatesType } from '../../../../../types'

export const FarmInformationSection = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: ""
  // })

  // const containerStyle: React.CSSProperties = {
  //   width: '100%',
  //   height: '400px',
  //   borderRadius: '14px',
  // };

  // const center: CoordinatesType = {
  //   lat: 52.513281130944264, lng: 13.36346611492683
  // };

  // const path: CoordinatesType[] = [
  //   { lat: 52.513281130944264, lng: 13.36346611492683 },
  //   { lat: 52.512575957821824, lng: 13.362994046140209 },
  //   { lat: 52.512445368964684, lng: 13.363637776303783 },
  //   { lat: 52.513124426783875, lng: 13.364088387418285 }
  // ];

  // const polygonOptions: google.maps.PolygonOptions = {
  //   paths: path,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 2,
  //   fillOpacity: 0.35,
  // };

  // const mapOptions: google.maps.MapOptions = {
  //   mapTypeId: 'satellite',
  //   disableDefaultUI: true
  // }

  return (
    <BoxSection title={'Fazenda Salto Alto'} mt={6} textAlign={'left'}>
        {/* column left */}
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

           {/* column right */}

          <Flex direction={'column'} mt={10} gap={6}>
            <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={3} color={'gray.400'}>ÁREAS</Heading>
            <Flex gap={3}>
              <BoxArea />
              <BoxArea />
            </Flex>
          </Flex>
        </Flex>
        <FarmLocation />
      </Flex>
    </BoxSection>
  )
}

export default FarmInformationSection