import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Haeder from './components/Header';
import Home from './pages/Home'
import Characters from './pages/Characters';
import Character from './pages/Character';
import NotFound from './pages/NotFound'

import 'antd/dist/antd.css';

const App = () => {

  return (
    <BrowserRouter>
      <Haeder/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="characters" element={ <Characters />} />
        <Route path="characters/:characterId" element={<Character />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
