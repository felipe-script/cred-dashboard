import React from 'react'
import { Card, CardBody, Flex } from '@chakra-ui/react'
import { Menu } from '../../../../../components/Menu'
import { CompanyInfoFirstRow, TabMenu, CompanyInfoRowTwo, BoxSection } from '..'

export const Header = (): React.ReactElement => {
    return (
        <>
            <Menu />
            <BoxSection minHeight={183} position={'absolute'} width={'80%'} top={70} left={'50%'} transform={'translateX(-50%)'}>
                <>
                <CompanyInfoFirstRow />
                    <Flex ml={{base: 0, lg: 108}} mt={3}>
                        <TabMenu />
                        <CompanyInfoRowTwo/>
                    </Flex>
                </>
            </BoxSection>
       </>
    )
}

export default Header