import { NavLink } from "react-router-dom";
import { v4 as uuid } from 'uuid';


const NavBar = ({ dogNames }) => {
    return (
        <ul className='navbar-ul'>
            <li className='navbar-item' key={uuid()}><NavLink to="/dogs">Home</NavLink></li>
            {dogNames.map(name => <li className='navbar-item' key={uuid()}><NavLink to={`/dogs/${name}`}>{ name }</NavLink></li>)}
        </ul>
    );
}

export default NavBar