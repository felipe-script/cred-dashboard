import { Flex, Heading, Box, Text } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { BoxSection } from '..'

export const TotalAreas = () => {
    return (
        <BoxSection mt={{ base: 80, md: 40 }} p={8}>
            <Flex gap={6} direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
                <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={{ base: 5, md: 0 }}>Áreas Totais</Heading>
                <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
                    <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'} />
                    <Text fontWeight={'bold'} color={'gray.600'}>437.1 ha.</Text>
                    <Text color={'gray.500'} fontSize={'sm'}>TOTAL</Text>
                </Box>

                <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
                    <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'} />
                    <Text fontWeight={'bold'} color={'gray.600'}>287.3 ha.</Text>
                    <Text color={'gray.500'} fontSize={'sm'}>ARRENDADA</Text>
                </Box>
                <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
                    <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'} />
                    <Text fontWeight={'bold'} color={'gray.600'}>380.6 ha.</Text>
                    <Text color={'gray.500'} fontSize={'sm'}>PRÓPRIA</Text>
                </Box>
                <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
                    <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'} />
                    <Text fontWeight={'bold'} color={'gray.600'}>352.2 ha.</Text>
                    <Text color={'gray.500'} fontSize={'sm'}>PRODUTIVA</Text>
                </Box>
            </Flex>
        </BoxSection>
    )
}

export default TotalAreas