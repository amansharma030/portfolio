import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../assets/css/portfolio.css"



const Experience = () => {
    return (
        <div className='experience-cover'>
            <div className='experience-years'>
                3 Years of Experience
            </div>
            <div class="experience-list">
                <div class="experience-roles">
                    <div class="experience-role">
                        <strong>Module Lead (Frontend)</strong>
                        <div>Jul/2024 - present</div>
                    </div>
                    <div>
                        <h5>CAREERS360</h5>
                    </div>
                </div>
                <div class="experience-roles">
                    <div class="experience-role">
                        <strong>Frontend Developer</strong>
                        <div>Sept/2021 - Jul/2024</div>
                    </div>
                    <div>
                        <h5>CAREERS360</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience