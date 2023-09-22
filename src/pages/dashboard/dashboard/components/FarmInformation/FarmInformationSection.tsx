import {
    Flex, Heading, Box, Text, Divider,
    TableContainer, Th, Table, Thead, Tbody, Tr, Td,
    Tfoot
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { BoxSection, BoxArea, Tablerize } from './../../components'
import * as Icons from '../../../../../components/Icons/Icons.tsx'

export const FarmInformationSection = () => {
    return (
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
                <Flex direction={'column'} mt={10}>
                    <Tablerize
                        title="MATRÍCULAS"
                        headers={['Num.', 'Área', 'UF', 'Município']}
                        rows={[
                            ['12102', '233.2', 'MS', 'Coxim'],
                            ['1102', '23.2', 'SP', 'Braganca Paulista'],
                        ]}
                    />
                </Flex>

                <Flex direction={'column'} mt={10}>
                    <Tablerize
                        title="PROPRIETÁRIOS"
                        headers={['Nome.', '%']}
                        rows={[
                            ['FERNANDO C.','12.3'],
                            ['CARLOS L.', '87.7'],
                        ]}
                    />
                </Flex>
                
                <Flex direction={'column'} mt={10} gap={6}>
                    <Heading fontSize={'lg'} mr={{ base: 0, md: '16' }} mb={3} color={'gray.400'}>ÁREAS</Heading>
                    <Flex gap={3}>
                        <BoxArea />
                        <BoxArea />
                    </Flex>
                </Flex>
            </Flex>
        </BoxSection>
    )
}

export default FarmInformationSection