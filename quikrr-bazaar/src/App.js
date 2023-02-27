import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SinglePage from './Components/SinglePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SinglePage />
      <Footer />
    </div>
  );
}

export default App;
