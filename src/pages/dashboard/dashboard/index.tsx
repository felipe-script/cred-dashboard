import React from 'react'
import {
    Container, Card, CardBody, Flex, Heading, Box, Text, Divider,
    TableContainer, Th, Table, TableCaption, Thead, Tbody, Tr, Td,
    Tfoot
}
    from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Header, TotalAreas, FarmSection, BoxSection } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Header />
            <TotalAreas />
            <FarmSection />
            <BoxSection title={'Fazenda Salto Alto'} mt={6} textAlign={'left'}>
                <Flex direction={'column'} width={'40%'}>
                    <Flex direction={'column'} gap={3}>
                        <Box rounded={'md'} bg={'gray.200'} p={2} alignSelf={'flex-start'}>
                            <Text color={'gray.600'} fontSize={'sm'}>Média Propriedade Produtiva</Text>
                        </Box>
                        <Text color={'gray.400'} maxW={'398px'}>ROD BR 359 REGIÃO DO POSTO DA PÓLVORA + 6 KM ESQUERDA</Text>
                        <Text color={'gray.600'} fontWeight={'bold'}>ALCINÓPOLIS - MS</Text>
                        <Divider />
                    </Flex>
                    <Flex direction={'column'} gap={3} mt={3}>
                        <Text color={'gray.400'}>NIRF</Text>
                        <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>-</Text>
                        <Text color={'gray.400'}>INCRA</Text>
                        <Flex gap={3} alignItems={'center'}>
                            <Text color={'gray.600'} fontSize={'lg'} fontWeight={'bold'}>9017166180987</Text>
                            <CheckCircleIcon fontSize={25} color={'green.400'} />
                            <Text color={'green.400'} fontWeight={'bold'}>Quitado</Text>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={3} mt={10}>
                        <Text color={'gray.400'} fontWeight={'bold'}>MATRÍCULAS</Text>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th isNumeric>Num.</Th>
                                        <Th>Área</Th>
                                        <Th>UF</Th>
                                        <Th>Município</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td isNumeric>12102</Td>
                                        <Td>233.2</Td>
                                        <Td>MS</Td>
                                        <Td>Coxim</Td>
                                    </Tr>
                                    <Tr>
                                        <Td isNumeric>1102</Td>
                                        <Td>23.2</Td>
                                        <Td>SP</Td>
                                        <Td>Braganca Paulista</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Divider mt={8} />
                    </Flex>

                    <Flex direction={'column'} gap={3} mt={10}>
                        <Text color={'gray.400'} fontWeight={'bold'}>PROPRIETÁRIOS</Text>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Nome</Th>
                                        <Th>%</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>FERNANDO C.</Td>
                                        <Td>12.3</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>CARLOS L.</Td>
                                        <Td>87.7</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Divider mt={8} />
                    </Flex>
                </Flex>
            </BoxSection>
        </Container>
    )
}

export default Dashboard