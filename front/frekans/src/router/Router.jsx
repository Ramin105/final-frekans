import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router'

import Home from '../pages/home/Home'
import Layout from '../components/layout/Layout'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Router