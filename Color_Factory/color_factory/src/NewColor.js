import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";


import './NewColor.css';


const NewColor = ({ colors, addColor }) => {
    const initialState = {color: '', code: ''}
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ color: formData.color, code: formData.code });
        setFormData(initialState)
        navigate('/colors')
    }

    return (
        <div className='new-color-container'>
            <h1 className='new-color-title'>Add a New Color Here!</h1>
            <form id='new-color-form' onSubmit={handleSubmit}>
                <div className='color-name-container'>
                    <label className='form-label' htmlFor='color-name'>Color Name:</label>
                    <input className='color-name-input'
                           type="text"
                           name="color"
                           value={formData.color}
                           onChange={handleChange} />
                </div>

                <div className='color-code-container'>
                    <label className='form-label' htmlFor='color-code'>Pick a Color: </label>
                    <input className='color-code-input'
                           type="color"
                           name="code"
                           value={formData.code}
                           onChange={handleChange} />
                </div>

                
            </form>
            <button id='submitNewBtn' form='new-color-form' type='submit'>Add Color</button>

            <Link to="/colors"><button className='home-btn'>Colors</button></Link>
        </div>
    )
}

export default NewColor