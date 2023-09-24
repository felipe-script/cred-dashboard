import React from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../pages/dashboard/dashboard/components'

export const DashBoardLayout = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Header />
            <Outlet />
        </Container>
    )
}

export default DashBoardLayout