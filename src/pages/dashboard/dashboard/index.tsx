import React from 'react'
import { Card, CardHeader, CardBody, Text, List, ListItem, Flex, Container } from '@chakra-ui/react'
import { Menu } from '../../../components/Menu'
export const Dashboard = (): React.ReactElement => {
    return (
        <Container minW={'100%'} position={'relative'}>
            <Menu />
            <Card height={183} position={'absolute'} width={'80%'} top={70} left={'50%'} transform={'translateX(-50%)'}>
                <CardBody>
                    <List width={'100%'} >
                        <Flex>
                            <ListItem>Home -&nbsp; </ListItem>
                            <ListItem>Carteira de clientes -&nbsp; </ListItem>
                            <ListItem>Produtor Joāo Ferreira</ListItem>
                        </Flex>
                    </List>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Dashboard