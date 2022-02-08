import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { SignOutStart } from '../../redux/user/useractions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => dispatch(SignOutStart())}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
                {currentUser ? <CartIcon /> : null}
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
}

export default Header;