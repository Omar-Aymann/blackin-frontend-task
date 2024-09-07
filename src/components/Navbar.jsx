import navbarIcon from '../assets/navbar-icon.svg';
import icon from '../assets/website-icon.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src={navbarIcon} alt="" />
            <h1>Black IN Dashboard</h1>
            </div>

            <Link to='/home' className='navBtn'>
                <img src={icon} />
                go to website</Link >
        </nav>
    );
}