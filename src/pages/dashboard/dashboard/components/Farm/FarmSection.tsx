import { Flex } from '@chakra-ui/react'

import { FarmItem } from '..' 
import { BoxSection } from '../../../../../components'
import { useFarmSelectionContext } from '../../../../../context'

export const FarmSection = () => {
    const { farms } = useFarmSelectionContext()

    const renderFarmItem = (): React.ReactElement[] => {
        return farms.map((farm, index) => {
            return (
                <FarmItem key={index} details={farm.details} />
            )
        })
    }
    
    return (
        <BoxSection title='Fazendas' mt={6}>
            <Flex gap={10} flexWrap={'wrap'}>
                {renderFarmItem()}
            </Flex>
        </BoxSection>
    )
}

export default FarmSection