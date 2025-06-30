
import Button from '../minimal/Button'
import '../../styles/Navbar.css'
import logoIcon1 from '../../assets/logo.svg'
import logoIcon2 from '../../assets/logo2.svg'
import Logo from '../minimal/Logo'
import avatar from '../../assets/avatar.png'
import arrowIcon from '../../assets/down-arrow.svg'
import menuButtonWhite from '../../assets/menu-white.svg'
import menuButtonBlack from '../../assets/menu-black.svg'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const solidStyles = {
    backgroundColor: "white",
    color: "grey",
    padding: "9px 30px",
    borderRadius: "100px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
}

const transparentStyles = {
    backgroundColor: "var(--color-white-50)",
    color: "var(--color-white)",
    padding: "9px 30px",
    borderRadius: "100px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
}

const links = [
    {
        link: "Home",
        linkUrl: "/"
    },
    {
        link: "Courses",
        linkUrl: "/courses"
    },
    {
        link: "Careers",
        linkUrl: "careers"
    },
    {
        link: "Blog",
        linkUrl: "blog"
    },
    {
        link: "About US",
        linkUrl: "about"
    },
]

const person = {
    image: avatar,
    name: "Prince"
}
function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isProfileNavOn, setIsprofileNavOn] = useState(false);
    return (
        <>

            <header className='header' style={isLoggedIn ? { backgroundColor: "white" } : { backgroundColor: "var(--color-green)" }}>

                <div className="header-container container">
                    <Logo logoImage={isLoggedIn ? logoIcon2 : logoIcon1} />
                    <nav>
                        <ul className='nav-list'>
                            {
                                links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.linkUrl} style={isLoggedIn ? { color: "black" } : { color: "white" }}>
                                            {link.link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        {
                            isLoggedIn ? <div className="profile">
                                <img src={person.image} alt={`${person.name} avatar image`} className='avatar' />
                                {/* <p className='name'>{person.name}</p> */}

                                <img src={arrowIcon} alt="down arrow icon" className='arrow' onClick={() => {
                                    setIsprofileNavOn(!isProfileNavOn);
                                }} />
                            </div> : <div className="header-buttons">
                                <div onClick={() => {
                                    isLoggedIn(true);
                                }}>
                                    <Button buttonText="Login" buttonIcon="" isButtonIcon={false} style={solidStyles} buttonUrl="/login" />
                                </div>
                                <Button buttonText="Sign Up" buttonIcon="" isButtonIcon={false} style={transparentStyles} buttonUrl="/register" />
                            </div>
                        }

                        {
                            // if its logged on display a black icon instead of white
                            isLoggedIn ?
                                <img src={menuButtonBlack} alt="hamburger icon" className="menu-button" /> :
                                <img src={menuButtonWhite} alt="hamburger icon" className="menu-button" />
                        }

                        {
                            isProfileNavOn &&
                            <div className='profile-nav'>
                                <div onClick={() => {
                                    setIsprofileNavOn(false);
                                    setIsLoggedIn(false);
                                }}>
                                    <Button isButtonIcon={false} buttonText="Log Out" style={transparentStyles} />
                                </div>
                            </div>
                        }
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar
