import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss'
import { DiAndroid, DiReact } from 'react-icons/di'
import { FaDatabase, FaDev } from 'react-icons/fa'

const About = () => {

    const personalData = [
        {
            label: "Name",
            value: "Wasif Karim"
        },
        {
            label: "Age",
            value: "24"
        },
        {
            label: "Location",
            value: "Lahore, Pakistan"
        },
        {
            label: "Email",
            value: "wasif.karim@hotmail.com"
        },
        {
            label: "Contact No",
            value: "+92 341 1749588"
        },
        {
            label: "Alternate Contact",
            value: "+92 324 0230759"
        },
    ]

    const summary = `Dynamic developer with a knack for creating engaging user experiences using React.js. Proven ability to enhance application
    architecture, drive efficient solutions to technical debt, and advocate for test-driven development. Ready to collaborate and innovate
    in agile settings with cutting-edge technologies.`


    return (
        <section id='about' className='about'>
            <PageHeader
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about_content'>
                <div className='about_content_personalInfo'>
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(-500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{summary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3 className='personalDataHeader'> Personal Details</h3>
                        <ul>
                            {
                                personalData.map((item, i) => (
                                    <li key={i}>
                                        <span className='item'>{item.label}</span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about_content_services'>
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className='about_content_services_content'>
                            <div>
                                <FaDev size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <DiReact size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section >
    )
}

export default About;