// user context
import React from 'react';

const UserContext= React.createContext();

const getUserFromLocalStorage = () => {
    return localStorage.getItem('user') ? 
        JSON.parse(localStorage.getItem('user')) : 
        {username: null, token: null} ;
}

const UserProvider = (props) => {
    const [user, setUser] = React.useState({username: null, token: null});
    const [alert, setAlert] = React.useState({show: false, msg: '', type: 'success'});
    const [height, setHeight] = React.useState(0);

    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setHeight(window.pageYOffset);
        });
        return ()=>window.removeEventListener('scroll', ()=>{});
    })

    //user
    const userLogin = (user) =>{
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
    }
    const userLogout = () => {
        setUser({username:null, token:null});
        localStorage.removeItem('user');
    }

    //alert. at here or new a context js file. 
    const showAlert = ({msg, type='success'}) =>{
        setAlert({show:true, msg: msg, type: type});
    }
    const hideAlert = () => {
        setAlert({...alert, show:false});
    }

    return <UserContext.Provider 
        value={{user, userLogin, userLogout, getUserFromLocalStorage, 
                alert, showAlert, hideAlert,
                height, setHeight }}>
        {props.children}
    </UserContext.Provider>
}

export {UserContext, UserProvider} ; 