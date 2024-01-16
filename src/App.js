import './App.scss';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
