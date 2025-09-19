import Home from './Home.jsx';
import { createHashRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import FirstHomeEspresso from './FirstHomeEspresso.jsx';
import HuntersPoint from './blogpages/HuntersPoint.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/firsthomeespresso" element={<FirstHomeEspresso />}/>
      <Route path="/hunterspoint" element={<HuntersPoint />}/>
    </Routes>
    );
}

export default App;
