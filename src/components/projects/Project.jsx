import React from 'react'
import './project.css'

import { Container, Row, Col } from 'reactstrap'
import gym_app from '../../assets/gym_app.png'
import notes_app from '../../assets/noted_app.png'
import dalle_clone from '../../assets/dalle_clone.png'


const projectData = [
    {
        image: dalle_clone,
        title: 'Dalle Clone',
        url: 'https://github.com/Shreya327/dalle-e'
    },
    {
        image: notes_app,
        title: 'Notes App',
        url: 'https://github.com/Shreya327/notes_app'
    },
    {
        image: gym_app,
        title: 'GYM App',
        url: 'https://github.com/Shreya327/gym_app'
    },
];

const Project = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='project__top mb-4'>
                <h6>Explore my projects and give feedback</h6>
                <h2>Projects</h2>
            </Col>

            {
                projectData.map((item, index) => (
                    <Col lg='4' md='6' sm='6' key={index} className='col'>
                        <div className="project__card">
                            <div className="project__img">
                                <img src={item.image} alt="" className='w-100'/>
                            </div>

                            <div className="project__content">
                                <div className="content__top">
                                    <h5>{item.title}</h5>
                                    <a href={item.url}>View Repo</a> 
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  </section>
}

export default Project


