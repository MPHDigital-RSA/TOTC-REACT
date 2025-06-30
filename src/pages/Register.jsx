import registerImage from '../assets/register-image.jpg'
import { Link } from 'react-router-dom'
import '../styles/RegisterAndLogin.css'
import eyeIcon from '../assets/crossed-eye.svg'
import logo from '../assets/logo.svg'

const addButtonBg = {
    backgroundColor: "#49bbbd"
}

const removeButtonBg = {
    backgroundColor: "transparent"
}

function Register() {
    return (
        <div className='register-and-login'>
            <div className="image">
                <img src={registerImage} alt="the image of children raising hands" />
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="form">
                <p className="welcome">Welcome Student</p>
                <div className="login-and-register-nav">
                    <Link to={"/login"}><button style={removeButtonBg}> Login</button></Link>
                    <Link to={"/register"}><button style={addButtonBg}> Register</button></Link>
                </div>
                <p className="description">
                    Register your new account, use email and create username and password.
                </p>

                <form>
                    <div className="form-group">
                        <label> Email Address</label>

                        <div className="form-input">
                            <input type="email" placeholder='Enter your email address' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> User name</label>

                        <div className="form-input">
                            <input type="text" placeholder='Enter your user name' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>

                        <div className="form-input">
                            <input type="password" placeholder='Enter your password' />
                            <img src={eyeIcon} alt="the crossed eye icon" className='form-icon' />
                        </div>
                    </div>

                    <button type='submit' className='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
