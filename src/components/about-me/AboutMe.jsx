import React from "react"
import { AboutMeDiv, MeP, StyledPA, StyledImg, ParagraphsDiv, MePMobileSmall, MePMobileShow } from './AboutMeStyles'

const AboutMe = () =>
{
    return (
        <>
            <AboutMeDiv bgColor={"black"} txtColor={"white"}>
                <div style={{marginTop: "5px"}}>
                    <StyledImg style={{borderRadius: "10px", border: "2px solid white"}} src="./assets/images/eli.png" alt="me"/>
                </div>
                <MePMobileSmall>
                    Hello, my name is Eli Sacks, and I'm a web developer.
                    I've built projects using HTML 5, CSS, JS, React, Redux, Node/Express, SQLite3, postgreSQL, and more.
                </MePMobileSmall>
                <MePMobileShow>
                    I'm hoping for remote work, or something in the Toledo, OH area, but will consider moving somewhere warm. 
                </MePMobileShow>
                <MePMobileShow>
                    I graduated with a BS in Math and Physics from the University of Toledo,
                    and I had once been a CS major. I've also passed a couple of Actuary exams.
                </MePMobileShow>
                <MePMobileShow>
                    A few years ago, a friend and I formed a <StyledPA href="http://windingwaygames.com/" target="_blank" rel="noopener noreferrer" aColor={"white"}>startup</StyledPA> in which we made and published a VR tower defense game.
                </MePMobileShow>
                <MePMobileShow>
                    Most recently, I completed Lambda School's <StyledPA href="https://lambdaschool.com/courses/full-stack-web-development" target="_blank" rel="noopener noreferrer" aColor={"white"}>Full Stack Web</StyledPA> track.
                </MePMobileShow>
                <ParagraphsDiv>
                    <MeP>
                        Hello, my name is Eli Sacks, and I'm a web developer.
                        I've built projects using HTML 5, CSS, JS, React, Redux, Node/Express, SQLite3, postgreSQL, and more.
                    </MeP>
                    <MeP>
                        I'm hoping for remote work, or something in the Toledo, OH area, but will consider moving somewhere warm. 
                    </MeP>
                    <MeP>
                        I graduated with a BS in Math and Physics from the University of Toledo,
                        and I had once been a CS major. I've also passed a couple of Actuary exams.
                    </MeP>
                    <MeP>
                        A few years ago, a friend and I formed a <StyledPA href="http://windingwaygames.com/" target="_blank" rel="noopener noreferrer" aColor={"white"}>startup</StyledPA> in which we made and published a VR tower defense game.
                    </MeP>
                    <MeP>
                        Most recently, I completed Lambda School's <StyledPA href="https://lambdaschool.com/courses/full-stack-web-development" target="_blank" rel="noopener noreferrer" aColor={"white"}>Full Stack Web</StyledPA> track.
                    </MeP>
                </ParagraphsDiv>
            </AboutMeDiv>
        </>
    )
}

export default AboutMe