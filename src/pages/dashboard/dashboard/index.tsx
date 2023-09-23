import React from 'react'
import { Container } from '@chakra-ui/react'
import { Header, TotalAreas, FarmSection, FarmInformationSection } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Header />
            <TotalAreas />
            <FarmSection />
            <FarmInformationSection/>
        </Container>
    )
}

export default Dashboard