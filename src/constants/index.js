import angular from '../assests/images/tech/angular.png';
import reactjs from '../assests/images/tech/reactjs.png';
import aws from '../assests/images/tech/aws.png';
import css from '../assests/images/tech/css.png';
import docker from '../assests/images/tech/docker.png';
import git from '../assests/images/tech/git.png';
import html from '../assests/images/tech/html.png';
import java from '../assests/images/tech/java.png';
import javascript from '../assests/images/tech/javascript.png';
import mongodb from '../assests/images/tech/mongodb.png';
import mysql from '../assests/images/tech/mysql.png';
import nodejs from '../assests/images/tech/nodejs.png';
import typescript from '../assests/images/tech/typescript.png';
import redux from '../assests/images/tech/redux.png';
import springboot from '../assests/images/tech/springboot.png';
import python from '../assests/images/tech/python.png';
import work from '../assests/images/work.png';
import student from '../assests/images/student.png';

const technologies = [
  {
    text: 'HTML',
    imgName: html
  },
  {
    text: 'CSS',
    imgName: css
  },
  {
    text: 'JavaScript',
    imgName: javascript
  },
  {
    text: 'ReactJS',
    imgName: reactjs
  },
  {
    text: 'Redux',
    imgName: redux
  },
  {
    text: 'Node.js',
    imgName: nodejs
  },
  {
    text: 'TypeScript',
    imgName: typescript
  },
  {
    text: 'Angular',
    imgName: angular
  },
  {
    text: 'Python',
    imgName: python
  },
  {
    text: 'Java',
    imgName: java
  },
  {
    text: 'Spring Boot',
    imgName: springboot
  },
  {
    text: 'AWS',
    imgName: aws
  },
  {
    text: 'Docker',
    imgName: docker
  },
  {
    text: 'MongoDB',
    imgName: mongodb
  },
  {
    text: 'MySQL',
    imgName: mysql
  },
  {
    text: 'GIT',
    imgName: git
  },
];

const linkedin = 'https://www.linkedin.com/in/pankti-shah92/';
const github = 'https://github.com/PS8924';
const emailid = 'shahpankti1188@gmail.com';


const workdetails = [
  {
    title: "Software Engineer",
    company_name: "Abecedarian, LLC.",
    location: "Remote, USA",
    icon: work,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: ["Leading the development of front-end Humanitarians AI, Building user interfaces using ReactJS, TypeScript, Material UI ensuring seamless integration with Figma prototypes.",
      "Contributing to the development & deployment of REST APIs in python and GCP"
    ],
  },
  {
    title: "Full-stack developer co-op",
    company_name: "STAT health Inc.",
    location: "Boston, MA",
    icon: work,
    iconBg: "#E6DEDD",
    date: "June 2022 - Dec 2022",
    points: [
      "Automated manual process via user management Node.js microservices, integrating multi-device user registration through AWS Cognito, Amplify, DynamoDB, S3, Lambda, GitHub Actions. Achieved 60% improved efficiency and scalability",
      "Worked closely with product manager at a startup to develop a mobile application for visualizing data, collected by the discreet in-ear wearable device. Employed React Native, TypeScript for intuitive, engaging real-time user interfaces (UI)",
      "Architected and deployed an event-driven data pipeline, achieving a 40% faster conversion of raw parquet data to JSON data",
      "Contributed to Continuous Integration deployments CI/CD using Git Version Control Systems for standardized development workflow",
    ],
  },
  {
    title: "Master of science, Information systems",
    company_name: "Northeastern University",
    location: "Boston, MA, USA",
    icon: student,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2023",
    points: [
      "pursuing masters from NEU to enhance my skills"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Atyantik Technologies pvt ltd.",
    location: "Vadodara, India",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Aug 2021",
    points: [
      "Played a key role for front-end team, providing technical direction and mentorship in ReactJS & Redux, facilitating professional growth through regular code reviews and feedback sessions",
      "Collaborated with cross-functional teams, backend team, UI/UX designers throughout the SDLC, ensuring seamless front-end and backend integration. Participated in design discussion for cohesive user experience in a fast-paced agile environment",
      "Initiated development of a scalable, reusable ReactJS code components library by cataloging in Storybook for documentation",
      "Accomplished API design utilizing GraphQL, Node.js enhancing data retrieval efficiency by 20%",
      "Ensured high code quality and testability with Unit testing tools like Cypress and Jest. Optimized app size by 30%, improving performance, reducing load times through code refactoring, caching, debugging and problem solving"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Novumlogic technologies pvt ltd.",
    location: "Vadodara, India",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Apr 2018 - Jan 2020",
    points: [
      "Led the development of a fleet management mobile application (Android & iOS) that logs and visualizes real-time vehicle location data on Google Maps. Utilized React Native, Redux, Node.js, and GPS loggers. Tracked timeline through Jira",
      "Improved app performance by 30%, utilizing asynchronous programming, using Promises and Event Emitters to eliminate callback loops",
      "Built a real-time push notification framework with Firebase (Firebase cloud messaging service) that reduced server overhead by 80%",
      "Optimized application performance by reducing bundle size by 4MB using Webpack bundler, resulting in a 30% decrease in build time",
      "Built RESTful APIs endpoints using Spring Boot to extract data from MySQL database, applied object-oriented principles (OOP)",
      "Enhanced backend system security and scalability by Integrating OAuth, JWT authentication layer to Spring Boot REST APIs"
    ],
  },
  {
    title: "Front end developer",
    company_name: "Siya Technologies",
    location: "Vadodara, India",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Nov 2016 - Jan 2018",
    points: [
      "Implemented & maintained seat booking dashboard using HTML5, CSS3, JavaScript ES6, jQuery, Bootstrap",
      "Integrated AJAX calls into an E-commerce website, enhancing real-time customer engagement",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bonafide Research and marketing Pvt Ltd",
    location: "Vadodara, India",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Apr 2015 - Dec 2015",
    points: [
      "Designed and developed responsive company web application with HTML5, CSS3, CSS media queries, JavaScript",
      "Utilized debugging tools like Chrome DevTools, reducing bug reports by 20%"
    ],
  },
  {
    title: "Bachelor of engineering, computer science",
    company_name: "Gujarat Technological University",
    location: "Vadodara, India",
    icon: student,
    iconBg: "#E6DEDD",
    date: "June 2010 - June 2014",
    points: [
      "pursuing Bachelor of engineering in computer science"
    ],
  },
];

export {technologies, linkedin, github, emailid, workdetails};