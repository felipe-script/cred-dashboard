import { Flex, Heading, Text } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { DetailsType } from '../../../../../types'

type FarmItemType = {
    details: DetailsType,
}

export const FarmItem: React.FC<FarmItemType> = ({ details }) => {
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
                <Heading fontSize={'lg'} mb={{ base: 5, md: 0 }} color={'gray.600'}>{details.title}</Heading>
                <Text fontWeight={'bold'} color={'gray.500'}>{`${details.city} - ${details.state}`}</Text>
                <Flex gap={2}>
                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>{details.area}</Text>
                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>{details.hec}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FarmItem