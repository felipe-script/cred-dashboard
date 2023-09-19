import React from 'react'
import { Card, CardBody, Flex,  } from '@chakra-ui/react'
import { Menu } from '../../../../../components/Menu'
import { CompanyInfoFirstRow, TabMenu, CompanyInfoRowTwo } from '..'

export const Header = (): React.ReactElement => {
    return (
        <>
            <Menu />
            <Card height={183} position={'absolute'} width={'80%'} top={70} left={'50%'} transform={'translateX(-50%)'}>
                <CardBody>
                    <CompanyInfoFirstRow />
                    <Flex ml={108}>
                        <TabMenu />
                        <CompanyInfoRowTwo/>
                    </Flex>
                </CardBody>
            </Card>
       </>
    )
}

export default Header