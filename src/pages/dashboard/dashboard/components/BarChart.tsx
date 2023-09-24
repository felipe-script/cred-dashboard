import { Box, Heading } from '@chakra-ui/react'
import {
  Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, Legend, Bar
} from 'recharts';
import { BarChartType } from '../../../../types'

type BarChartProps = {
  data: BarChartType[]
  title: string
}
export const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  return (
    <Box width={'100%'} height={'235px'} position={'relative'} mt={100}>
      <Heading fontSize={'md'} ml={3} mb={3}>{title}</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#4FD1C5" stroke="#4FD1C5" />
          <Bar dataKey="pv" barSize={20} fill="#1F243B" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default BarChart