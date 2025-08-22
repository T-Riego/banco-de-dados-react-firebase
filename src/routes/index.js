import { Route, Routes } from 'react-router-dom';

import Admin from '../pages/Admin';
import Home from '../pages/home';
import Register from '../pages/Register';

import Private from './Private';

function RoutesApp(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Private><Admin /></Private>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesApp;