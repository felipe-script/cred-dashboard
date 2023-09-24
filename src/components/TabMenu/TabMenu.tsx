import { Flex } from '@chakra-ui/react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

import * as Icons from '../Icons/Icons.tsx'

export const TabMenu = () => {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            <ChakraLink as={RouterNavLink} to='/' _hover={{ textDecoration: 'none', bg: 'gray.50' }} shadow={'md'} px={5} py={3} borderRadius={'md'} _activeLink={{bg: 'gray.100'}}>
                <Icons.IconLayers w="16px" h="16px" mt={'0.5'} />&nbsp;Empresas
            </ChakraLink>
            <ChakraLink as={RouterNavLink} _hover={{ textDecoration: 'none', bg: 'gray.50' }} shadow={'md'} px={5} py={3} borderRadius={'md'}>
                <Icons.IconAgro w="16px" h="16px" mt={'0.5'} />&nbsp;Agronômico
            </ChakraLink>

            <ChakraLink as={RouterNavLink} to={'/financial'} _hover={{ textDecoration: 'none', bg: 'gray.50' }} shadow={'md'} px={5} py={3} borderRadius={'md'} _activeLink={{bg: 'gray.100'}}>
            <Icons.IconFinance w="16px" h="16px" mt={'0.5'} />&nbsp;Financeiro
            </ChakraLink>
        </Flex>
    )
}

export default TabMenu