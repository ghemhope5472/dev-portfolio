import './App.css';
import { MdSegment } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
// MdSegment
// BsLinkedin

function App() {
  return (
    <div className='main'>
      <div className='main__top'>
        <div className='main__logo'>
          <h3>Glenn Malalis</h3>
          <p> Front End Developer </p>
        </div>
        <nav className='main__menu-btn'>
          <MdSegment size={35} />
        </nav>
      </div>
      <div className='main__hero'>
        <div className='main__hero-initial'> <img className='main__hero-image' src='/images/profile.png' /></div>
        <div className='main__hero-text'>
          <h2> Hello, It's me!  </h2>
          <h1> Glenn Malalis </h1>
          <p>Front End Developer </p>
          <div className='main__hero-social'>
            <span className='hero__social__links'> <BsLinkedin /> linkedin/in/ghemhope </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
