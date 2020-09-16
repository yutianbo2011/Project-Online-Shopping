import React from "react";


//strapi functions
 import loginUser from '../strapi/loginUser';
 import registerUser from '../strapi/registerUser';
//handle user
import {useHistory} from 'react-router-dom';
import {UserContext} from '../context/user';


export default function Login() {
  const history = useHistory(); 
  //setup user context
  const {userLogin, alert, showAlert, hideAlert} = React.useContext(UserContext);

  //state values
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [isMember, setIsMember] = React.useState(false);

  let isEmpty = !email || !password || (!isMember && !username ) || alert.show; 

  const toggleMember = () => {
    setIsMember((prevMember)=>{
      let newMember = !prevMember;
      // newMember? setUsername('def')
      return newMember;
    })
  };

  const handleSubmit = async (event) => {
    showAlert({
      msg: 'accessing user data. please wait...'
    });

    event.preventDefault();
    let response;
    if(isMember){
      response=await loginUser({email, password});
      
    }
    else{
      let registerResponse= await registerUser({email, password, username});
      showAlert({
        msg: `Hi ${username}! You are registered!`
      })
      response=await loginUser({email, password});
      hideAlert();
    }
    if(response){
      console.log('success', response.data);
      const token= response.data.jwt;
      const username=response.data.user.username;
      const newUser = {token, username};
      userLogin(newUser);
      showAlert({
        msg: `Hi ${username}! You are logged in!`
      })
      history.push('/products');
    }
    if(!response){
      //show alert
      showAlert({
        msg: 'There was an error. Please try again...',
        type: 'danger',
      })

    }
  }; 

  return <section className='form section '>
    <h2 className='section-title'> {isMember ? 'sign in' : 'register'} </h2>
    <form  className='login-form'> 
      {/* email input */}
      <div className='form-control'>
        <label htmlFor='email'>
          email
        </label>
        <input type='email' id='email' value={email} 
            onChange= {(event) => setEmail(event.target.value) } ></input>
      </div>
      {/* password innput */}
      <div className='form-control'>
        <label htmlFor='password'>
          password
        </label>
        <input type='password' id='password' value={password} 
            onChange= {(event) => setPassword(event.target.value) } ></input>
      </div>

      {/* username innput */}
      {!isMember && <div className='form-control'>
        <label htmlFor='username'>
          username
        </label>
        <input type='username' id='username' value={username} 
            onChange= {(event) => setUsername(event.target.value) } ></input>
      </div> }

      {/* empty text */}
      {isEmpty && <p className='form-empty'> please fill out all the form fields</p>}

      {/* submit btn */}
      {!isEmpty && <button type='submit' className='btn btn-primary btn-block'
        onClick={handleSubmit} >
          submit
      </button>}
      
      {/* register link */}
      <p className='register-link'> {isMember?'need to register' : 'already a member' } 
      <button type='button' onClick={toggleMember} >click here</button> </p>
    </form>
  </section>;
}
