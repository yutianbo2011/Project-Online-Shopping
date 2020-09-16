import axios from 'axios';
import url from '../utils/URL';

export default async function loginUser({email, password}){
    let response = await axios
        .post(`${url}/auth/local`, {
            identifier: email,
            password: password,
        })
        .catch(
            error => console.log(error)
        );
    // console.log(response);
    return response;
}