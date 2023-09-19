import React from 'react'
import { Card, CardHeader, CardBody, Text, List, Heading, Flex, Container, Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Menu } from '../../../components/Menu'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Menu />
            <Card height={183} position={'absolute'} width={'80%'} top={70} left={'50%'} transform={'translateX(-50%)'}>
                <CardBody>
                    <Flex>
                        <Box height={81} width={81} bg={'gray.100'} borderRadius={'md'}>
                            <Flex direction={'column'} alignItems={'center'} height={'100%'} justify={'center'}>
                                <Icons.IconFarm w="35px" h="35px" mb="5px" />
                                <Text fontSize={10}>PRODUTOR RURAL</Text>
                            </Flex>
                        </Box>
                        <Flex direction={'column'} justify={'center'} ml={8}>
                            <Heading fontSize={'md'}>Produtor João Ferreira</Heading>
                            <Text ml={-7} color='gray.400' fontWeight={'bold'} fontSize={'sm'}>02.916.265/0001-60</Text>
                        </Flex>
                        <Flex direction={'column'} justify={'center'} justifySelf={'flex-end'} ml={'auto'}>
                            <Text fontSize={'md'} fontWeight={'bold'} color={'gray.400'}>REGIONAL</Text>
                            <Box bg={'gray.200'} borderRadius={'lg'} p={'1'}>
                                <Text>Sul</Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex ml={108}>
                        <Tabs variant='soft-rounded' colorScheme='gray'>
                            <TabList gap={3}>
                                <Tab shadow={'md'}><Icons.IconLayers w="16px" h="16px" mt={'0.5'} />&nbsp;Empresas</Tab>
                                <Tab shadow={'md'}><Icons.IconAgro w="16px" h="16px" mt={'0.5'} />&nbsp;Agronômico</Tab>
                                <Tab shadow={'md'}><Icons.IconFinance w="16px" h="16px" mt={'0.5'} />&nbsp;Financeiro</Tab>
                            </TabList>
                            {/* <TabPanels>
                                <TabPanel>
                                    <p>one!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                            </TabPanels> */}
                        </Tabs>
                        <Flex ml={'auto'} gap={3}>
                        <Flex direction={'column'}>
                            <Heading fontSize={'md'} color={'gray.400'}>CTC</Heading>
                            <Text fontWeight={'bold'} color={'gray.600'}><Icons.IconPerson w="16px" h="16px" mr={'2'} />Jorge M.</Text>
                        </Flex>
                        <Flex direction={'column'}>
                            <Heading fontSize={'md'} color={'gray.400'}>CRÉDITO</Heading>
                            <Text fontWeight={'bold'} color={'gray.600'}><Icons.IconPerson w="16px" h="16px" mr={'2'} />Person Name</Text>
                        </Flex>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Dashboard