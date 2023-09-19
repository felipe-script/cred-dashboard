import React from 'react'
import { Card, CardBody, Flex, Container,  } from '@chakra-ui/react'
import {  Header } from './components'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
           <Header/>
        </Container>
    )
}

export default Dashboard