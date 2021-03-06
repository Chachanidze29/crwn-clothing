import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    text-transform: uppercase;
    overflow: hidden;

    &.large{
        height: 380px;
    }

    &:first-child{
        margin-right: 7.5px;
    }
    &:last-child{
        margin-left: 7.5px;
    }

    &:hover{
        cursor: pointer
    }

    &:hover{
        ${BackgroundImageContainer}{
            transform: scale(1.1);
            transition: transform 6s;
        }
        ${ContentContainer}{
            opacity: 0.9;
        }
    }

    @media screen and (max-width:800px) {
        min-width: 100%;
    }

    & .content {
        opacity: 0.9
    }
`

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`