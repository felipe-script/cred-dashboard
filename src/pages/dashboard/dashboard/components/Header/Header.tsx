import React from 'react'
import {  Flex } from '@chakra-ui/react'
import { Menu, BoxSection } from '../../../../../components'
import { CompanyInfoFirstRow,  CompanyInfoRowTwo, Navigation } from '..'

export const Header = (): React.ReactElement => {
    return (
        <>
            <Menu />
            <BoxSection minHeight={183} position={'absolute'} width={'80%'} top={70} left={'50%'} transform={'translateX(-50%)'}>
                <>
                <CompanyInfoFirstRow />
                    <Flex ml={{base: 0, lg: 108}} mt={3}>
                        <Navigation />
                        <CompanyInfoRowTwo/>
                    </Flex>
                </>
            </BoxSection>
       </>
    )
}

export default Header