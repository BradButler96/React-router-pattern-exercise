import { useParams, Navigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';


const DogDetails = ({ dogs }) => {
    const { slug } = useParams();
    const dogIdx = dogs.map(dog => dog.name).indexOf(slug)
    const dog = dogs[dogIdx]

    let display;

    dogIdx != -1 ? 
    display = (
        <div className='dog-info-container'>
            <h1 className='dog-name'>{ dog.name }</h1>
            <img className='dog-img' src={dog.src} style={{width:'30vw'}} />
            <ul className='dog-info-list'>
                <li key={uuid()}>Age: {dog.age}</li>
                {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
            </ul>
        </div>
    ) 
    : display = <Navigate to='/dogs' />
    
    return display
}

export default DogDetails

