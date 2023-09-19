import { Text, Heading, Flex, Box } from '@chakra-ui/react'
import * as Icons from '../../../../../components/Icons/Icons.tsx'

export const ProductorSection = () => {
  return (
    <Flex>
    <Box height={81} width={81} bg={'gray.100'} borderRadius={'md'}>
        <Flex direction={'column'} alignItems={'center'} height={'100%'} justify={'center'}>
            <Icons.IconFarm w="35px" h="35px" mb="5px" />
            <Text fontSize={10}>PRODUTOR RURAL</Text>
        </Flex>
    </Box>
    <Flex direction={'column'} justify={'center'} ml={8}>
        <Heading fontSize={'md'}>Produtor João Ferreira</Heading>
        <Text ml={-7} color='gray.400' fontWeight={'bold'} fontSize={'sm'}>02.916.265/0001-60</Text>
    </Flex>
    <Flex direction={'column'} justify={'center'} justifySelf={'flex-end'} ml={'auto'}>
        <Text fontSize={'md'} fontWeight={'bold'} color={'gray.400'}>REGIONAL</Text>
        <Box bg={'gray.200'} borderRadius={'lg'} p={'1'}>
            <Text>Sul</Text>
        </Box>
    </Flex>
</Flex>
  )
}

export default ProductorSection