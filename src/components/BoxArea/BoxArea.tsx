import {
    Flex, Box, Text,
} from '@chakra-ui/react'
import * as Icons from '../Icons/Icons.tsx'

type BoxAreaType = {
  text: string
}

export const BoxArea: React.FC<BoxAreaType> = ({ text }) => {
    return (
        <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
          <Flex direction={'column'} justify={'center'}>
          <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'} />
            <Text fontWeight={'bold'} color={'gray.600'}>{text}</Text>
            <Text color={'gray.500'} fontSize={'sm'}>TOTAL</Text>
          </Flex>
        </Box>
    )
}

export default BoxArea