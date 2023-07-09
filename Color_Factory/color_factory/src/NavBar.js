import { NavLink } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import './NavBar.css';



const NavBar = ({ colors}) => {
    return (
        <ul className='navbar-ul'>
            <li className='navbar-item' key={uuid()}><NavLink to="/colors/new">New Color</NavLink></li>
        </ul>
    )
}


export default NavBar