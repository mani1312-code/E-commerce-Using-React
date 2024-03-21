import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const title = "Register";
const socialTitle = "Login with Social Media";
const btnText = "Sign Up"

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
]

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState("")
    // const { signUpWithGmail, creatUser } = useContext(AuthContext)
    // const location = useLocation();
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value, name);
        // console.log(value);
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // console.log(formData)

    };


    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        // console.log(form)

        axios.post("http://localhost:3000/datas", formData).then((res) => {
            // debugger
            console.log(res);
            alert("Data saved")
        })
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        if (password !== confirmPassword) {
            setErrorMessage("Password & confirm password are not same!")
            // alert("Password & confirm password are not same!")
        } else {
            // setErrorMessage("Data saved Successfully!");
            alert("Data saved Succesfully!");
        }

        navigate("/");
    }


    return (
        <div>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className='account-form' onSubmit={handleSignup}>
                            <div className="form-group">
                                <input type="text" name='name' id='name' placeholder='User Name *' required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name='email' id='email' placeholder='Email Address *' required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' id='password' placeholder='Password *' required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required onChange={handleChange} />
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
                                <button type='submit' className="d-block lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        {/* account bottom  */}
                        <div className="account-bottom">
                            <span className='d-block cate px-10'>
                                Already Have an Account? <Link to="/login" className='text-primary'> Login</Link>
                            </span>

                            <span className="or">
                                <span>OR</span>
                            </span>

                            {/* Social icons */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <a className='github' ><i className='icofont-github'></i></a>
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

export default SignUp
