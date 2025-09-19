import Home from './Home.jsx';
import { createHashRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import FirstHomeEspresso from './FirstHomeEspresso.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/firsthomeespresso" element={<FirstHomeEspresso />}/>
    </Routes>
    );
}

export default App;
