import React from "react"
import { SkillDiv, SkillCard } from './SkillStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = (props) =>
{
    const { skill } = props
    return (
        <SkillDiv>
            <SkillCard>
                <h3>{skill.name}</h3>

                {(() =>{
                    if(skill.imageSrc)
                    {
                        return (
                            <img 
                                style={{height: "40px", width: "40px"}}
                                src={skill.imageSrc} 
                                alt={`icon for ${skill.name}`} 
                            />
                        )
                    }
                    else if(skill.faClass)
                    {
                        return <FontAwesomeIcon icon={skill.faClass}/>
                    }
                    return <p>{skill.text}</p>
                })()}

            </SkillCard>
        </SkillDiv>
    )
}

export default Skill