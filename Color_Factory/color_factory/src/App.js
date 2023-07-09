import ColorList from './ColorList.js'
import Color from './Color.js'
import NewColor from './NewColor.js'
import NavBar from './NavBar.js'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  const [colors, setColors] = useState([])

  const addColor = (newColor) => {
      setColors(colors => [newColor, ...colors])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact={true} path="/colors" element={<><ColorList colors={colors} /></>} />
          <Route exact={true} path="/colors/new" element={<><NewColor colors={colors} addColor={addColor} /></>} />
          <Route exact={true} path="/colors/:color" element={<><Color colors={colors} /></>} />
          <Route exact={true} path="*" element={<Navigate to='/colors' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
