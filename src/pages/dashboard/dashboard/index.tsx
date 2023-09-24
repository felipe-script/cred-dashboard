import React from 'react'
import { Container } from '@chakra-ui/react'
import { Header, TotalAreas, FarmSection, FarmInformationSection } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'
import { FarmSelectionProvider } from '../../../context'

export const Dashboard = (): React.ReactElement => {
    return (
        <>
            {/* <Container minW={'100%'} position={'relative'}> */}
            {/* <Header /> */}
            <FarmSelectionProvider>
                <TotalAreas />
                <FarmSection />
                <FarmInformationSection />
            </FarmSelectionProvider>
        </>
        //  </Container>
    )
}

export default Dashboard