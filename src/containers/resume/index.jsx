import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import data from './utils';
import './style.scss';

const Resume = () => {
    return (
        <section id='resume' className='resume'>
            <PageHeader
                headerText="Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='timeline'>
                <div className='timeline_experience'>
                    <h3 className='timeline_experience_heading'>
                        Experience
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='var(--blue-theme-main-color)'
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline_experience_timelineElement'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--black-text-color)',
                                        border: '1.5px solid var(--blue-theme-main-color)',
                                        boxShadow: 'none'
                                    }}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        boxShadow:'0 0 0 4px #2770CC,inset 0 1px 0 rgba(0,0,0,.3),0 0 10px 5px rgba(0,0,0,.3)',
                                        background: '#EBF5FE',
                                        color: 'var(--blue-theme-main-color)'
                                    }}
                                    contentArrowStyle={{
                                        display: 'none'
                                    }}
                                >
                                    <div className='timelineElement_titleWrapper'>
                                        <h3 className='timelineElement_title'>{item.title}</h3>
                                        <h4 className='timelineElement_company'>{item.company}</h4>
                                        <p className='timelineElement_description'>{item.description}</p>
                                    </div>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className='timeline_education'>
                    <h3 className='timeline_education_heading'>
                        Education
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='var(--blue-theme-main-color)'
                    >
                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline_experience_timelineElement'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--black-text-color)',
                                        border: '1.5px solid var(--blue-theme-main-color)',
                                        boxShadow: 'none'
                                    }}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        boxShadow:'0 0 0 4px #2770CC,inset 0 1px 0 rgba(0,0,0,.3),0 0 10px 5px rgba(0,0,0,.3)',
                                        background: '#EBF5FE',
                                        color: 'var(--blue-theme-main-color)'
                                    }}
                                    contentArrowStyle={{
                                        display: 'none'
                                    }}
                                >
                                    <div className='timelineElement_titleWrapper'>
                                        <h3 className='timelineElement_title'>{item.title}</h3>
                                        <h4 className='timelineElement_company'>{item.timeline}</h4>
                                        <p className='timelineElement_description'>{item.degree}</p>
                                    </div>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}

export default Resume;