import './App.css';
import Nav from './container/Nav';
import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';
import { useMediaQuery } from 'react-responsive'
import React from 'react';

function App() {
  const isPc = useMediaQuery({query : "(min-width:1024px)"});
  const isTablet = useMediaQuery({query : "(min-width:768px) and (max-width:1023px)"});
  const isMobile = useMediaQuery({query : "(max-width:767px)"});

  const [view, setView] = React.useState('')
  const [menu, setMenu] = React.useState(false)

  React.useEffect(()=>{
    if(isPc) setView("pc")
    else if(isTablet) setView("tablet")
    else setView("mobile")
  }, [isPc, isTablet, isMobile])

  return (
    <div className="App">
      <nav className='navbar row no-margin'>
        <div className={`nav container ${view}`}>
          <div className='navbar-brand'>
            <a className="font" href="https://cst9221.github.io/portfolio/">을왕라</a>
            <div className={`nav-menu ${view}`} onClick={()=>setMenu(!menu)}>
              <svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="rgb(146, 146, 146)" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" transform="translate(0 -40)"></path></svg>
            </div>
          </div>

          <ul className={`navbar-collapse navbar-right ${view}`}>
            <li className='nav-item'>
              <a href="#about" className='font'>ABOUT</a>
            </li>
            <li className='nav-item'>
              <a href="#project" className='font'>PROJECT</a>
            </li>
            <li className='nav-item'>
              <a href="#contact" className='font'>CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <header className="header row" >
        <div className={`container ${view}`}>
          <div className={`i-rect ${view}`}>
            <img id="i-profile" src="https://media.vlpt.us/images/chltmdxo3/profile/dc7db97c-e812-475a-9aec-be5c4e53bbc2/KakaoTalk_Photo_2021-07-07-23-53-40.jpeg?w=240"/>
          </div>
          <div >
            <h1>최승태</h1>
            <h3>FrontEnd Developer</h3>
          </div>
        </div>
      </header>
      
      <main className="row">
        <section className={`container ${view}`}>
            <h2>About</h2>

        </section>
        <section className={`container ${view}`}>
          <h2>Web</h2>

        </section>
        <section className={`container ${view}`}>
          <h2>Application</h2>

        </section>
      </main>

      <footer className="row">
        <div className={`container ${view}`}>
          <h2>Contact</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
