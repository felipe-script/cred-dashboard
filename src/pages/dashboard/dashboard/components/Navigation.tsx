import { Flex } from '@chakra-ui/react'
import { ChakraLink } from '../../../../components'

import * as Icons from '../../../../components/Icons/Icons.tsx'

export const Navigation = () => {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            <ChakraLink  to='/'>
                <Icons.IconLayers w="16px" h="16px" mt={'0.5'} />&nbsp;Empresas
            </ChakraLink>

            <ChakraLink to={'/agro'}>
                <Icons.IconAgro w="16px" h="16px" mt={'0.5'} />&nbsp;Agronômico
            </ChakraLink>

            <ChakraLink to={'/financial'}>
            <Icons.IconFinance w="16px" h="16px" mt={'0.5'} />&nbsp;Financeiro
            </ChakraLink>
        </Flex>
    )
}

export default Navigation