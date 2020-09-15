import axios from 'axios';
import url from '../utils/URL';

export default async function registerUser ({email, password, username}) {
    // console.log(`${url}/auth/loc/register`);
    const data= {username: username, email: email, password: password};
    // console.log(data);
    const response = await axios
        .post( 'http://localhost:1337/users',  data)
        .catch( error => console.log(error));
    console.log(response);
    return response;
}
