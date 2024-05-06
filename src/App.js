import './App.scss';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import ParticlesDec from './utils/ParticlesDec';
import Options from './utils/particleOptions';
// import particleOptions from './utils/particleOptions';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import NavBar from './components/navBar';

function App() {

  const location = useLocation();
  console.log(location);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      //await loadBasic(engine);
    });
  }, []);

  const renderParticles = location.pathname === "/";

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // if(init){
  //   return(
  //       <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particles}/>

  //   )
  // }

  // console.log(Options);
  // console.log(ParticlesDec) ;

  return (
    <div className="App">
      {/* particles js */}
      {
        renderParticles &&
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={Options} />
        // <ParticlesDec />
      }




      {/* navbar */}
      <NavBar />

      {/* main page content */}
      <div className='App_main-container'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
