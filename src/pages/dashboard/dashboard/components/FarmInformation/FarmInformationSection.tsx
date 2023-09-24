import { Flex, Heading } from '@chakra-ui/react'

import { BoxSection, BoxArea, Tablerize } from './../../../../../components'
import { AreaChart, BarChart  } from '../'
import { FarmDetails, FarmLocation } from '../'
import { useFarmSelectionContext } from '../../../../../context'

export const FarmInformationSection = () => {
  const { selectedFarmOption } = useFarmSelectionContext()
  const { enrollment, owners, areas, areaChart, barChart, details } = selectedFarmOption

  const renderBoxAreas = (): React.ReactElement[] => areas.map((text, index) => <BoxArea text={text} key={`${text}-${index}`}/>)

  return (
    <BoxSection title={details.title} mt={6} textAlign={'left'}>
      {/* column left */}
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex direction={'column'} width={{ base: '100%', md: '40%' }}>
          <FarmDetails />
          <Flex direction={'column'} mt={10}>
            <Tablerize
              title="MATRÍCULAS"
              headers={enrollment.headers}
              rows={enrollment.rows}
            />
          </Flex>

          <Flex direction={'column'} mt={10}>
            <Tablerize
              title="PROPRIETÁRIOS"
              headers={owners.headers}
              rows={owners.rows}
            />
          </Flex>

          {/* column right */}

          <Flex direction={'column'} mt={10} gap={6}>
            <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={3} color={'gray.400'}>ÁREAS</Heading>
            <Flex gap={3}>
              {renderBoxAreas()}
            </Flex>
          </Flex>
        </Flex>
        
        <Flex direction={'column'} width={{ base: '100%', md: '60%' }} ml={{ base: 0, md: 6 }} position={'relative'}>
          <FarmLocation />
          <AreaChart data={areaChart} />
          <BarChart data={barChart} />
        </Flex>
      </Flex>
    </BoxSection>
  )
}

export default FarmInformationSection