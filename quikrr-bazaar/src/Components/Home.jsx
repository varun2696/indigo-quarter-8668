import Navbar from './Navbar';
import Slider from './Slidder';
import Adds from './Adds';
import ProdCatalouge from './ProdCatalouge';
import AllProdSlider  from './AllProdSlider';

const Home = () => {

    return (
        <div style={{width:'85%', margin:'auto'} }>
            <Slider />
            <ProdCatalouge />
            <Adds />
            <AllProdSlider />
        </div>
    )
}

export default Home;