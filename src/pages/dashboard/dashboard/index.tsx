import React from 'react'
import { Container, Card, CardBody, Flex, Heading, Box, Text } from '@chakra-ui/react'
import { Header, TotalAreas } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Header />
            <TotalAreas />
            <Card mt={40} p={8}>
                <CardBody>
                    <Heading fontSize={'lg'} textAlign={'left'} mb={6}>Fazendas</Heading>
                    <Flex gap={10} flexWrap={'wrap'}>
                        <Flex gap={6} minW={330} bg={'gray.50'} alignItems={'center'} p={2} borderRadius={'md'}>
                            <Icons.IconArea w={'50px'} h={'50px'} mixBlendMode={'multiply'} ml={6} />
                            <Flex p={'3'} direction={'column'} minH={59} flex={1} textAlign={'left'} gap={3}>
                                <Heading fontSize={'lg'} mb={{ base: 5, md: 0 }} color={'gray.600'}>Fazenda Salto Alto</Heading>
                                <Text fontWeight={'bold'} color={'gray.500'}>Belo Horizonte - MG</Text>
                                <Flex gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>430 ha.</Text>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>380 ha.</Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex gap={6} minW={330} bg={'gray.50'} alignItems={'center'} p={2} borderRadius={'md'}>
                            <Icons.IconArea w={'50px'} h={'50px'} mixBlendMode={'multiply'} ml={6} />
                            <Flex p={'3'} direction={'column'} minH={59} flex={1} textAlign={'left'} gap={3}>
                                <Heading fontSize={'lg'} mb={{ base: 5, md: 0 }} color={'gray.600'}>Fazenda Salto Alto</Heading>
                                <Text fontWeight={'bold'} color={'gray.500'}>Belo Horizonte - MG</Text>
                                <Flex gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>430 ha.</Text>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>380 ha.</Text>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex gap={6} minW={330} bg={'gray.50'} alignItems={'center'} p={2} borderRadius={'md'}>
                            <Icons.IconArea w={'50px'} h={'50px'} mixBlendMode={'multiply'} ml={6} />
                            <Flex p={'3'} direction={'column'} minH={59} flex={1} textAlign={'left'} gap={3}>
                                <Heading fontSize={'lg'} mb={{ base: 5, md: 0 }} color={'gray.600'}>Fazenda Salto Alto</Heading>
                                <Text fontWeight={'bold'} color={'gray.500'}>Belo Horizonte - MG</Text>
                                <Flex gap={2}>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>430 ha.</Text>
                                    <Text fontSize={'sm'} color={'gray.500'} fontWeight={'bold'}>380 ha.</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Dashboard