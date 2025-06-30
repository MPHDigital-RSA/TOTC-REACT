import footerLogo from '../../assets/logo.svg'
import '../../styles/Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="logo">
                <img src={footerLogo} alt="footer logo" />
                <p className='footer-desc'>Virtual Class <br />for Zoom</p>
            </div>

            <div className="footer-form">
                <h3>Subscribe to get our Newsletter</h3>
                <form action="">
                    <input type="email" placeholder='Your Email' />
                    <button>Subscribe</button>
                </form>
            </div>

            <div className="footer-nav-and-copyright">
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#" className='last-link'>Terms & Conditions</a></li>
                </ul>
                <p className="copyright">
                    &copy; 2021 Prince Dev Technologies Inc.
                </p>
            </div>
        </footer>
    )
}

export default Footer
