import Dog from './Dog.js'
import { v4 as uuid } from 'uuid';

const DogList = ({ dogs }) => {
    return (
        <>
        {dogs.map(dog => {
            return (
                <Dog dog={dog} key={uuid()} />
            )
        })}
        </>
    );
}

export default DogList