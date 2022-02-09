import styled from "styled-components";

export const PreviewCollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    & a:hover{
        opacity: 0.5;
        cursor:pointer;
    }
`

export const Title = styled.h1`
    margin-bottom: 25px;
    padding:0;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;

    @media screen and (max-width:1000px) {
        flex-direction: column;
        align-items: center;
    }
`