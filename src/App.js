import React, { useState } from 'react';
import './App.css';

function App() {
  // Sections for the interactive fields
  //
    /*


        const notableWorks = [
    { title: "RecogniChess", description: "A full-stack program for managing climbing trips, developed in a team of 6 using Agile methodologies. Features include booking hotels, equipment, hiring mountain guides, managing guides and equipment hired, and handling cancellations and refunds.", link: "https://github.com/your-recognichess-repo", paper: "link-to-your-paper" },
    { title: "ClimbSafe", link: "https://github.com/your-climbsafe-repo" },
    { title: "Game Genre Recommender", link: "https://github.com/your-game-genre-recommender-repo" }
  ];
     */

  const [showNotableWorks, setShowNotableWorks] = useState(false);
  const [showFullStackProjects, setShowFullStackProjects] = useState(false);
  const [showMachineLearning, setShowMachineLearning] = useState(false);
  const [showSignalsNetworks, setShowSignalsNetworks] = useState(false);
  const [showTechLang, setShowTechLang] = useState(false);


  const handleSectionClick = (toggleFunction) => (e) => {
    // Stops the click from propagating if it's on a link
    if (e.target.tagName === 'A') {
      e.stopPropagation();
    } else {
      toggleFunction();
    }
  };

const machineLearning = [
  {
    text: "As part of my minor in Applied AI, I have taken four graduate-level machine learning classes:",
    links: {
      "COMP 550: Natural Language Processing": "https://www.mcgill.ca/study/2023-2024/courses/comp-550",
      "COMP 551: Applied Machine Learning": "https://www.mcgill.ca/study/2023-2024/courses/comp-551",
      "ECSE 552: Deep Learning": "https://www.mcgill.ca/study/2023-2024/courses/ecse-552",
      "COMP 579: Reinforcement Learning": "https://www.mcgill.ca/study/2023-2024/courses/comp-579"
    }
  },
  "I have research experience in RL, Domain Adaptation, and NLP.",
  {
    text: "I developed an end-to-end pipeline for automated chess piece position annotation using domain adaptation techniques.",
    paperLink: "https://saif-shahin.github.io/public/RecogniChess.pdf",
    githubLink: "https://github.com/WassimJabz/RecogniChess/tree/main"
  }
];

const fullStackProjects = [
  {
    title: "Grocery Store System Simulator",
    description: "A full-stack Android web-app developed for a grocery store owner, in collaboration with a team of 5. The app manages employees, store branches, owners, and allows users to place orders for delivery and pickup.",
    technologies: ["Java", "Vue", "Javascript", "Gherkin", "UML"],
    agileMethodology: true,
    link: "https://github.com/McGill-ECSE321-Winter2022/project-group-group-01"
  },
  {
    title: "ClimbSafe",
    description: "A full-stack program for managing climbing trips, developed in a team of 6 using Agile methodologies. Features include booking hotels, equipment, hiring mountain guides, managing guides and equipment hired, and handling cancellations and refunds.",
    technologies: ["Java", "Gherkin", "UML", "JavaScript"],
    agileMethodology: true,
    pattern: "MVC (Model-View-Controller)",
    link: "https://github.com/F2021-ECSE223/ecse223-group-project-p16"

  },
  {
    title: "Game Genre Recommender",
    description: "A web application created using Node.js, recommending games tailored to users' personalities and gaming history.",
    technologies: ["Javascript", "Gherkin", "CSS", "HTML"],
    nodeJs: true,
    link: "https://github.com/shivamaery123/ECSE-428-Project"

  }
];


  const signalsAndNetworksPortfolio = [
    { title: "DNS Client", description: "I implemented a DNS client using sockets in Python" ,link: "https://github.com/tomoyasan17/DnsClient" }
  ];

  const technicalAndConversationalLanguages = {
    technical: ["C", "C#", "Java", "UML", "JavaFX", "Python", "HTML", "CSS", "Gherkin", "Bash", "VDHL", "OCaml", "ARM Assembly"],
    conversational: ["English", "Arabic"]
  };

  const miscellaneous = "VP Events of McRun (2023-Present); Founder of Abu Dhabi Talks Philosophy (2019-2020); Member of: McGill AI Society; GameDev McGill; HeforShe McGill";

  return (

    <div className="App">
  <header className="App-header">
    <h1 className="name"><span className="emoticon">:/</span> $ Saif Shahin</h1>
    <a href="mailto:saif.shahin@mail.mcgill.ca">
      <i className="fas fa-envelope icon"></i>
    </a>
    <a href="https://www.linkedin.com/in/saif-shahin-4826b1210/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin icon"></i>
    </a>
    <p className="professional-titles">
      Software Engineering Student &bull; Machine Learning Researcher &bull; VP Events McGill Running Club
    </p>
    <img src="https://saif-shahin.github.io/public/profilepic.jpg" alt="Saif Shahin" className="profile-pic" />
    <p className="professional-titles">
      Seeking an internship for summer 2024
    </p>
  </header>


      <section className={showFullStackProjects ? "expanded" : "collapsed"} onClick={handleSectionClick(() => setShowFullStackProjects(!showFullStackProjects))}>
        <h2>Full-Stack Projects</h2>
        {showFullStackProjects && fullStackProjects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Technologies Used: {project.technologies.join(', ')}</p>
            <a href={project.link}>Project Link</a>
          </div>
        ))}
      </section>

<section className={showMachineLearning ? "expanded" : "collapsed"} onClick={handleSectionClick(() => setShowMachineLearning(!showMachineLearning))}>
  <h2>Machine Learning</h2>
  {showMachineLearning && machineLearning.map((item, index) => (
    typeof item === "string" ? (
      <p key={index}>{item}</p>
    ) : (
      <div key={index}>
        <p>{item.text}</p>
        {item.links && (
          <ul>
            {Object.entries(item.links).map(([course, link]) => (
              <li key={course}>
                <a href={link}>{course}</a>
              </li>
            ))}
          </ul>
        )}
        {item.paperLink && <a href={item.paperLink} className="link-space">Research Paper</a>}
        {item.githubLink && <a href={item.githubLink}>GitHub Repository</a>}
      </div>
    )
  ))}

</section>

      <section className={showSignalsNetworks ? "expanded" : "collapsed"}  onClick={handleSectionClick(() => setShowSignalsNetworks(!showSignalsNetworks)) }>
        <h2>Signals and Networks Portfolio</h2>
  {showSignalsNetworks && signalsAndNetworksPortfolio.map((item, index) => (
    <div key={index}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><a href={item.link}>GitHub Repo</a></p>
    </div>
  ))}
</section>

      <section className={showTechLang ? "expanded" : "collapsed"} onClick={handleSectionClick(() =>  setShowTechLang(!showTechLang)) }>
        <h2>Technical and Conversational Languages</h2>
  {showTechLang && (
    <>
      <h3>Technical Languages</h3>
      <p>{technicalAndConversationalLanguages.technical.join(', ')}</p>
      <h3>Conversational Languages</h3>
      <p>{technicalAndConversationalLanguages.conversational.join(', ')}</p>
    </>
  )}
</section>


      <section>
        <h2>Miscellaneous</h2>
        <p>{miscellaneous}</p>
      </section>
    </div>
  );
}



export default App;

