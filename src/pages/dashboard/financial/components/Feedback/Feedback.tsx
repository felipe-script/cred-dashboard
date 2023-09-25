import { Text, Flex, Box } from '@chakra-ui/react'

type FeedBackProps = {
    name: string
    date: string
    message: string
}

export const Feedback: React.FC<FeedBackProps> = ({ name, date, message }) => {
    return (
        <Box borderRadius={'md'} shadow={'md'} p={6}>
            <Flex>
                <Box borderRadius={'lg'} p={4} bg={'gray.300'} />
                <Text ml={6} fontWeight={'bold'} color={'gray.500'} fontSize={'xs'}>{name}</Text>
                <Text color={'gray.500'} ml={'auto'} fontSize={'xs'}>{date}</Text>
            </Flex>
            <Text color={'gray.500'} textAlign={'justify'} mt={3} ml={14} fontSize={'xs'}>{message}</Text>
        </Box>
    )
}

export default Feedback