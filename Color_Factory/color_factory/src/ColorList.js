import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import './ColorList.css';



const ColorList = ({ colors }) => {
    return (
        <ul className='colors-ul'>
            {colors.map(color => {
                return (
                    <Link to={`/colors/${color.color}`} key={uuid()}>
                        <li className='colors-li'>
                            { color.color.charAt(0).toUpperCase() + color.color.slice(1) }
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default ColorList