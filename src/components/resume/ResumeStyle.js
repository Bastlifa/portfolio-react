import styled from 'styled-components'

export const ResumeDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const aspectRatio = 838/1158
export const StyledIframe = styled.iframe`
    width: 828px;
    height: 1158px;
    @media(max-width: 900px)
    {
        width: 100%;
        height: width/aspectRatio;
    }
`;