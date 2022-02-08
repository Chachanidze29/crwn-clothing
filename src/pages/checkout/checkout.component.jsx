import { React } from "react";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlocksContainer,
    TotalContainer, TestWarningContainer
} from "./checkout.styles";

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlocksContainer>
                    <span>Product</span>
                </HeaderBlocksContainer>
                <HeaderBlocksContainer>
                    <span>Description</span>
                </HeaderBlocksContainer>
                <HeaderBlocksContainer>
                    <span>Quantity</span>
                </HeaderBlocksContainer>
                <HeaderBlocksContainer>
                    <span>Price</span>
                </HeaderBlocksContainer>
                <HeaderBlocksContainer>
                    <span>Remove</span>
                </HeaderBlocksContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem['id']} cartItem={cartItem} />
                )
            }
            <TotalContainer>
                <span>TOTAL ${total}</span>
            </TotalContainer>
            <TestWarningContainer>
                <p>*Please use the following test credit card for payment</p>
                <p>4242 4242 4242 4242 -Exp: 10/22 -CVV: 123</p>
            </TestWarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

export default CheckoutPage;