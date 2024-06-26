import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaSlack, FaTrello, FaFigma, FaUnity } from 'react-icons/fa';
import { SiAdobephotoshop, SiAutodeskmaya } from 'react-icons/si';
import { VscVscodeInsiders } from "react-icons/vsc";
import skillData from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './style.scss';

const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <PageHeader
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='skills_content'>
                {
                    skillData.map((item, i) => (
                        <div key={i} className='skills_content_innerContent'>
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0px)'
                                }}
                            >
                                <h3 className='skills_content_innerContent_categoryHead'>{item.label}</h3>
                                <div className='skills_content_innerContent_progressBarContainer'>
                                    {
                                        item.data.map((skillItem, j) => (
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity : 1", "opacity : 0"]}
                                                iterationCount={1}
                                            >
                                                <div className='progressBar' key={j}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line
                                                        percent={skillItem.percentage}
                                                        strokeWidth="4"
                                                        strokeColor="var(--blue-theme-main-color)"
                                                        trailWidth="4"
                                                        strokeLinecap='square'
                                                    />
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div>
            <div className='skills_toolkit'>
                <div className='skills_toolkit_content'>
                    <h3 className='skills_toolkit_content_header'>ToolKit</h3>
                    <div className='skills_toolkit_content_icons'>
                        <FaSlack size={60} color='var(--blue-theme-main-color)' />
                        <FaTrello size={60} color='var(--blue-theme-main-color)' />
                        <FaUnity size={60} color='var(--blue-theme-main-color)' />
                        <FaFigma size={60} color='var(--blue-theme-main-color)' />
                        <SiAdobephotoshop size={60} color='var(--blue-theme-main-color)' />
                        <SiAutodeskmaya size={60} color='var(--blue-theme-main-color)' />
                        <VscVscodeInsiders size={60} color='var(--blue-theme-main-color)' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;