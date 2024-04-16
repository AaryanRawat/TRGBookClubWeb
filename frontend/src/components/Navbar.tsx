import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='navbarPanel'>
        <div>
            <span>TRG</span> {/*Insert TRG logo here*/}
        </div>
        <div className='linksContainer'>
            <span>Instagram</span>
            <span>Discord</span>
            <span>Spotify</span> {/*Insert logos for all of these*/}
        </div>
        </div>
    </div>
  )
}

export default Navbar