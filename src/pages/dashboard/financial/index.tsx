import React from 'react'
import { Text, Flex, Grid, GridItem, Heading, Box, Divider } from '@chakra-ui/react'

import { FinancialHistory } from './components'
import * as Icons from '../../../components/Icons/Icons.tsx'

export const Financial = (): React.ReactElement => {
    return (
        <Box mt={{ base: 80, md: 40 }} pt={6} bg={'transparent'}>
            <FinancialHistory />
            <Flex mt={20} gap={6} direction={{base: 'column', md: 'row'}}>
                <Grid
                    width={{base: '100%', md: '60%'}}
                    templateRows='repeat(1, 1fr)'
                    templateColumns={{ base: '100%', md: '50% 50%' }} gap={6}>
                    <GridItem w='100%' borderRadius={'lg'} shadow={'md'} p={3} position={'relative'}>
                        <Heading fontSize={18} mb={10} color={'gray.500'} position={'absolute'} top={-10}>Institucional</Heading>
                        <Flex justify={'space-between'}>
                            <Text color={'gray.500'}>Unidades de Negócio</Text>
                            <Text ml={2} bg={'green.100'} color={'green.400'} px={2} py={1} borderRadius={'lg'}>Baixo</Text>
                        </Flex>
                        <Text fontSize={20} fontWeight={'bold'} textAlign={'left'} mt={100}>9 Unidades</Text>
                    </GridItem>
                    <GridItem w='100%' borderRadius={'lg'} shadow={'md'} p={3}>
                        <Icons.SyngentaLogo w={'108px'} h={'36px'} ml={6} />
                        <Text color={'gray.900'} my={3}>Syngenta</Text>
                        <Text color={'gray.500'}>Principal fornecedor</Text>
                         <Divider my={4}/> 
                        <Text color={'gray.700'}>50%</Text>
                    </GridItem>

                    <GridItem w='100%' bg={'red.50'}>
                        <Text color={'gray.400'} my={3}>OBJETIVO</Text>
                    </GridItem>

                    <GridItem w='100%' bg={'red.50'}>
                        <Text color={'gray.400'} my={3}>OBJETIVO</Text>
                    </GridItem>
                    <GridItem w='100%' bg={'red.50'} colSpan={{ base: 1, md: 2 }}>
                        <Text color={'gray.400'} my={3}>OBJETIVO</Text>
                    </GridItem>
                </Grid>
                <Flex direction={'column'}   width={{base: '100%', md: '40%'}} ml={6} position={'relative'} mt={{base: 10, md: 0}}>
                    <Heading fontSize={18} mb={10} color={'gray.500'} position={'absolute'} top={-10}>Sentimento</Heading>
                    <Box borderRadius={'md'} shadow={'md'} p={6}>
                        <Flex>
                            <Box borderRadius={'lg'} p={4} bg={'gray.300'} />
                            <Text ml={6} fontWeight={'bold'} color={'gray.500'} fontSize={'xs'}>João Júnior</Text>
                            <Text color={'gray.500'} ml={'auto'} fontSize={'xs'}>12/09/2022 11:45:12</Text>
                        </Flex>
                        <Text color={'gray.500'} textAlign={'justify'} mt={3} ml={14} fontSize={'xs'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin mattis massa id purus vulputate, at sodales tellus mattis.
                            In commodo leo magna, porttitor dictum orci laoreet et.
                            Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |</Text>
                    </Box>

                    <Box borderRadius={'md'} shadow={'md'} p={6} mt={6}>
                        <Flex>
                            <Box borderRadius={'lg'} p={4} bg={'gray.300'} />
                            <Text ml={6} fontWeight={'bold'} color={'gray.500'} fontSize={'xs'}>Leonardo</Text>
                            <Text color={'gray.500'} ml={'auto'} fontSize={'xs'}>12/09/2022 11:45:12</Text>
                        </Flex>
                        <Text color={'gray.500'} textAlign={'justify'} mt={3} ml={14} fontSize={'xs'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin mattis massa id purus vulputate, at sodales tellus mattis.
                            In commodo leo magna, porttitor dictum orci laoreet et.
                            Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam |</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Financial