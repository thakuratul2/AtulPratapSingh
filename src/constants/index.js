import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,

    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
  
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
  
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Website Developer Intern",
        company_name: "The Sparks Foundation",
        date: "January 2022 - March 2022",
        points: [
            "I gained practical experience in front-end technologies such as HTML, CSS, JS.",
            "Collaborated with cross-functional teams of developers and designers to contribute to the developement of responsice and user-friendle educational and e-commerce websites."
        ],
    },
    {
        title: "Mentor",
        company_name: "BR SoftSol",
        date: "April 2022 - October 2022",
        points: [
            "Assisted students in learning concepts of technical writing.",
            "Conducted doubt resolution sessions, addressing over 100+ queries and maintaining an average rating of 4.5."
        ],
    },
    
];

export const socialLinks = [
   
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Swatipa28',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/swati-paliwal/',
    }
];

export const projects = [
    {
        
        name: 'EDUBUZZ',
        description: "An educational website that caters to the academic needs of students in Engineering Domain using basic Frontend Technologies. Implemented user-friendly navigation and intuitive UI/UX design on the EduBuzz platform, facilitating seamless access to DBMS, OS, and various subject materials. Developed educational resources for different programming languages such as C, C++ etc.",             
    },
    {
       
        name: 'ATM SIMULATOR',
        description: 'Developed an ATM simulator project to simulate real-world ATM interactions. Developed a basic ATM simulator using Java, enabling users to simulate common ATM transactions and interactions in a user-friendly command-line interface. Used different concepts of core java for smooth implementation.',
    },
    {
        name: 'WEATHER APP',
        description: 'Creating Weather App in Flutter. Created a weather app from the OpenWeatherAPI data by making an HTTP request to API using GETX. Created a model for storing data and using the models on our screen, and used a lot of best practices that should be taken into consideration while working on complex projects',
    },
    
];