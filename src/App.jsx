import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from '../Pages/Home'
import { Contacto } from '../Pages/Contacto'
import { Sobremi } from '../Pages/Sobremi'
import { Planes } from '../Pages/Planes'
import { PlanDetail } from '../Components/planDetail'
import { Compra } from '../Components/Compra'
import { Layout } from '../Components/layout'
import { Footer } from '../Pages/Footer.jsx'
import ScrollToTop from '../Components/ScrollToTop.jsx'

function App() {
  
  return (
  <> <ScrollToTop />
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="sobremi" element={<Sobremi />} />
      <Route path="planes" element={<Planes />} />
      <Route path="planes/:id" element={<PlanDetail />} />
      <Route path="comprar/:id" element={<Compra />} />
      <Route path="contacto" element={<Contacto />} />
    </Route>
    </Routes>
    <Footer />
  </>
  )
}

export default App
