import React from "react"
import Project from './Project'
import { projects } from '../../assets/projects'
import { ProjectsDiv } from './ProjectStyles'
const Projects = () =>
{
    return (
        <ProjectsDiv>
            {projects && projects.map(el =>
            {
                return (
                    <Project project={el} key={el.name} />
                )
            })}
        </ProjectsDiv>
    )
}

export default Projects