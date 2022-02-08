import styled from "styled-components";

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 67px;
    z-index: 1;

    & button{
        margin:auto;
    }
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
    font-weight: bold;
    color: red;
`