import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SkillsDiv = styled.div`
    display: grid;
    /* grid-template-rows: 1fr 1fr; */
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const SkillCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 3px solid white;
    border-radius: 4px;
    color: white;
    align-items: center;
`;

export const SkillDiv = styled.div`
    
`;