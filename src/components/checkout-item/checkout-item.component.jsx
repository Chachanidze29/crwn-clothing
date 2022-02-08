import { React } from "react";
import { useDispatch } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    ImageContainer,
    Name, Quantity, Value, Price,
    ArrowContainer,
    RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const dispatch = useDispatch();
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <ArrowContainer onClick={() => dispatch(removeItem(cartItem))}>
                    &#10094;
                </ArrowContainer>
                <Value>{quantity}</Value>
                <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </ArrowContainer>
            </Quantity>
            <Price>${price}</Price>
            <RemoveButtonContainer onClick={() => dispatch(clearItem(cartItem))}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;