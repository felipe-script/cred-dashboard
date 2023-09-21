import { Card, CardBody, Heading, CardProps } from '@chakra-ui/react'

type BoxSectionProps = CardProps & {
    children: React.ReactNode
    title?: string,
}

export const BoxSection: React.FC<BoxSectionProps> = ({children, title, ...rest}) => {
    return (
        <Card {...rest}>
            <CardBody>
                {title && <Heading fontSize={'lg'} textAlign={'left'} mb={6}>{title}</Heading>}
                {children}
            </CardBody>
        </Card>
    )
}

export default BoxSection