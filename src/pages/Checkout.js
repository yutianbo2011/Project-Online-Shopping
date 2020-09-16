import React from "react";
import {CartContext} from '../context/cart';
import {UserContext} from '../context/user';
import {useHistory} from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';
import submitOrder from '../strapi/submitOrder';
import {CardElement, StripeProvider, Elements, injectStripe} from 'react-stripe-elements';

function Checkout(props) {
  const {cart, total, clearCart} = React.useContext(CartContext);
  const {user, showAlert, hideAlert } = React.useContext(UserContext);
  const history= useHistory();
  //state values
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  // const isEmpty = !name || alert.show;

  const  handleSubmit = async (event) =>{
    showAlert({msg: 'submitting order... please wait'});
    event.preventDefault();
    const response = await props.stripe.createToken().catch(error => console.log(error));
    const {token} = response;
    console.log('token', token);
    if(token){
      setError('');
      const {id}=token;
      let order = await submitOrder({name:name, total:total, items: cart, stripeTokenId: id, userToken: user.token});
      if(order){
        showAlert({msg:'your order is complete!'});
        clearCart();
        history.push('/');
        return;
      }
      else{
        showAlert({msg:'error with your order. please try again!', type: 'danger'});
      }
    }
    else{
      hideAlert();
      setError(response.error.message);
    }
  };

  if(cart.length<1) return <EmptyCart />;
  return <section className='section form'>
      <h2 className='section-title'>checkout</h2>
      <form className='checkout-form'>
        <h3>
          order total: <span>${total}</span>
        </h3>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='name'>your name</label>
          <input type="text" id='name' value={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        {/* card element */}
        <div className='stripe-input'>
          <label htmlFor='card-element' >Credit or Debit Card</label>
          <p className='stripe-info'>
            card number 4242 4242 4242 4242
            <br/>
            enter 5 digits for zip code
          </p>
        </div>
        {/* stripe element  */}
        <CardElement className='card-element'></CardElement>
        {/* stripe error  */}
        {error && <p className='form-empty'>{error}</p>}
        <p className='form-empty'>please fill out name field</p>
        <button 
          className='btn btn-primary btn-block' 
          type='submit' 
          onClick={(event) => handleSubmit(event)}>
            submit
          </button>
      </form>
    </section>;
};

const CardForm = injectStripe(Checkout);
const StripeWrapper = () =>{
  return <StripeProvider 
    apiKey='pk_test_51HRhjUJK3h5tYA5yY51ctJKyba0OFTyVpNkwMph3dqgzUH0YDDSFNOyClhcTHhXeSxtXVMGq11C5gTS7tRD7BSoz00fHAPZNl0'>
    <Elements>
      <CardForm>
      </CardForm>
    </Elements>
  </StripeProvider>
};

export default StripeWrapper;
