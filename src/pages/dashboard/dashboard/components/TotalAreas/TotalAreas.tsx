import { Flex, Heading } from '@chakra-ui/react'
import { BoxSection, BoxArea } from '../../../../../components/'
import { useFarmSelectionContext } from '../../../../../context'

export const TotalAreas = () => {
    const { selectedFarmOption: { areas } } = useFarmSelectionContext()

    const renderBoxAreas = (): React.ReactElement[] => areas.map((text, index) => <BoxArea text={text} key={`${index}`}/>)

    return (
        <BoxSection mt={{ base: 80, md: 40 }} pt={6}>
            <Flex gap={6} direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
                <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={{ base: 5, md: 0 }}>Áreas Totais</Heading>
                {renderBoxAreas()}
            </Flex>
        </BoxSection>
    )
}

export default TotalAreas