import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 240px;
  display: none;
`;

export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    margin:10px;
    align-items: center;
    flex-basis: 23%;
    position: relative;
    &:hover{
        ${Image}{
            opacity:0.9;
        }
        ${AddButton}{
            display:flex;
        }
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.span`
    flex-basis: 70%;
`

export const Price = styled.span`
    text-align: end;
`