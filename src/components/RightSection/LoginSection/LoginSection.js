import {useSelector, useDispatch} from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import hide from '../../../assets/hide.png';
import show from '../../../assets/show.png';
import google from '../../../assets/google.png';
import microsoft from '../../../assets/microsoft.png';
import okta from '../../../assets/okta.png';
import './LoginSection.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export function LoginSection() {

    const { register, handleSubmit } = useForm();
    // customlogin
    function customlogin(formData) {
    console.log("Inside customlogin function")
    const APIlink = 'https://sunstone-app-alpha.q.uniphorecloud.com/auth/login2'
    const email='';
    const password='';

    axios.post(APIlink, {
        email: email,
        passsword: password,
    })
    .then((response) => {
        console.log(response.data);
        // Handle data
    })
    .catch((error) => {
        console.log(error);
    })}
    const dispatch = useDispatch();
    const passwordvisibility = useSelector(state => state.showpassword);
    const showforgotpassword = useSelector(state => state.showforgotpassword);

    const toggleforgotpasswordsection = () => {
        if(showforgotpassword === false){
             dispatch({type: 'forgotpassword'});
        }
        if(showforgotpassword === true){
            dispatch({type:'return'});
        }
    };
    const togglepasswordvisibility = () => {
        if(passwordvisibility === false){
             dispatch({type: 'showpassword'});
        }
        if(passwordvisibility === true){
            dispatch({type:'hidepassword'});
        }
    };
    // Google login function
    const googlelogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
    return(
        <div id='login'>
            <h1>Welcome</h1>
            {showforgotpassword === true?
            <div id='return'>
                <p> Please contact your administrator for assistances.</p>
                <button onClick={toggleforgotpasswordsection}>Return</button>
            </div>:<div>
                <form onSubmit={handleSubmit(customlogin)}>
                    <h5>Username or Email</h5>
                    <input  name='email' type='text' required></input>
                    <h5>Password</h5>
                    {/* Password text box changing */}
                    {/* {passwordvisibility===true?
                        <div id='password'>
                            <input name='password' type='text' placeholder="Password" required></input>
                            <button onClick={togglepasswordvisibility}><img src = {show} alt='Show' height={21} width={21}></img></button>
                        </div>:
                        <div id='password'>
                            <input name='password' type='password' placeholder="Password" required></input>
                            <button onClick={togglepasswordvisibility}><img src = {hide} alt='Hide' height={21} width={21}></img></button>
                        </div> 
                    }  */}
                        <div id='password'>
                            <input name='password' type={passwordvisibility?'text':'password'} placeholder="Password" required></input>
                            <button onClick={togglepasswordvisibility}><img src = {passwordvisibility?show:hide} alt='Show' height={21} width={21}></img></button>
                        </div>

                    <button id='fp' onClick={toggleforgotpasswordsection}>Forgot Password</button>
                    <button id='signin' type='submit'>Sign In</button>
                </form>
                </div>}
                {/* __________OR________ */}
                <div id="or"
                    style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                    >
                    <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />

                    <div>
                        <p style={{width: '70px', textAlign: 'center'}}>Or</p>
                    </div>

                    <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
                </div>       
            <div id='signinbuttons'>
                <button onClick={() => googlelogin()}><img src = {google} alt='Google' height={21} width={21}></img>  Sign in with Google</button>
                <button> <img src = {microsoft} alt='Microsoft' height={21} width={21}></img>  Login with Office 365</button>
                <button> <img src = {okta} alt='Okta' height={21} width={21}></img>Login with Okta</button>
            </div>
        </div>
    );
}