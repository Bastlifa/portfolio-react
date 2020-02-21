import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AboutMeDiv = styled.div`
    background-color: ${props => props.bgColor};
    color: ${props => props.txtColor};
    /* display: flex;
    align-content: flex-start; */
    /* height: 100%; */
    display: grid;
    grid-template-columns: 200px 800px;
    @media (max-width: 1000px)
    {
        grid-template-columns: 200px 1fr;
    }
    @media (max-width: 600px)
    {
        grid-template-columns: 160px 1fr;
        grid-template-rows: 1fr;
    }
`;



export const MeP = styled.p`
    /* width: 80%; */
    text-align: left;
    margin: 5px auto 12px 40px;
    @media (max-width: 600px)
    {
        margin-left: 5px;
        grid-column-start: 1;
        grid-column-end: 3;
    }
    
`;

export const MePMobileSmall = styled.p`
    /* width: 80%; */
    text-align: left;
    margin: 5px 5px 12px 9px;
    display: none;
    @media (max-width: 600px)
    {
        display: block;
        grid-row-start: 1;
        grid-column-start: 2;
    }
`;

export const MePMobileShow = styled.p`
    /* width: 80%; */
    text-align: left;
    margin: 5px 5px 12px 5px;
    display: none;
    @media (max-width: 600px)
    {
        display: block;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`;

export const ParagraphsDiv = styled.div`
    @media (max-width: 600px)
    {
        display: none;
        
    }
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

export const StyledImg = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 600px)
    {
        width: 160px;
        height: 160px;
    }
`;