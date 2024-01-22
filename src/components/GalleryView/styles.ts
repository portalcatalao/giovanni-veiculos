import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #000000f0;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Image = styled.img`
`
export const ButtonClose = styled.button`
    z-index: 99999;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: ${({theme}) => theme.borders.main};
    background: ${({theme}) => theme.colors.danger};
    cursor: pointer;
    svg {
        color: #fff;
        font-size: 1.125rem;
    }
`