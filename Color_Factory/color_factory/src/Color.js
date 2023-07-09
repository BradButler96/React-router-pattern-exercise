import { Link, useParams, Navigate } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
    const { color } = useParams()
    const colorIdx = colors.findIndex(c => c.color === color)
    const colorInfo = colors[colorIdx]

    const lightOrDark = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );
        return hsp > 127.5 ? 'light' : 'dark'
    }

    return colorIdx !== -1 ? ( 
        <div className='color-div' style={{backgroundColor: colorInfo.code}}>
            <h1 className='color-text' style={lightOrDark(colorInfo.code) === 'light' ? { color: 'black' } : { color: 'white' }}>
                Isn't { colorInfo.color } a nice color?
            </h1>
            <Link to="/colors"><button className='home-btn'>Colors</button></Link>
        </div>
    ) 
    : <Navigate to='/colors' />
}

export default Color