import React from 'react'
import StyledCard from '../about/StyledCard'
import quizlet from '../../assets/quizlet.png'
import portfolio from '../../assets/portfolio.PNG'
import { Fade } from 'react-reveal'

const Projects = () => {
    const PROJECTS = [
        { name: "Quizlet quiz App", liveDemo: "https://quizlet001.netlify.app", image: quizlet, gitHub: "https://github.com/techie-sam/cbt_react_app" },
        { name: "React Portfolio", liveDemo: "https://quizlet001.netlify.app", image: portfolio, gitHub: "https://quizlet001.netlify.app" },
        { name: "Weather App", liveDemo: "https://weathermate001.netlify.app", image: "", gitHub: "https://github.com/techie-sam/weather-app" },
        { name: "React Portfolio", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
        { name: "React Portfolio", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
        { name: "React Portfolio", liveDemo: "https://techie-sam.netlify.app", image: "", gitHub: "https://quizlet001.netlify.app" },
    ]
    return (
        <section id="projects">
            <div className='text-center mt-5 mb-5'>
                <h6>Recent Projects</h6>
                <h5>Projects</h5>
            </div>
            <StyledCard>

                <div className='row gap-3'>
                    {
                        PROJECTS.map(({ name, liveDemo, gitHub, image }, index) =>
                        <Fade bottom key={name}>
                            <span className='col-lg col-12' key={name}>
                                <div>
                                    <img src={image} className="w-100" alt={name} />
                                    <h4 className='p-3'>{name}</h4>
                                </div>
                                <a href={liveDemo} target="_blank" rel="noreferrer" className="btn btnPrimary m-1">Live Demo</a>
                                <a href={gitHub} target="_blank" rel="noreferrer" className="btn btnPrimary m-1">Github</a>
                            </span>
                        </Fade>
                        )
                    }
                </div>
            </StyledCard>
        </section>
    )
}

export default Projects