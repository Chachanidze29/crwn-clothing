import styled, { css } from "styled-components";

const sameWidth = css`
    width: 23%
`

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
    & img{
        width: 100%;
        height: 100%;
    }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

export const Quantity = styled.span`
    ${sameWidth};
    display: flex;
`

export const Name = styled.span`
    ${sameWidth};
`

export const Price = styled.span`
    ${sameWidth};
`

export const ArrowContainer = styled.div`
    cursor: pointer
`

export const Value = styled.span`
    margin:0 10px;
`

export const RemoveButtonContainer = styled.div`
    cursor:pointer;
    margin-right:25px;
`