import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import Error404 from '../pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
