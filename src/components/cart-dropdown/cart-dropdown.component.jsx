import { React } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropDownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(item => <CartItem key={item['id']} item={item} />)
                        :
                        <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                }
            </CartItemsContainer>
            <CustomButton onClick={() => { navigate('/checkout'); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomButton>
        </CartDropDownContainer>
    )
}

export default CartDropdown;