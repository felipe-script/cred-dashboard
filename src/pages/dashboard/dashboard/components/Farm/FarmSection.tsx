import { BoxSection, FarmItem } from '..'
import { Flex } from '@chakra-ui/react'

export const FarmSection = () => {
    return (
        <BoxSection title='Fazendas' mt={6}>
            <Flex gap={10} flexWrap={'wrap'}>
            <FarmItem />
            </Flex>
        </BoxSection>
    )
}

export default FarmSection