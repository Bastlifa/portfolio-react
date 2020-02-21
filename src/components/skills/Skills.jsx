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
            a
            {skills && skills.map(el =>
            {
                return (
                    <Skill skill={el} />
                )
            })}
        </SkillsDiv>
    )
}

export default Skills