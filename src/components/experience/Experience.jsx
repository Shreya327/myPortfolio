import React from 'react';
import './experience.css';
import { Container, Row, Col } from 'reactstrap';

const experianceData = [
    {
        organisation: 'Amazon Hyd',
        time: 'July 2024 - December 2024',
        type: 'Internship',
        role: 'Student Intern',
        text: 'As an intern at Amazon in the CS Concessions Execution team, I led the cleanup of a Weblab implemented in November 2023, ensuring a smooth transition to production. I spearheaded the migration of services from AAA to CloudAuth, enhancing authentication and security by integrating security keys and successfully deploying the changes. Additionally, I improved the customer service experience by displaying return reasons to Customer Service Associates. My work involved utilizing skills in Java, TypeScript, Git, testing, and debugging.'
    }
];

const Experience = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='experience__col'>
                        <h2>Experience</h2>
                    </Col>

                    <Col lg='6'>
                        <div className="single__experience-container">
                            {experianceData.map((item, index) => (
                                <div className="single__experience" key={index}>
                                    <span className='experience__icon'><i className="ri-briefcase-line"></i></span>
                                    <h4>{item.organisation}</h4>
                                    <h6>{item.time}</h6>
                                    <h6>{item.type}</h6>
                                    <h5>{item.role}</h5>
                                    <h6>{item.text}</h6>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;


