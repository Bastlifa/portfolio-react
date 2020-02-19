import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AboutMeDiv = styled.div`
    background-color: ${props => props.bgColor};
    color: ${props => props.txtColor};
    display: flex;
    align-content: flex-start;
    /* height: 100%; */
`;



export const MeP = styled.p`
    width: 80%;
    text-align: left;
    margin: 5px auto 12px auto;
`;

export const StyledPA = styled.a`
    color: ${props => props.aColor};
    text-decoration: none;
    border-bottom: 1px dashed gray;
`;

export const StyledLink = styled(Link)`
    color: ${props => props.aColor};
    text-decoration: none;
    border-bottom: 1px dashed gray;
`;