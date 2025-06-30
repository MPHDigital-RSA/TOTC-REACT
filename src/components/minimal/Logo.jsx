import { Link } from 'react-router-dom'
import '../../styles/Logo.css'

function Logo({ logoImage }) {
    return (
        <Link to="/">
            <img src={logoImage} alt="TOTC logo" className='logo' />
        </Link>
    )
}

export default Logo