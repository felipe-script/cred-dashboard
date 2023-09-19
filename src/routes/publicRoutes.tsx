import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {Dashboard} from '../pages/dashboard'

const PublicRoutes: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/dash' element={<h1>dash</h1>} />
    </Routes>
  );
}

export default PublicRoutes;
