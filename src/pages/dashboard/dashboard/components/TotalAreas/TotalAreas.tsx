import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { BoxSection, BoxArea} from '..'

export const TotalAreas = () => {
    return (
        <BoxSection mt={{ base: 80, md: 40 }} pt={6}>
            <Flex gap={6} direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
                <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={{ base: 5, md: 0 }}>Áreas Totais</Heading>
                <BoxArea />
                <BoxArea />
                <BoxArea />
            </Flex>
        </BoxSection>
    )
}

export default TotalAreas