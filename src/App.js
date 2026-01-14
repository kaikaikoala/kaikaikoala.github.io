import Home from './Home.jsx';
import { createHashRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import FirstHomeEspresso from './FirstHomeEspresso.jsx';
import HuntersPoint from './blogpages/HuntersPoint.jsx';
import StartHomeBar from './blogpages/StartHomeBar.jsx';
import Sozai from './blogpages/Sozai.jsx';
import Montrio from './blogpages/Montrio.jsx';
import Menu from './blogpages/Menu.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/firsthomeespresso" element={<FirstHomeEspresso />}/>
      <Route path="/hunterspoint" element={<HuntersPoint />}/>
      <Route path="/startinghomebar" element={<StartHomeBar />}/>
      <Route path="/sozai" element={<Sozai />}/>
      <Route path="/montrio" element={<Montrio />}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    );
}

export default App;
