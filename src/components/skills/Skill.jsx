import React from "react"
import { SkillDiv, SkillCard } from './SkillStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { RankFull, RankEmpty, RankHalfFull, RankHalfEmpty } from './SkillStyles'

library.add(fab)

const Skill = (props) =>
{
    library.add(fab)
    const { skill } = props

    const rankDots = (rank) =>
    {
        let rankArr = []
        while(rankArr.length < 5)
        {
            if(rank >= 1)
            {
                rankArr.push(<RankFull />)
                rank--
            }
            else if(rank === 0.5)
            {
                rankArr.push(
                    <div style={{display: 'flex'}}>
                        <RankHalfFull/>
                        <RankHalfEmpty/>
                    </div>
                )
                rank = 0
            }
            else
            {
                rankArr.push(<RankEmpty/>)
            }
        }
        return rankArr
    }

    return (
        <SkillDiv>
            <SkillCard>
                <h3>{skill.name}</h3>
                <div style={{display: 'flex'}}>
                    {rankDots(skill.skillRank)}
                </div>
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
                        return <FontAwesomeIcon icon={['fab', skill.faClass]} size='3x' color='white'/>
                    }
                    return <p>{skill.text}</p>
                })()}
            </SkillCard>
        </SkillDiv>
    )
}

export default Skill