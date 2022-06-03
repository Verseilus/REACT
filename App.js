import React from 'react'
import Contact from './Contact.js'
import Home from './Home.js'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}