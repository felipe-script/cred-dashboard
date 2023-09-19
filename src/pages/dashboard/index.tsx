import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
export const Dashboard = (): React.ReactElement =>{

    return (<Card>
        <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
    </Card>)
}