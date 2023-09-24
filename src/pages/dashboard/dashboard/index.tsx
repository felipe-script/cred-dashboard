import React from 'react'
import { Container } from '@chakra-ui/react'
import { TotalAreas, FarmSection, FarmInformationSection } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'
import { FarmSelectionProvider } from '../../../context'

export const Dashboard = (): React.ReactElement => {
    return (
        <FarmSelectionProvider>
            <TotalAreas />
            <FarmSection />
            <FarmInformationSection />
        </FarmSelectionProvider>
    )
}

export default Dashboard