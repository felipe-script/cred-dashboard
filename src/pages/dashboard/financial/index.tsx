import React from 'react'
import { Box } from '@chakra-ui/react'

import { FinancialHistory, About } from './components'

export const Financial = (): React.ReactElement => {
    return (
        <Box mt={{ base: 80, md: 40 }} pt={6} bg={'transparent'}>
            <FinancialHistory />
            <About />
        </Box>
    )
}

export default Financial