import { Flex, Heading, Text } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'
import { FarmType } from '../../../../../types'

type FarmItemProps = {
    farm: FarmType,
    isSelected: boolean,
    onClick: (id: number) => void,
}

export const FarmItem: React.FC<FarmItemProps> = ({onClick, farm, isSelected }) => {
    const { details, id } = farm
    return (
        <Flex
            onClick={() => onClick(id)}
            gap={6}
            minW={330}
            _hover={{ bg: 'gray.50' }}
            _focus={{ bg: 'gray.50' }}
            alignItems={'center'} p={2}
            borderRadius={'md'}
            transition={'background .5s'}
            bg={isSelected ? 'gray.50' : 'transparent'}
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