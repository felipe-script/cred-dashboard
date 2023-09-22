import React, { useState, useRef, useCallback } from 'react'
import {
  Flex, Heading, Box, Text, Divider,
  TableContainer, Th, Table, Thead, Tbody, Tr, Td,
  Button,
  Tfoot
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
   ResponsiveContainer, ComposedChart, Legend, Bar, Scatter, Line
   } from 'recharts';

import { BoxSection, BoxArea, Tablerize, FarmDetails, FarmLocation } from './../../components'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { CoordinatesType } from '../../../../../types'

export const FarmInformationSection = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const data2 = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

  return (
    <BoxSection title={'Fazenda Salto Alto'} mt={6} textAlign={'left'}>
      {/* column left */}
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex direction={'column'} width={{ base: '100%', md: '40%' }}>
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
        <Flex direction={'column'} width={{ base: '100%', md: '60%' }} ml={{ base: 0, md: 6 }} position={'relative'}>
          <FarmLocation />

          <Box width={'100%'} height={'235px'} position={'relative'} mt={100}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </Box>


          <Box width={'100%'} height={'235px'} position={'relative'} mt={100}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </Box>
        </Flex>
      </Flex>
    </BoxSection>
  )
}

export default FarmInformationSection