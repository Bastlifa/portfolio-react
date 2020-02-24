import React from "react"
import { ProjectCard, ProjectImg, LinksDiv, TitleAndLinks } from './ProjectStyles'
import { ContactImg } from '../header/HeaderStyle'

const Project = (props) =>
{
    const { project } = props
    return (
        <ProjectCard>
            <TitleAndLinks>
                <h3>{project.name}</h3>
                <LinksDiv>
                    {project.secondRepoURL ?
                        <>
                            <a href="https://github.com/Bastlifa">
                                FE <ContactImg src='assets/images/Github-Mark-Light-120px-plus.png'/>
                            </a>
                            <a href="https://github.com/Bastlifa">
                                BE <ContactImg src='assets/images/Github-Mark-Light-120px-plus.png'/>
                            </a>
                        </>
                        :
                        <a href="https://github.com/Bastlifa">
                            <ContactImg src='assets/images/Github-Mark-Light-120px-plus.png'/>
                        </a>
                    }
                    {project.docsURL && <a href={project.docsURL} alt={`api docs for ${project.name}`}>API Docs</a>}
                </LinksDiv>
            </TitleAndLinks>
            <a href={project.liveSiteURL}>
                <ProjectImg src={project.imgsrc} alt={`${project.name} live site`} />
            </a>
            <div>
                {project.description.map((el, ind) =>
                {
                    return <p key={ind}>{el}</p>
                })}
            </div>
        </ProjectCard>
    )
}

export default Project