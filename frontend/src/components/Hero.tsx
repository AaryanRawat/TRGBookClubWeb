import './Hero.css'

const Hero = () => {
  return (
    <div className='heroContainer'>
        <h1>The Reading Geese Book Club</h1>
        <div className='heroPanel'>
            <span><h2>A community for readers, by readers!</h2></span>
            <span>
            Come join us for:
            <ul>
                <li>Weekly meetings about books and other media!</li>
                <li>Buddy reading and discussing your favorite books!</li>
                <li>Voting on which books to read next!</li>
                <li>Fun events like author meetups and book exchanges!</li>
            </ul>
            </span>
        </div>
    </div>
  )
}

export default Hero