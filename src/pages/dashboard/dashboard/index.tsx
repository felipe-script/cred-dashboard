import React from 'react'
import { TotalAreas, FarmSection, FarmInformationSection } from './components'
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