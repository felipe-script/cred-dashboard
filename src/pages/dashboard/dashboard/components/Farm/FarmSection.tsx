import { Flex } from '@chakra-ui/react'

import { FarmItem } from '..' 
import { BoxSection } from '../../../../../components'
import { useFarmSelectionContext } from '../../../../../context'

export const FarmSection = () => {
    const { farms, selectedFarmOption, handleSelectedFarmOption } = useFarmSelectionContext()

    const handleClickFarmItem = (id: number): void => handleSelectedFarmOption(id)

    const renderFarmItem = (): React.ReactElement[] => {
        return farms.map((farm, index) => {
            const isFarmSelected = selectedFarmOption.id === farm.id
            return (
                <FarmItem key={index} farm={farm} isSelected={isFarmSelected} onClick={handleClickFarmItem} />
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