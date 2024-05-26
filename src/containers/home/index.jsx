import React from 'react';
import './style.scss';
import { FaLinkedin } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {

    // const navigate = useNavigate();

    // const toContact = () => {
    //     navigate('/contact')
    // }

    return (
        <section id='home' className='home'>
            <div className='home_text-wrapper'>
                <h1>
                    Hello, I'm Wasif Karim
                    <br />
                    A Front-end Developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
                transform : 'translateY(550px)'
            }}
            end={{
                transform : 'translateX(0px)'
            }}
            >
                {/* <div className='home_contact-me'>
                    <button onClick={toContact}>Hire Me</button>
                </div> */}
                <a className='home_contact-me' href='https://www.linkedin.com/in/wasif-karim-b25985175/' target='_blank'>
                    <FaLinkedin size={60} color='var(--blue-theme-main-color)'/>
                </a>
            </Animate>
        </section>
    )
}

export default Home;