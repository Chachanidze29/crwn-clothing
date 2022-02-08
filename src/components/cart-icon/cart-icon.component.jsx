import { React } from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/122 shopping-bag.svg';
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { CartIconContainer, ShoppingIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer>
                <ShoppingIcon />
            </ShoppingIconContainer>
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;