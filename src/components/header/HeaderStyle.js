import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    &:hover
    {
        -webkit-text-stroke: 1px white;
        transition: all .2s ease-in-out; 
        transform: scale(1.1);
    }
    @media (max-width: 750px)
    {
        font-size: 16px;
    }
    @media (max-width: 560px)
    {
        font-size: 14px;
    }
`;

export const HeaderDiv = styled.div`
    height: 80px;
    width: 100%;
    background-color: black;
    /* opacity: 50%; */
    color: white;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
`;

export const HeaderH2 = styled.h2`
    margin-left: 20px;
    line-height: 8px;
    margin-bottom: 0;
    :last-child
    {
        margin-bottom: 20px;
    }
    @media (max-width: 700px)
    {
        font-size: 15px;
    }
    @media (max-width: 560px)
    {
        margin-left: 10px;
    }
`;

export const NavDiv = styled.div`
    width: 340px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px)
    {
        width: 250px;
    }
    @media (max-width: 560px)
    {
        width: 220px;
    }
`;

export const ContactDiv = styled.div`
    width: 120px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    a {
        color: white;
        text-decoration: none;
    }
    @media (max-width: 700px)
    {
        width: 100px;
    }
    @media (max-width: 560px)
    {
        width: 90px;
        margin-right: 10px;
    }
`;

export const ContactImg = styled.img`
    height: 25px;
    width: 25px;
`;

export const NameTitleDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
`;