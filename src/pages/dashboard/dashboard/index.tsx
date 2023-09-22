import React from 'react'
import {
    Container, Card, CardBody, Flex, Heading, Box, Text, Divider,
    TableContainer, Th, Table, TableCaption, Thead, Tbody, Tr, Td,
    Tfoot
}
    from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Header, TotalAreas, FarmSection, BoxSection, FarmInformationSection } from './components'
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