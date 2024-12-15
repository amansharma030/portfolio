import React from 'react'
import "../assets/css/portfolio.css"
import profileImage from "../assets/images/profileImage.png"

const Header = () => {
  return (
    <>
      <div className='portfolio-image-cover'>
        <div className='portfolio-intro'>
          <div class="content">
            <div class="content-tertiary">
              <p><span>✌🏻</span> Hi there! I'm Aman Sharma</p>
            </div>
            <div class="content-primary">
              <h1>A passionate <span>Frontend Developer</span>
               </h1>
            </div>
            <div class="content-secondary">
              <p>I am a Frontend Developer with more than three years of experience. Recognized as a practical and effective developer,
                experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and
                within budget.
              </p>
            </div>
          </div>
          <div className='portfolio-profile-img'>
            <img src={profileImage} alt="portfolio-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header