import React from 'react'
import './Resume.css'

const Resume = props => {
  return (
    <div className='body'>
      <div class='ResumeTitle'>
        Resume
      </div>
      <div className='ResumePage'>
        <p class='Name'>Austin Sauer</p>
        <p class='SectionTitle'>Professional Summary</p>
        <p class='Paragraph'>
          Austin Sauer is a graduate of MTSU with a degree in Pre-Medical Biology. Through Cook Systems, he has become a skilled associate developer with a strong background in Java and Javascript. He has shown the skills and drive to learn any language, tool, or environment necessary to make him a valuable member of any team. Austin's skills in development and troubleshooting paint him as a tenacious learner who will go above and beyond the minimum requirement if given the opportunity. He has achieved a productive level of knowledge in many Java and Javascript frameworks including: Spring, Hibernate, JDBC, and React. Austin would be an adaptive, positive, and diligent member of any team he becomes integrated with.
          {' '}
        </p>
        <p class='SectionTitle'>Technical Skills</p>
        <ul>
          <li>
            <strong>Programming:</strong>
            {' '}
            Java 8, JavaScript (ES2015+), HTML5, CSS3, SQL, XML, SpringBoot,                       Spring MVC, JDBC, JAXB, Jackson, JPA, JQuery,
            NodeJS, Webpack, Babel, Maven, NPM, Yarn{' '}
          </li>
          <li>
            <strong>Software:</strong>
            {' '}
            Eclipse Neon, VS Code, Git, GitHub, GitKraken, cmder, PGAdmin
          </li>
          <li><strong>RDBMS:</strong> PostgreSQL</li>
          <li>
            <strong>Operating Systems:</strong>
            {' '}
            Windows, mysysgit (Linux Environment Emulation)
          </li>
        </ul>
        <p class='SectionTitle'>Professional Experience</p>
        <p>Cook Systems – Nashville, TN 10/18 – Present</p>
        <p class='Italics'>FastTrack’D Developer</p>
        <p class='Italics'>Java SmartShare XML File Transfer Assessment:</p>
        <ul>
          <li>
            Constructed a multithreaded server which could handle multiple client requests to gather stock information and return a string for the client to see, while also saving an XML file to their device.
          </li>
          <li>
            Used the JAXB Framework in Eclipse to read and write files, annotating Java objects with XML annotations.
          </li>
          <li>
            Implemented a system of sockets on both the client and server that could communicate to send XML files using JAXB
          </li>
        </ul>
        <p class='Italics'>
          Environment: Java, Eclipse, JAXB Framework
        </p>
        <p class='Italics'>"Tweeter" Social Media Clone Assessment:</p>
        <ul>
          <li>
            Implemented a storage system for user data, as well as properties relating to "tweets", including timestamps, retweets, and replies.
          </li>
          <li>
            Engineered a system of controllers, mappers, and services ensuring that a user could be created, and their data would be retained.
          </li>
          <li>
            Worked with swagger and postman to interact with and test the project's individual sections
          </li>
        </ul>
        <p class='Italics'>Environment: Java, Eclipse, Postman, swagger</p>
        <p class='Italics'>Github account Dev-Duel Assessment:</p>
        <ul>
          <li>
            Used the axios library to pull user data from the Github database
          </li>
          <li>
            Applied mapping techniques to format the raw data to a specific format and marry it with CSS and HTML on the webpage
          </li>
          <li>
            Devised a a scoring system to match the specified developers and determine a victor
          </li>
          <p class='Italics'>Environment: </p>
        </ul>
        <p>
          Pro-Pack Inc. – McMinnville, TN                                                                            01/18 – 07/18
          {' '}
        </p>
        <p class='Italics'>Table lead </p>
        <ul>
          <li>
            Trained 5+ employees to comply with safety guidelines and manufacture quality products
          </li>
          <li>
            Led teams of 2-5 on large specialty projects{' '}
          </li>
          <li>
            Constructed shipping materials including crates, pallets, and skids
          </li>
          <li>
            Loaded delivery trucks and maintained the shop yard via forklift
          </li>
          <li>
            Responsible for cleaning and repairing industrial equipment alongside the safety and maintenance officer.
            {' '}
          </li>
        </ul>
        <p>
          NHC Healthcare – Smithville, TN                                                                            06/15 – 01/18

        </p>
        <p class='Italics'>
          Therapy Technician
        </p>
        <ul>
          <li>
            Assisted Patients with mobility and recovery plans and exercises
          </li>
          <li>
            Prepared and delivered patients to their Therapy appointments where I would continue to assist the therapist
          </li>
          <li>
            Maintained and repaired therapy equipment
          </li>
          <p class='Italics'>Traveling CNA </p>
          <li>
            Travelled to underperforming NHC centers to train or retrain classes of Nursing Assistants to prepare them for certification exams
          </li>
          <li>
            Retrained underperforming employees to maximize productivity, efficiency, and level of care
          </li>
          <li>
            Assisted understaffed NHC branches across Tennessee from week to week
          </li>
          <p class='Italics'>
            Certified Nursing Assistant
          </p>
          <li>
            Trained 20+ new employees in the care and assistance of elderly and recovering patients
            {' '}
          </li>
          <li>
            Cared for the needs of patient groups ranging from 5 to 30{' '}
          </li>
          <li>
            Assisted patients with daily needs such as personal care, meals, and mobility
          </li>
          <li>
            Worked with the nursing staff to ensure all patients were cared for according to their personal care plan for maximum recovery and comfort.
          </li>
        </ul>
        <p>
          Applebee’s – Knoxville, TN                                                                                     10/14 – 05/15
          {' '}
        </p>
        <p class='Italics'>Host</p>
        <ul>
          <li>
            Trained 5+ employees for the position of host and server
          </li>
          <li>
            Managed the seating and rotation of server tables to ensure optimal server to customer ratios
          </li>
          <li>
            Managed and resolved customer complaints and issues
          </li>
          <li>
            Cleaned and maintained the front and back of house areas
          </li>
        </ul>
        <p class='SectionTitle'>Education</p>
        <p>
          Cook Systems FastTrack’D Java Program – Nashville, TN
          10/18 – 12/18
        </p>
        <p class='Italics'>
          Concentrated Java Frameworks and developer tools training
        </p>
        <p>
          Middle Tennessee State University – Murfreesboro, TN
          08/15 – 12/17{' '}
        </p>
        <p class='Italics'>
          Bachelors of Arts and Sciences in Premedical Biology
        </p>
      </div>
      <div className='ResumeLink'>
        <form action='https://docs.google.com/document/d/1kzuSei9s5oHSbfwpi-WU74CPUEwUjVkqKQsCanA2Eeg/edit'>
          <input type='submit' value='Resume Link' />
        </form>
      </div>
    </div>
  )
}
export default Resume
