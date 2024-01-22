import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    max-width: 1080px;
`
export const Image = styled.img`
    max-width: 100%;
    max-height: 100vh;
    height: 95vh;

    @media(max-width: 720px) {
        height: auto;
    }
`