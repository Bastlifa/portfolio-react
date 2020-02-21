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
    /* display: flex; */
    /* flex-flow: row wrap; */
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 1px solid white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 560px)
    {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }
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
        :last-child
        {
            margin-bottom: 10px;
        }
    }
`;

export const NavDiv = styled.div`
    width: 340px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    justify-self: center;
    @media (max-width: 750px)
    {
        width: 250px;
    }
    @media (max-width: 560px)
    {
        width: 180px;
        grid-row-start: 2;
        
        justify-content: space-around;
    }
`;

export const ContactDiv = styled.div`
    width: 120px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    justify-self: end;
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
        grid-row-start: 2;
        justify-self: center;
        margin-bottom: 5px;
    }
`;

export const ContactImg = styled.img`
    height: 25px;
    width: 25px;
    @media (max-width: 600px)
    {
        height: 20px;
        width: 20px;
    }
`;

export const NameTitleDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    @media (max-width: 560px)
    {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 3;
        display: flex;
        flex-flow: row;
        justify-content: center;
        /* justify-self: end; */
        /* :last-child
        {
            justify-self: start;
        } */
    }
`;

export const NavAndContact = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 560px)
    {
        grid-row-start: 2;
    }
`;