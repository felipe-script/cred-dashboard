import React from "react"
import { Routes, Route } from "react-router-dom"
import { Dashboard, Financial } from '../pages/dashboard/'
import { DashBoardLayoutLayout } from '../layouts/'

const PublicRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route element={<DashBoardLayoutLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/financial' element={<Financial/>} /> 
      </Route>
    </Routes>
  )
}

export default PublicRoutes;
