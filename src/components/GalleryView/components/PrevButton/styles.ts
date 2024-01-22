import styled from "styled-components";

export const Button = styled.button`
    z-index: 99999;
    position: absolute;
    left: 1.5rem;
    width: 32px;
    height: 32px;
    border: 0; 
    border-radius: ${({theme}) => theme.borders.main};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    svg {
        color: ${({theme}) => theme.colors.white};
        font-size: 24px;
    }
    &:disabled {
        background: ${({theme}) => theme.colors.gray_500};
        svg {
            color: ${({theme}) => theme.colors.gray_400};
        }
    }
`