import {
    Flex, Box, Text, Divider,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export const FarmDetails = () => {
    return (
        <>
            <Flex direction={'column'} gap={3}>
                <Box rounded={'md'} bg={'gray.200'} p={2} alignSelf={'flex-start'}>
                    <Text color={'gray.600'} fontSize={'sm'}>Média Propriedade Produtiva</Text>
                </Box>
                <Text color={'gray.400'} maxW={'398px'}>ROD BR 359 REGIÃO DO POSTO DA PÓLVORA + 6 KM ESQUERDA</Text>
                <Text color={'gray.600'} fontWeight={'bold'}>ALCINÓPOLIS - MS</Text>
                <Divider />
            </Flex>
            
            <Flex direction={'column'} gap={3} mt={3}>
                <Text color={'gray.400'}>NIRF</Text>
                <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>-</Text>
                <Text color={'gray.400'}>INCRA</Text>
                <Flex gap={3} alignItems={'center'}>
                    <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>9017166180987</Text>
                    <CheckCircleIcon fontSize={25} color={'green.400'} />
                    <Text color={'green.400'} fontWeight={'bold'}>Quitado</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default FarmDetails