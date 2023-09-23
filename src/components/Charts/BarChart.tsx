import { Box } from '@chakra-ui/react'
import { Area, XAxis, YAxis, CartesianGrid, Tooltip, 
    ResponsiveContainer, ComposedChart, Legend, Bar
} from 'recharts';

export const BarChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return (
    <Box width={'100%'} height={'235px'} position={'relative'} mt={100}>
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
        <Area type="monotone" dataKey="amt" fill="#4FD1C5" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#1F243B"  stroke="#8884d8" />
      </ComposedChart>
    </ResponsiveContainer>
  </Box>
  )
}

export default BarChart