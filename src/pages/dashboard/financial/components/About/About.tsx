import { Text, Flex, Grid, GridItem, Heading, Box, Divider } from '@chakra-ui/react'

import { Feedback } from '../'
import * as Icons from '../../../../../components/Icons/Icons.tsx'

const feedbacksMessages = [
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci laoreet et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam',
        name: 'Leonardo',
        date: '12/09/2022 11:45:12'
    },
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis massa id purus vulputate, at sodales tellus mattis. In commodo leo magna, porttitor dictum orci laoreet et. Nulla aliquet, mi eget fermentum iaculis, velit dui imperdiet diam',
        name: 'Maria',
        date: '28/09/2022 12:45:00'
    },
]

export const About = () => {

    const renderFeedbacks = () => {
        return feedbacksMessages.map((feedback, index) => {
            return (
                <Feedback message={feedback.message} name={feedback.name} date={feedback.date} key={index} />
            )
        })
    }

    return (
        <Flex mt={20} gap={6} direction={{ base: 'column', lg: 'row' }}>
            <Grid
                width={{ base: '100%', lg: '60%' }}
                templateRows='repeat(1, 1fr)'
                templateColumns={{ base: '100%', lg: '50% 50%' }} gap={6}>
                <GridItem w='100%' borderRadius={'lg'} shadow={'md'} p={3} position={'relative'}>
                    <Heading fontSize={18} mb={10} color={'gray.500'} position={'absolute'} top={-10}>Institucional</Heading>
                    <Flex justify={'space-between'}>
                        <Text color={'gray.500'}>Unidades de Negócio</Text>
                        <Text ml={2} bg={'green.100'} color={'green.400'} px={2} py={1} borderRadius={'lg'} fontSize={'xs'}>BAIXO</Text>
                    </Flex>
                    <Text fontSize={20} fontWeight={'bold'} textAlign={'left'} mt={100}>9 Unidades</Text>
                </GridItem>
                <GridItem w='100%' borderRadius={'lg'} shadow={'md'} p={3}>
                    <Icons.SyngentaLogo w={'108px'} h={'36px'} ml={6} />
                    <Text color={'gray.900'} my={3}>Syngenta</Text>
                    <Text color={'gray.500'}>Principal fornecedor</Text>
                    <Divider my={4} />
                    <Text color={'gray.700'}>50%</Text>
                </GridItem>

                <GridItem w='100%' borderRadius={'lg'} shadow={'md'}>
                    <Box borderRadius={'md'} p={6}>
                        <Flex justify={'space-between'}>
                            <Text color={'gray.500'} fontSize={18} fontWeight={'bold'}>ERP</Text>
                            <Icons.SiagriLogo w={'108px'} h={'36px'} ml={6} mixBlendMode={'multiply'} />
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem w='100%' borderRadius={'lg'} shadow={'md'} bg={'green.500'}>
                    <Box borderRadius={'md'} p={6}>
                        <Flex justify={'space-between'} color={'white'} alignItems={'center'}>
                            <Flex direction={'column'}>
                                <Text fontSize={'xs'} fontWeight={'bold'} >Tempo de Mercado</Text>
                                <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'left'}>22 anos</Text>
                            </Flex>
                            <Icons.IconStamp w={'24px'} h={'24px'} ml={'auto'} />
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem w='100%' borderRadius={'lg'} shadow={'md'} colSpan={{ base: 1, lg: 2 }} p={5}>
                    <Box borderRadius={'md'} p={6}>
                        <Flex justify={'space-between'} alignItems={'center'}>
                            <Text color={'gray.500'} fontWeight={'bold'} display={'inline-flex'}>Score Serasa
                                <Text ml={2} bg={'green.100'} color={'green.400'} px={2} py={1} borderRadius={'lg'} fontSize={'xs'}>
                                    BOM</Text>
                            </Text>

                            <Flex direction={'column'} position={'relative'}>
                                <Icons.IconScore w={'92px'} h={'46px'} ml={'auto'} position={'absolute'} top={-5} left={-5} />
                                <Text fontSize={'lg'} fontWeight={'bold'}>820</Text>
                                <Text fontSize={'xs'} fontWeight={'bold'} color={'gray.500'}>de 1000</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
            <Flex direction={'column'} width={{ base: '100%', lg: '40%' }} ml={6} position={'relative'} mt={{ base: 10, lg: 0 }}>
                <Heading fontSize={18} mb={10} color={'gray.500'} position={'absolute'} top={-10}>Sentimento</Heading>
                {renderFeedbacks()}
            </Flex>
        </Flex>
    )
}

export default About