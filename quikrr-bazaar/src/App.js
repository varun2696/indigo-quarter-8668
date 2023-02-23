
import './App.css';
import CardData from './Components/CardData';
import CardItem from './Components/CardItem';
import Navbar from './Components/Navbar';
import Slider from './Components/Slidder';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <CardData/>
      <CardItem />
    </div>
  );
}

export default App;
