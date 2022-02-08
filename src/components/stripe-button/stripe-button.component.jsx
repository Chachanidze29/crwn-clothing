import { React } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price }) => {
    const dispatch = useDispatch();
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KNBk7CZStDMaKq75CWXuIc5jisZaVGpbxuRMvZFliPO9EnjufBc9AwY4a2MUsVzTdevNBBFa60MVtiKvXtsbHY900k3sAYg13';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            console.log(res);
            alert('Payment was successful');
            dispatch(clearCart());

        }).catch(err => {
            console.log('error', err);
            alert('There was an issue with payment.Please use provided credit card');
        })
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total Is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;