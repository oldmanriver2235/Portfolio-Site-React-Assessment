import React from 'react'
import './AboutMe.css'

const AboutMe = props => {
  return (
    <div className='body'>
      <div class='PageTitle'>
        About Me
      </div>
      <img className='Selfie' src={require('./images/selfie1.jpg')} />
      <div className='AboutMePage'>
        <p className='paragraph'>
          {' '}
          In short, I'm from Warren County Tennessee. In high school I played tennis, ran triathalon studied bushcraft and majored in biology. During college I studied Pre-Medical Biology at Lee University, UT Knoxville, and MTSU. My passions are survival camping, carpentry, and tinkering when I'm not working and problem solving when I am. I spent many years working in healthcare as a Nurses Assistant, Therapy Assistant, and a travelling instructor. During and after working in healthcare I worked as a lead carpenter leading a team to build large and small scale wooden and metal. After carpentry I stumbled into the interesting world of computer programming after a recomendation from a friend. I started with a Udemy course in JavaScript and after a few frustrating days of learning how to "crawl" I was hooked. Since then, I've learned so much that after only 6 weeks in this course I already feel like a different person in reference to my depth of knowledge in the computer world as well as my interest in it.
          {' '}
          {' '}
        </p>
      </div>
    </div>
  )
}
export default AboutMe
