import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {Dashboard, Company} from '../pages/dashboard/'

const PublicRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/company' element={<Company/>} />
    </Routes>
  )
}

export default PublicRoutes;
