import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './pages/UserLayout'
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App