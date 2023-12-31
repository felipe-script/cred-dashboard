import {
    Flex, Box, Text, Divider,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useFarmSelectionContext } from '../../../../../context'

export const FarmDetails = () => {
    const { selectedFarmOption: { details } } = useFarmSelectionContext() 
    return (
        <>
            <Flex direction={'column'} gap={3}>
                <Box rounded={'md'} bg={'gray.200'} p={2} alignSelf={'flex-start'}>
                    <Text color={'gray.600'} fontSize={'sm'}>{details.productivePriority}</Text>
                </Box>
                <Text color={'gray.400'} maxW={'398px'}>{details.address}</Text>
                <Text color={'gray.600'} fontWeight={'bold'}>{`${details.city} - ${details.state}`}</Text>
                <Divider />
            </Flex>
            
            <Flex direction={'column'} gap={3} mt={3}>
                <Text color={'gray.400'}>NIRF</Text>
                <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>{details.nirf}</Text>
                <Text color={'gray.400'}>INCRA</Text>
                <Flex gap={3} alignItems={'center'}>
                    <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>{details.incra}</Text>
                    <CheckCircleIcon fontSize={25} color={'green.400'} />
                    <Text color={'green.400'} fontWeight={'bold'}>{details.status}</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default FarmDetails