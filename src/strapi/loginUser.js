import axios from 'axios';
import url from '../utils/URL';

export default async function loginUser({email, password}){
    let response = await axios
        .post('http://localhost:1337/auth/local', {
            identifier: email,
            password: password,
        })
        .catch(
            error => console.log(error)
        );
    // console.log(response);
    return response;
}