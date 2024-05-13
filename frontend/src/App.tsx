//import { useState } from 'react'
import './App.css'
import Books from './components/Books'
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
        <Books />
      </section>
     </div>
    </>
  )
}

export default App
