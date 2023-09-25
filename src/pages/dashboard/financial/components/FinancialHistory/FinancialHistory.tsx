import {  Text, Grid, GridItem, Heading, Box } from '@chakra-ui/react'

import { Tablerize } from '.././../../../../components/'
import { BarChart } from '../../../../dashboard/dashboard/components'

const data = [
  {
      "name": "A",
      "uv": 2900,
      "pv": 1600,
      "amt": 1600
  },
  {
      "name": "Z",
      "uv": 2200,
      "pv": 1198,
      "amt": 2210
  },
  {
      "name": "E",
      "uv": 1600,
      "pv": 6800,
      "amt": 2290
  },
  {
      "name": "R",
      "uv": 2380,
      "pv": 3708,
      "amt": 2000
  },
  {
      "name": "O",
      "uv": 1490,
      "pv": 4300,
      "amt": 2181
  },
  {
      "name": "P",
      "uv": 1990,
      "pv": 3200,
      "amt": 2500
  },
  {
      "name": "L",
      "uv": 3090,
      "pv": 3800,
      "amt": 2100
  }
]

const history = {
  "headers": [
      "Num.",
      "Área",
      "UF",
      "Município"
  ],
  "rows": [
      [
          "7502",
          "400.5",
          "RJ",
          "Itaguaí"
      ],
      [
          "2201",
          "120.3",
          "SP",
          "São Paulo"
      ]
  ]
}
export const FinancialHistory = () => {
  return (
    <Grid templateRows='repeat(1, 1fr)'
        templateColumns={{ base: '100%', md: '20% 50% 30%' }} gap={6}>
        <GridItem w='100%' borderRadius={'lg'} shadow={'md'}p={3}>
            <Heading fontSize={18}>Heading</Heading>
            <Text color={'green.400'} fontWeight={'bold'} fontSize={'64px'}>A</Text>
            <Text>96,5</Text>
            <Text color={'gray.400'} my={3}>OBJETIVO</Text>
            <Text borderRadius={'lg'} bg={'gray.100'} px={6} py={3} display={'inline-block'}>98,9</Text>
        </GridItem>
        <GridItem w='100%' borderRadius={'lg'} shadow={'md'} p={3}>
            <BarChart data={data} title='Histórico de Perfomance' mt={0} />
        </GridItem>
        <GridItem w='100%' shadow={'md'}>
            <Tablerize
                title="Histórico"
                headers={history.headers}
                rows={history.rows}
            />
        </GridItem>
    </Grid>
  )
}

export default FinancialHistory