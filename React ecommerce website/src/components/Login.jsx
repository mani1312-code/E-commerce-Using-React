import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now"

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    // {
    //     iconName: 'icofont-pinterest',
    //     siteLink: '#',
    //     className: 'pinterest',
    // },
]

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("")
    // const { signUpWithGmail, login } = useContext(AuthContext)
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [datas, setDatas] = useState([]);
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        axios.get("http://localhost:3000/datas")
            .then((res) => {
                // console.log("Data fetched successfully", res);
                setDatas(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        if (email && password) {
            const user = datas.find((user) => user.email === email && user.password === password);
            if (user) {
                console.log('done')
                var nameUser = user.name
                // handleSignInSuccess(nameUser)
                navigate("/");
                alert("You are login")
                console.log('Login successful for user:', nameUser);
            } else {
                alert('Login failed. Invalid email or password.');
            }
        } else {
            alert('Please provide both email and password.');
        }
    };


    // const handleRegister = () => {
    //     signUpWithGmail().then((result) => {
    //         const user = result.user;
    //         navigate(from, { replace: true })
    //     }).catch((error) => {
    //         const errorMsg = error.message;
    //         setErrorMessage("Please provide valid email & password!")
    //     })
    // }

    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name='email' id='email' placeholder='Email Address *' required  onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' id='password' placeholder='Password *' required onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            {/* showing  message */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className="error-message text-danger mb-1">
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>


                            <div className="form-group">
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2 '>
                                    <div className="checkgroup">
                                        <input type="checkbox" name='remember' id='remember' />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass" className='text-primary'>Forget Password?</Link>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type='submit' className="d-block lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        {/* account bottom  */}
                        <div className="account-bottom">
                            <span className='d-block cate px-10'>
                                Don't Have an Account? <Link to="/sign-up" className='text-primary'>Sign Up</Link>
                            </span>

                            <span className="or">
                                <span>OR</span>
                            </span>

                            {/* Social icons */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <a className='github'><i className='icofont-github'></i></a>
                                </li>
                                {
                                    socialList.map((val, index) => (
                                        <li key={index}>
                                            <a className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

