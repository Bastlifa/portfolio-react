import styled from 'styled-components'

export const ProjectsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background: black;
    color: white;
    border: 3px solid white;
    border-radius: 4px;
    width: 500px;
    margin: 10px;
    @media (max-width: 600px)
    {
        width: 450px;
        margin: 5px;
    }
    @media (max-width: 480px)
    {
        width: 310px;
        margin: 5px;
    }
    a
    {
        color: white;
        text-decoration: none;
        img
        {
            margin-bottom: -5px;
        }
    }
    p
    {
        margin: 10px;
    }
`;

export const TitleAndLinks = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export const LinksDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    align-items: center;
`;

export const ProjectImg = styled.img`
    max-width: 400px;
    border: 1px solid white;
    margin: 10px;
    @media (max-width: 480px)
    {
        width: 300px;
    }
`;