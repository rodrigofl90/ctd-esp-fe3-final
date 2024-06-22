import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Footer from './Components/Footer';
import AppProvider from './Context/Context';
import GlobalStyle from './Styles/GlobalStyle';
import ThemeSelector from './Components/ThemeSelector';


function App() {
  return (
    <>
  <AppProvider> 
  <ThemeSelector>
  <GlobalStyle /> 
    <Navbar/>
    <Routes>
      <Route path= "/" element={<Home />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Routes>
        <Footer/>
        </ThemeSelector>
      </AppProvider> 
      </>
      
  );
}

export default App;
