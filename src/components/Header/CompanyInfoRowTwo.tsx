import { Flex, Heading, Text } from '@chakra-ui/react'
import * as Icons from '../Icons/Icons.tsx'

export const CompanyInfoRowTwo = () => {
  return (
    <Flex ml={'auto'} gap={3} direction={{sm: 'column', md: 'row'}}>
      <Flex direction={'column'}>
        <Heading fontSize={'md'} color={'gray.400'}>CTC</Heading>
        <Text fontWeight={'bold'} color={'gray.600'}><Icons.IconPerson w="16px" h="16px" mr={'2'} />Jorge M.</Text>
      </Flex>
      <Flex direction={'column'}>
        <Heading fontSize={'md'} color={'gray.400'}>CRÉDITO</Heading>
        <Text fontWeight={'bold'} color={'gray.600'}><Icons.IconPerson w="16px" h="16px" mr={'2'} />Person Name</Text>
      </Flex>
    </Flex>
  )
}

export default CompanyInfoRowTwo