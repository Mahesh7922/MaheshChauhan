import { useState, useEffect, useRef, useMemo } from 'react'
import './TerminalUI.css'

export default function TerminalUI() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const resumeData = useMemo(() => ({
    name: "Mahesh Chauhan",
    education: {
      degree: "Bachelor of Technology (B. Tech) | Artificial Intelligence & Data Science",
      institution: "Thakur College of Engineering and Technology, Mumbai | University of Mumbai",
      period: "2022-2026",
      cgpa: "9.76/10"
    },
    skills: {
      languages: ["Python", "C", "C++", "HTML", "CSS", "JavaScript", "SQL"],
      tools: ["Git", "VS Code", "MS Word", "Excel", "Canva", "Jupyter Notebook", "Google Colab", "PyCharm", "PowerBI", "MySQL", "SQLite", "MongoDB"],
      technologies: ["Django", "Flask", "Node.js", "React.js", "Tailwind", "Bootstrap"]
    },
    projects: [
      {
        name: "HypeBazaar [E-Commerce Website]",
        github: "https://github.com/Mahesh7922/HypeBazaar.git",
        link: "https://hypebazaar.onrender.com/",
        description: [
          "Implemented a Django-based e-commerce platform using HTML, CSS, Bootstrap, Python and SQLite, featuring role-based user management (customer/admin), Razorpay payment gateway integration, and automated invoice generation.",
          "Developed a comprehensive purchase history in the user profile section, enabling secure checkout and order tracking, while ensuring efficient performance and scalability."
        ]
      },
      {
        name: "WellPredict [AI-Powered Disease Prediction WebApp]",
        github: "https://github.com/Mahesh7922/WellPredict",
        link: "https://wellpredict.streamlit.app/",
        description: [
          "Developed an AI-powered disease prediction web app using machine learning models, enabling users to receive accurate health predictions based on medical data. Tech-Stack: Python, Streamlit, Django, HTML, CSS, LLM, Gemini.",
          "Integrated an OCR-based medical report analysis, a healthcare chatbot with voice-to-text, and a doctor consultancy feature for seamless appointment booking and report sharing."
        ]
      },
      {
        name: "PlanetPicks [Eco-Friendly Products Recommender WebApp]",
        github: "https://github.com/Mahesh7922/PlanetPics-technovate.git",
        link: "https://devfolio.co/projects/planetpicks-bf39",
        description: [
          "Built an AI-powered eco-friendly product recommendation web app, featuring a smart recommender system, EcoBot, and a product catalog, using Flask, Python, LLM (Gemini), HTML, CSS, and Streamlit.",
          "Implemented an intelligent conversational assistant (EcoBot) for user engagement and an interactive product catalog to promote sustainable shopping choices."
        ]
      }
    ],
    experience: [
      {
        company: "Shripal Metals (Materialyz)",
        position: "Software Developer Intern",
        location: "Mumbai",
        period: "Jan 2025 – March 2025",
        responsibilities: [
          "Developed and maintained backend components of web applications using Django, designed and integrated RESTful APIs to facilitate seamless communication between frontend and backend systems, managed and optimized databases ensuring data integrity and performance.",
          "Developed an asset auction system for banks, enabling an asset management system with role-based access control for both normal users and banks."
        ]
      },
      {
        company: "ADesignArts",
        position: "Web-Development Intern",
        location: "Pune",
        period: "Dec 2024 – Jan 2025",
        responsibilities: [
          "Participated in training sessions to gain hands-on experience in web development and assisted in designing, developing, and maintaining websites and web applications.",
          "Collaborated with the team to enhance website functionality and improve user experience."
        ]
      }
    ],
    certifications: [
      "Python 3.4.3 Training - IIT Bombay",
      "PowerBi Master Course - Udemy",
      "Python Workshop - TCET MULTICON-W",
      "App Development (React Native) – TCET MULTICON-W",
      "Data Science BootCamp - GFG",
      "Introduction to MySQL - HackerRank/ Sololearn",
      "Postman API Fundamentals Student Expert - Badge",
      "GenAI 101 with Pieces - Badge"
    ],
    achievements: [
      "Secured 4th place in Hackconquest (AI/ML domain) - TCET, showcasing problem-solving and innovation in a competitive hackathon environment.",
      "Solved 200+ problems on LeetCode, improving algorithmic and data structure skills."
    ]
  }), [])

  const commands = useMemo(() => ({
    help: () => {
      return (
        <div className="help-command">
          <p>Available commands:</p>
          <ul>
            <li><strong>help</strong> - Show available commands</li>
            <li><strong>about</strong> - Display basic information about me</li>
            <li><strong>education</strong> - Show my educational background</li>
            <li><strong>skills</strong> - List my technical skills</li>
            <li><strong>projects</strong> - Display my projects</li>
            <li><strong>experience</strong> - Show my work experience</li>
            <li><strong>certifications</strong> - List my certifications</li>
            <li><strong>achievements</strong> - Display my achievements</li>
            <li><strong>contact</strong> - Show contact information</li>
            <li><strong>resume</strong> - Download my resume</li>
            <li><strong>clear</strong> - Clear the terminal</li>
          </ul>
        </div>
      )
    },
    about: () => (
      <div className="about-command">
        <div className="ascii-art">{`
  __  __       _                _      ____ _                 _                 
 |  \\/  | __ _| |__   ___  ___| |__  / ___| |__   __ _ _   _| |__   __ _ _ __  
 | |\\/| |/ _\` | '_ \\ / _ \\/ __| '_ \\| |   | '_ \\ / _\` | | | | '_ \\ / _\` | '_ \\ 
 | |  | | (_| | | | |  __/\\__ \\ | | | |___| | | | (_| | |_| | | | | (_| | | | |
 |_|  |_|\\__,_|_| |_|\\___||___/_| |_|\\____|_| |_|\\__,_|\\__,_|_| |_|\\__,_|_| |_|
        `}</div>
        <p>I'm a B.Tech student in AI & Data Science with a passion for web development and AI applications.</p>
        <p>Type <code>help</code> to see what else you can learn about me!</p>
      </div>
    ),
    education: () => {
      const { education } = resumeData
      return (
        <div className="education-command">
          <h3>🎓 Education</h3>
          <p><strong>{education.degree}</strong></p>
          <p>{education.institution}</p>
          <p>Period: {education.period}</p>
          <p>CGPA: {education.cgpa}</p>
        </div>
      )
    },
    skills: () => {
      const { skills } = resumeData
      return (
        <div className="skills-command">
          <h3>🛠️ Skills</h3>
          <div className="skill-category">
            <h4>Languages:</h4>
            <div className="skill-items">{skills.languages.map((lang, i) => <span key={i} className="skill-item">{lang}</span>)}</div>
          </div>
          <div className="skill-category">
            <h4>Tools:</h4>
            <div className="skill-items">{skills.tools.map((tool, i) => <span key={i} className="skill-item">{tool}</span>)}</div>
          </div>
          <div className="skill-category">
            <h4>Technologies/Frameworks:</h4>
            <div className="skill-items">{skills.technologies.map((tech, i) => <span key={i} className="skill-item">{tech}</span>)}</div>
          </div>
        </div>
      )
    },
    projects: () => {
      const { projects } = resumeData
      return (
        <div className="projects-command">
          <h3>🚀 Projects</h3>
          {projects.map((project, i) => (
            <div key={i} className="project-item">
              <h4>{project.name}</h4>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
              <ul>{project.description.map((desc, j) => <li key={j}>{desc}</li>)}</ul>
            </div>
          ))}
        </div>
      )
    },
    experience: () => {
      const { experience } = resumeData
      return (
        <div className="experience-command">
          <h3>💼 Work Experience</h3>
          {experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <h4>{exp.position} at {exp.company}</h4>
              <p>{exp.location} | {exp.period}</p>
              <ul>{exp.responsibilities.map((resp, j) => <li key={j}>{resp}</li>)}</ul>
            </div>
          ))}
        </div>
      )
    },
    certifications: () => (
      <div className="certifications-command">
        <h3>🏆 Certifications</h3>
        <ul>{resumeData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}</ul>
      </div>
    ),
    achievements: () => (
      <div className="achievements-command">
        <h3>🏅 Achievements</h3>
        <ul>{resumeData.achievements.map((achieve, i) => <li key={i}>{achieve}</li>)}</ul>
      </div>
    ),
    contact: () => (
      <div className="contact-command">
        <h3>📫 Contact Information</h3>
        <p>Email: <a href="mailto:maheshchauhan7902@gmail.com">maheshchauhan7902@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mahesh-chauhan-2b13a8282/" target="_blank" rel="noopener noreferrer">linkedin.com/in/maheshchauhan</a></p>
        <p>GitHub: <a href="https://github.com/Mahesh7922" target="_blank" rel="noopener noreferrer">github.com/maheshchauhan</a></p>
        <p>LeetCode: <a href="https://leetcode.com/u/mahesh_7902/" target="_blank" rel="noopener noreferrer">leetcode.com/u/mahesh_7902</a></p>
      </div>
    ),
    resume: () => (
      <div className="resume-command">
        <h3>📄 Resume</h3>
        <p>
          You can download my resume from the link below:<br />
          <a
            href="https://drive.google.com/uc?export=download&id=1LY7N6Du-WczzdCzs-nhV7n1yD79-oliK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to download my resume
          </a>
        </p>
      </div>
    ),
    clear: () => {
      setHistory([])
      return null
    },
    '': () => null
  }), [resumeData])

  useEffect(() => {
    inputRef.current?.focus()
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [history])

  useEffect(() => {
    setHistory([{ command: '', output: commands.about() }])
  }, [commands])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = input.trim().toLowerCase()
    if (trimmed) setCommandHistory(prev => [trimmed, ...prev])
    const output = commands[trimmed] ? commands[trimmed]() : (
      <div className="error-message">
        Command not found: {input}. Type <code>help</code> for available commands.
      </div>
    )
    setHistory(prev => [...prev, { command: input, output }])
    setInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(newIndex)
      setInput(commandHistory[newIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1
      setHistoryIndex(newIndex)
      setInput(newIndex >= 0 ? commandHistory[newIndex] : '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input))
      if (matches.length === 1) {
        setInput(matches[0])
      } else if (matches.length > 1) {
        setHistory(prev => [...prev, {
          command: input,
          output: <div className="tab-completion">
            <p>Suggestions:</p>
            <div className="completion-options">
              {matches.map((cmd, i) => <span key={i} className="completion-option">{cmd}</span>)}
            </div>
          </div>
        }])
      }
    }
  }

  return (
    <div className="terminal">
      {/* Terminal header */}
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">mahesh@portfolio ~</div>
      </div>

      <div 
        className="terminal-content"
        ref={terminalRef}
        style={{ 
          overflowY: 'auto',
          height: 'calc(100% - 40px)'
        }}
      >
        {history.map((item, i) => (
          <div key={i} className="history-item">
            {item.command && (
              <div className="command-line">
                <span className="prompt">mahesh@portfolio:~$</span>
                <span className="command">{item.command}</span>
              </div>
            )}
            <div className="command-output">{item.output}</div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="input-line">
          <span className="prompt">mahesh@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            className="command-input"
            autoFocus
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  )
}
