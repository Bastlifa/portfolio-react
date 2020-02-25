import styled from 'styled-components'

export const SkillsDiv = styled.div`
    /* display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    grid-template-columns: auto; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const SkillCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 3px solid white;
    border-color: ${props => props.borderCol};
    border-radius: 6px;
    color: white;
    align-items: center;
    background-color: rgb(70,70,70);
    width: 150px;
    height: 90px;
    text-align: center;
    margin: 5px;
    justify-content: space-around;
    h3
    {
        margin: 0px auto -5px auto;
    }
    @media (max-width: 1000px)
    {
        width: 100px;
        height: 80px;
        h3
        {
            font-size: 14px;
        }
    }
`;

export const SkillDiv = styled.div`
    
`;

export const RankFull = styled.div`
    background-color: yellow;
    border: 2px solid black;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    margin: 1px;
    @media (max-width: 1000px)
    {
        height: 8px;
        width: 8px;
    }
`;

export const RankEmpty = styled.div`
    background-color: black;
    border: 2px solid gray;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    margin: 1px;
    @media (max-width: 1000px)
    {
        height: 8px;
        width: 8px;
    }
`;

export const RankHalfFull = styled.div`
    background-color: yellow;
    border: 2px solid black;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    height: 16px;
    width: 8px;
    margin: 1px 0 1px 1px;
    border-right: none;
    @media (max-width: 1000px)
    {
        height: 8px;
        width: 4px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`;

export const RankHalfEmpty = styled.div`
    background-color: black;
    border: 2px solid black;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    height: 16px;
    width: 8px;
    margin: 1px 1px 1px 0;
    border-left: none;
    @media (max-width: 1000px)
    {
        height: 8px;
        width: 4px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;

export const ReposDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    @media (max-width: 800px)
    {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px)
    {
        grid-template-columns: 1fr;
    }
    p
    {
        justify-self: center;
        
    }
`;

export const StyledRepoLink = styled.a`
    color: white;
`;