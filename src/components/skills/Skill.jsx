import React, {useState} from "react"
import { SkillDiv, SkillCard } from './SkillStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { RankFull, RankEmpty, RankHalfFull, RankHalfEmpty } from './SkillStyles'

library.add(fab, fas)

const Skill = (props) =>
{
    const { skill, setAllSelected } = props
    // const [size, setSize] = useState(['2x', 28])
    const size = ['2x', 28]
    
    const [selected, setSelected] = useState(false)

    const handleSelect = _ =>
    {
        if(selected) setAllSelected(a => a.filter(el => el !== skill.name))
        else setAllSelected(a => [...a, skill.name])
        setSelected(!selected)
    }

    return (
        <SkillDiv>
            <SkillCard 
                onClick={handleSelect}
                borderCol={selected ? 'yellow' : 'white'}
            >
                <h3>{skill.name}</h3>

                {(() =>{
                    if(skill.imageSrc)
                    {
                        return (
                            <img 
                                style={{height: `${size[1]}px`, width: `${size[1]}px`}}
                                src={skill.imageSrc} 
                                alt={`icon for ${skill.name}`} 
                            />
                        )
                    }
                    else if(skill.faClass)
                    {
                        return <FontAwesomeIcon 
                            icon={['fab', skill.faClass]} 
                            color='white'
                            size={size[0]}
                        />
                    }
                    else if(skill.fas)
                    {
                        return <FontAwesomeIcon 
                            icon={['fas', skill.fas]} 
                            color='white'
                            size={size[0]}
                        />
                    }
                    return //<p>{skill.text}</p>
                })()}
            </SkillCard>
        </SkillDiv>
    )
}

export default Skill