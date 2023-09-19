import React, { ReactElement } from 'react';
import { Card, CardBody, List, ListItem, Flex, BoxProps } from '@chakra-ui/react';

const Menu: React.FC = (): ReactElement => {
  return (
    <Card bg={'green.600'} color={'white'} height={180}>
      <CardBody>
        <List width={'100%'}>
          <Flex>
            <ListItem>Home -&nbsp;</ListItem>
            <ListItem>Carteira de clientes -&nbsp;</ListItem>
            <ListItem>Produtor Joāo Ferreira</ListItem>
          </Flex>
        </List>
      </CardBody>
    </Card>
  );
};

export default Menu;