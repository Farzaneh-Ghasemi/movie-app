import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Socialmedia from './components/socialMedia/Socialmedia';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Movies from './components/pages/movies/Movies';
import AboutUs from './components/pages/aboutus/AboutUs';
import SearchItems from './components/searchitem/SearchItems';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerComponent">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/search/:query" element={<SearchItems />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
