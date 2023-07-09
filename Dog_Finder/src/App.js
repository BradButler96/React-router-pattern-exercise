import DogList from './DogList.js'
import DogDetails from './DogDetails.js'
import NavBar from './NavBar.js'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import duke from './media/duke.jpg'
import perry from './media/perry.jpg'
import tubby from './media/tubby.jpg'
import whiskey from './media/whiskey.jpg'

import './App.css';

const defaultDogs = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

const dogNames = defaultDogs.dogs.map(dog => dog.name)

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogNames={dogNames} />
        <Routes>
          <Route exact={true} path="/dogs" element={<><DogList dogs={defaultDogs.dogs} /></>} />
          <Route exact={true} path="/dogs/:slug" element={<><DogDetails dogs={defaultDogs.dogs} /></>} />
          <Route exact={true} path="*" element={<Navigate to='/dogs' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
