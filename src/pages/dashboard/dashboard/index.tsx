import React from 'react'
import { Container, Card, CardBody, Flex, Heading, Box, Text  } from '@chakra-ui/react'
import {  Header } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
           <Header/>
           <Card mt={{base: 80, md: 40}} p={8}>
            <CardBody>
                <Flex>
                    <Heading fontSize={'lg'} mr={'16'}>Áreas Totais</Heading>
                    <Box width={110} bg={'gray.200'} borderRadius={'md'} p={'3'} position={'relative'} minH={59}>
                        <Icons.IconArea w={'30px'} h={'29px'} mixBlendMode={'multiply'} position={'absolute'} top={-4} left={'50%'} transform={'translateX(-50%)'}/>
                        <Text fontWeight={'bold'} color={'gray.600'}>437.1 ha.</Text>
                        <Text color={'gray.500'} fontSize={'sm'}>TOTAL</Text>
                    </Box>
                </Flex>
            </CardBody>
           </Card>
        </Container>
    )
}

export default Dashboard