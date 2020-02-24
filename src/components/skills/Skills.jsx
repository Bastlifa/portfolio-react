import React, {useState, useEffect} from "react"
import { skills } from '../../assets/skills'
import Skill from './Skill'
import { SkillsDiv } from './SkillStyles'

const Skills = () =>
{
    
    const [selected, setSelected] = useState({})

    useEffect(_ =>
    {
        let tempSelected = {}
        skills.forEach(el =>
        {
            tempSelected[el.name] = false
        })
        setSelected(tempSelected)
    }, [])

    return (
        <SkillsDiv>
            
            {skills && skills.sort((a,b) => b.importance - a.importance).map(el =>
            {
                return (
                    <Skill skill={el} />
                )
            })}
        </SkillsDiv>
    )
}

export default Skills