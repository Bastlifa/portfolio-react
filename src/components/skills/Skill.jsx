import React, {useState, useEffect} from "react"
import { SkillDiv, SkillCard } from './SkillStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { RankFull, RankEmpty, RankHalfFull, RankHalfEmpty } from './SkillStyles'

library.add(fab, fas)

const Skill = (props) =>
{
    // library.add(fab)
    const { skill } = props
    const [size, setSize] = useState(['2x', 28])
    // const handleResize = () =>
    // {
    //     if(window.innerWidth > 1000) setSize(['2x', 28])
    //     else setSize(['1x', 16])
    // }

    // useEffect(_ =>
    // {
    //     window.addEventListener('resize', handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])

    const rankDots = (rank) =>
    {
        let rankArr = []
        while(rankArr.length < 5)
        {
            if(rank >= 1)
            {
                rankArr.push(<RankFull key={rankArr.length}/>)
                rank--
            }
            else if(rank === 0.5)
            {
                rankArr.push(
                    <div style={{display: 'flex'}} key={rankArr.length}>
                        <RankHalfFull/>
                        <RankHalfEmpty/>
                    </div>
                )
                rank = 0
            }
            else
            {
                rankArr.push(<RankEmpty key={rankArr.length}/>)
            }
        }
        return rankArr
    }

    return (
        <SkillDiv>
            <SkillCard>
                <h3>{skill.name}</h3>
                {/* <div style={{display: 'flex'}}>
                    {rankDots(skill.skillRank)}
                </div> */}
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