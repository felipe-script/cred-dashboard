import { Tabs, TabList, Tab, Flex } from '@chakra-ui/react'
import * as Icons from '../Icons/Icons.tsx'
export const TabMenu = () => {
    return (
        <Tabs variant='soft-rounded' colorScheme='gray'>
            <TabList>
                <Flex direction={{ base: 'column', md: 'row' }}  gap={3}>
                    <Tab shadow={'md'}><Icons.IconLayers w="16px" h="16px" mt={'0.5'} />&nbsp;Empresas</Tab>
                    <Tab shadow={'md'}><Icons.IconAgro w="16px" h="16px" mt={'0.5'} />&nbsp;Agronômico</Tab>
                    <Tab shadow={'md'}><Icons.IconFinance w="16px" h="16px" mt={'0.5'} />&nbsp;Financeiro</Tab>
                </Flex>
            </TabList>
            {/* <TabPanels>
        <TabPanel>
            <p>one!</p>
        </TabPanel>
        <TabPanel>
            <p>two!</p>
        </TabPanel>
    </TabPanels> */}
        </Tabs>
    )
}

export default TabMenu