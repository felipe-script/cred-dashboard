import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'
import { Link as ChakraLinkC, LinkProps as ChakraLinkCProps } from '@chakra-ui/react'

type ChakraLinkWithReactRouter = & NavLinkProps &ChakraLinkCProps

type ChakraLinkProps = ChakraLinkWithReactRouter & {
    children: React.ReactNode
}

export const ChakraLink: React.FC<ChakraLinkProps> = ({ children, ...rest }) => {
    return (
        <ChakraLinkC as={RouterNavLink}
            _hover={{ textDecoration: 'none', bg: 'gray.50' }}
            shadow={'md'}
            px={5}
            py={3}
            borderRadius={'md'}
            _activeLink={{ bg: 'gray.100' }}
            {...rest}
        >
            {children}
        </ChakraLinkC>
    )
}

export default ChakraLink