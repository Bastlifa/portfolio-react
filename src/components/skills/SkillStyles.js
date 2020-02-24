import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    border-radius: 4px;
    color: black;
    align-items: center;
    background-color: lightgray;
    width: 150px;
    height: 140px;
    text-align: center;
    margin: 5px;
`;

export const SkillDiv = styled.div`
    
`;

export const RankFull = styled.div`
    background-color: yellow;
    border: 2px solid black;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    margin: 1px;
`;

export const RankEmpty = styled.div`
    background-color: black;
    border: 2px solid gray;
    border-radius: 50%;
    height: 14px;
    width: 14px;
    margin: 1px;
`;

export const RankHalfFull = styled.div`
    background-color: yellow;
    border: 2px solid black;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    height: 14px;
    width: 7px;
    margin: 1px 0 1px 1px;
    border-right: none;
`;

export const RankHalfEmpty = styled.div`
    background-color: black;
    border: 2px solid black;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    height: 14px;
    width: 7px;
    margin: 1px 1px 1px 0;
    border-left: none;
`;