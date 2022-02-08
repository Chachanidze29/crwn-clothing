import React, { useLayoutEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { CheckUserSession } from './redux/user/useractions';

import './App.css';

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(CheckUserSession());
    }, [dispatch])

    const redirectUserCorrectly = () => {
        if (currentUser) {
            return <Navigate to='/' />
        } else {
            return <SignInAndSignUp />
        }
    }

    return (
        <div>
            <Header />
            <Routes>
                <Route exact={true} path='/' element={<HomePage />} />
                <Route exact={true} path='/shop/*' element={<ShopPage />} />
                <Route exact={true} path='/checkout' element={<CheckoutPage />} />
                <Route exact={true} path='/signin' element={redirectUserCorrectly()} />
            </Routes>
        </div>
    )
}

export default App;
