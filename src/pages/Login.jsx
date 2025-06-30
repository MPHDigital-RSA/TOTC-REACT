import registerImage from '../assets/login-image.jpg'
import { Link } from 'react-router-dom'
import '../styles/RegisterAndLogin.css'
import eyeIcon from '../assets/crossed-eye.svg'
import logo from '../assets/logo.svg'
import leftChevron from '../assets/white-left-chevron.svg'

const addButtonBg = {
    backgroundColor: "#49bbbd"
}

const removeButtonBg = {
    backgroundColor: "transparent"
}



function Login() {

    return (
        <div className='register-and-login'>
            <a className="back-home" href='/home'>
                <img src={leftChevron} alt="left chevron icon" />
            </a>
            <div className="image">
                <img src={registerImage} alt="the image of children raising hands" />
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="form">
                <p className="welcome">Welcome Student</p>
                <div className="login-and-register-nav">
                    <Link to={"/login"}><button style={addButtonBg}> Login</button></Link>
                    <Link to={"/register"}><button style={removeButtonBg}> Register</button></Link>
                </div>
                <p className="description">
                    Enter your email and password to log in. Enjoy our services
                </p>

                <form>

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

                    <div className="form-group">
                        <div className="form-input-2">
                            <label>
                                <input type="checkbox" name="remember" id="remember" />
                                Remember me
                            </label>

                            <Link><p>Forgot Password?</p></Link>
                        </div>
                    </div>

                    <button type='submit' className='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Login
