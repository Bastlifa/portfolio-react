import React, {useState, useEffect} from "react"
import { skills } from '../../assets/skills'
import Skill from './Skill'
import { SkillsDiv, ReposDiv, StyledRepoLink } from './SkillStyles'
import { repos } from '../../assets/skills'

const Skills = () =>
{
    
    const [allSelected, setAllSelected] = useState([])

    useEffect(_ => {}, [allSelected])

    return (
        <>
            <SkillsDiv>
                
                {skills && skills.sort((a,b) => b.importance - a.importance).map(el =>
                {
                    return (
                        <Skill skill={el} key={el.name} setAllSelected={setAllSelected} />
                    )
                })}
            </SkillsDiv>
            <ReposDiv>
                {repos && allSelected.length > 0 && repos.filter(el =>
                    {
                    for(let i=0; i<allSelected.length; i++)
                    {
                        if(!el[allSelected[i]]) return false
                    }
                    return true
                    }).map(el =>
                    {
                    return (
                            <p key={el.name}>
                                <StyledRepoLink 
                                    href={el.url} 
                                    target="_blank" rel="noopener noreferrer"    
                                >
                                    {el.name}
                                </StyledRepoLink>
                            </p>
                            )
                    })
                }

            </ReposDiv>
        </>
    )
}

export default Skills