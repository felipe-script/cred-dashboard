import { Card, CardBody, List, ListItem, Flex } from '@chakra-ui/react'

const Menu = () => {
    return(
        <Card bg={'green.600'} color={'white'} height={180}>
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
    )
}

export default Menu