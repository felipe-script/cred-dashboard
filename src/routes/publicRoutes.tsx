import React from "react"
import { Routes, Route } from "react-router-dom"
import { Text } from '@chakra-ui/react'
import { Dashboard, Financial } from '../pages/dashboard/'
import { DashBoardLayoutLayout } from '../layouts/'

const PublicRoutes: React.FC = (): React.ReactElement => {

  const AgroComponent = <Text left={'50%'} transform={'translateX(-50%)'} bg={'gray.50'} position={'absolute'} top={400}>Agronomy under construction</Text>

  return (
    <Routes>
      <Route element={<DashBoardLayoutLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/financial' element={<Financial />} />
        <Route path='/agro' element={AgroComponent} />
      </Route>
    </Routes>
  )
}

export default PublicRoutes;
