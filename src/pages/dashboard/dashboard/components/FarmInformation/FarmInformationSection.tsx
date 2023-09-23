import { Flex, Heading } from '@chakra-ui/react'

import { BoxSection, BoxArea, Tablerize,  AreaChart, BarChart } from './../../../../../components'
import { FarmDetails, FarmLocation } from '../'

export const FarmInformationSection = () => {
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
          <AreaChart />
          <BarChart />
        </Flex>
      </Flex>
    </BoxSection>
  )
}

export default FarmInformationSection