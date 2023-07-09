import { Link  } from "react-router-dom";

const Dog = ({ dog }) => {
    return (
        <div className='dog-card'>
            <h3>{dog.name}</h3>
            <Link to={`/dogs/${dog.name}`}><img src={dog.src} style={{width:'25vw'}} /></Link>
            <p>Age: {dog.age}</p>
        </div>
    )
}

export default Dog