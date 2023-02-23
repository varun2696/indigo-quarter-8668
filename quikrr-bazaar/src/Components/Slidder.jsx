import { Box, Center, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Popularprod = [
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        "item": "All Furnitures",
        "id": 1
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
        "item": "All Electronics",
        "id": 2
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
        "item": "Sofa Sets",
        "id": 3
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
        "item": "Bed Sets",
        "id": 4
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
        "item": "Wardrobes",
        "id": 5
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
        "item": "TVs",
        "id": 6
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
        "item": "Laptops",
        "id": 7
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
        "item": "Refrigerators",
        "id": 8
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
        "item": "Recliners",
        "id": 9
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
        "item": "Dining Tables",
        "id": 10
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
        "item": "Office Furniture",
        "id": 11
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
        "item": "Washing Machines",
        "id": 12
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
        "item": "Air Conditioners",
        "id": 13
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
        "item": "Speakers",
        "id": 14
    },
    {
        "src": "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png",
        "item": "Gaming Consoles",
        "id": 15
    }
]


const Products = ({ name, url }) => {

    return (
        <>
            <Box w='120px' p={4} overflow='hidden' fontSize={'8px'}>
                <img src={url} alt={name}
                    style={{
                        height: "70px",
                    }} />
                <p>{name}</p>
            </Box>

        </>
    )
}

const ProdSlide = Popularprod.map((el) => (
    <Products url={el.src} name={el.item} key={el.id} />
))


const Slider = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 1241, min: 800 },
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
               <Text mt={'5'} mb={'5'}>Most Popular Products</Text>
                <Box margin={'auto'}
                    boxShadow='sm'
                    textAlign={'center'}
                    rounded='md'
                    bg='#EDF2F7'>
                    <Carousel responsive={responsive}>
                        {ProdSlide}
                    </Carousel>
                </Box>
           

        </>
    )
}

export default Slider
