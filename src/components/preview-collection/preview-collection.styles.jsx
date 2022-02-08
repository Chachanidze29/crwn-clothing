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
    font-size: 28px;
    display:inline-block;
    margin-bottom: 25px;
`

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`