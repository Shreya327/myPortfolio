import React from 'react'
import './skills.css'

const frontendSkills = [
    {
        title: 'Javascript',
      
    },
    {
        title: 'HTML',
      
    },
    {
        title: 'CSS',
        
    },
    {
        title: 'OOPS',
        
    },
    {
        title: 'Operating System',
        
    },
]

const backendSkills = [
    {
        title: 'Node Js',
        
    },
    {
        title: 'Express.js',
        
    },
    {
        title: 'MongoDB',
        
    },
]

const Skills = () => {
    return <div className="skills__wrapper d-flex gap-5">
        <div className="frontend__skills w-50">
            {
                frontendSkills.map((item, index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    />
                ))
            }
        </div>

        <div className="backend__skills w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    />
                ))
            }
        </div>
    </div>
};

const SkillItem = ({title}) => {
    return <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
           
        </div>

    </div>
};

export default Skills