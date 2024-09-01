import React from 'react'
import './courses.css'
import { Container, Row, Col } from 'reactstrap'

const coursesData = [
  
    {
        icon: 'ri-nodejs-line',
        title: 'Node Js',
    },

    {
        icon: 'ri-git-pull-request-line',
        title: 'Git Commands',
    },

    {
        icon: 'ri-reactjs-fill',
        title: 'Reactjs',
    },

    {
        icon: 'ri-html5-line',
        title: 'HTML, CSS, JS',

    },

    {
        icon: 'ri-terminal-box-line',
        title: 'C++ with DSA',
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'C language',
    },
]

const Courses = () => {
    return <section className="courses">
        <Container>
            <Row>
                <Col lg='12' className='courses__top mb-5'>
                    <h6>Features</h6>
                    <h2>What courses have I studied</h2>
                </Col>

                {
                    coursesData.map((item, index) => (
                        <Col lg='4' md='6' sm='6' key={index} className='course__div mb-5'>
                            <div className="single__courses">
                                <span className="course__icon">
                                <i class={item.icon}></i>
                                </span>

                                <h2>{item.title}</h2>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
}

export default Courses