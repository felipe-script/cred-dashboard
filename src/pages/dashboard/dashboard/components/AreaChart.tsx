import { Box, Heading } from '@chakra-ui/react'
import {
  AreaChart as AreaChar, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';
import { AreaChartType } from '../../../../types'

type AreaChartProps = {
  data: AreaChartType[]
  title: string
}

export const AreaChart: React.FC<AreaChartProps> = ({ data, title }) => {

  return (
    <Box width={'100%'} height={'235px'} position={'relative'} mt={100}>
      <Heading fontSize={'md'} ml={3} mb={3}>{title}</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChar
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#000000" fill="#cccccc" />
        </AreaChar>
      </ResponsiveContainer>
    </Box>
  )
}

export default AreaChart