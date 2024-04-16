//import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <div className='appContainer'>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <h1>Section 2</h1>
      </section>
     </div>
    </>
  )
}

export default App
