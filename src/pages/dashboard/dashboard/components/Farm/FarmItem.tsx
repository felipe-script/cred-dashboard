import { Flex, Heading, Text } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'

export const FarmItem = () => {
    return (
        <Flex
            gap={6}
            minW={330}
            _hover={{ bg: 'gray.50' }}
            _focus={{ bg: 'gray.50' }}
            alignItems={'center'} p={2}
            borderRadius={'md'}
            transition={'background .5s'}
            cursor={'pointer'}>
            <Icons.IconFarm w={'50px'} h={'50px'} mixBlendMode={'multiply'} ml={6} />
            <Flex p={'3'} direction={'column'} minH={59} flex={1} textAlign={'left'} gap={3}>
                <Heading fontSize={'lg'} mb={{ base: 5, md: 0 }} color={'gray.600'}>Fazenda Salto Alto</Heading>
                <Text fontWeight={'bold'} color={'gray.500'}>Belo Horizonte - MG</Text>
                <Flex gap={2}>
                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>430 ha.</Text>
                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>380 ha.</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FarmItem