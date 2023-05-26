import React from 'react'
import Nav1 from './Units/Nav1';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Additem from './Pages/Additem';
import Login from './Pages/Login';



export default function App() {
  return (
    <div>
      <Nav1></Nav1>
<h1 className ='text-center'></h1>

<>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<Additem />} />
          <Route path="/Login" element={<Login />} />
       </Routes>
    </>

    </div>
  )
}
