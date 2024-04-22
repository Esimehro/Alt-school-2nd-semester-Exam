import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Repos from './components/Repos';
import Repo from './components/Repo';
import NotFound from './components/NotFound';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/repo/:name" element={<Repo />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
