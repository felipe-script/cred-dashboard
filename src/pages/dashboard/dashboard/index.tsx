import React from 'react'
import { Container, Card, CardBody, Flex, Heading, Box, Text } from '@chakra-ui/react'
import { Header, TotalAreas, FarmSection } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Header />
            <TotalAreas />
            <FarmSection />
        </Container>
    )
}

export default Dashboard