import { Box, Center, Text, Image } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const addsData = [
    {
        "url": "https://teja10.kuikr.com/i4/20230223/Call-WhtsApp--8587086152-Nikon-D5600-Digital-Camera-18-140mm-VR-kit-Black-optical-Zoom-77-x--Screen-size-32-inches-Cam-available-VB201705171774173-ak_LWBP998795136-1677127024.jpeg",
        "title": "12w iphone charger for sale",
        "days": "1 hour ago"
    },
    {
        "url": "https://teja10.kuikr.com/i4/20230224/Spacious-and-strong-office-table-VB201705171774173-ak_LWBP2093927664-1677205967.jpeg",
        "title": "Brand New whole Gym Buisness For sell",
        "days": "14 hours ago"
    },
    {
        "url": "https://teja10.kuikr.com/i4/20230224/Spacious-and-strong-office-table-VB201705171774173-ak_LWBP2093927664-1677205967.jpeg",
        "title": "Baby car seat for above 6 months :|: Baby Car Seats",
        "days": "18 hours ago"
    },
    {
        "url": "https://teja9.kuikr.com/i6/20230223/Symphony-storm-cooler-71-lts-Very-good-condition-VB201705171774173-ak_LWBP1314085994-1677127154.png",
        "title": "very very good condition speed working Acer desktop sell  6month warranty  :|: Almost Like New,4999,Dealer,4GB,14 to 14.9",
        "days": "21 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i6/20230224/12w-iphone-charger-for-sale-VB201705171774173-ak_LWBP1628427485-1677201041.jpeg",
        "title": "Durafit 2hp treadmill auto incline",
        "days": "22 hours ago"
    },
    {
        "url": "https://teja10.kuikr.com/i5/20230223/Redmi-Y2--3-32-GB---working-condition--sell-or-exchange-VB201705171774173-ak_WBP1654594885-1677155145.png",
        "title": "Brand New whole Gym Buisness For sell  :|: Ab Exerciser",
        "days": "20 hours ago"
    },
    {
        "url": "https://teja9.kuikr.com/i5/20230223/Baby-car-seat-for-above-6-months-VB201705171774173-ak_LWBP1036628989-1677140778.jpeg",
        "title": "Lenovo X1 yoga - Touch screen laptop  :|: Almost Like New,33000,Individual,More than 8GB,13 to 13.9",
        "days": "18 hours ago"
    },
    {
        "url": "https://teja9.kuikr.com/i6/20230223/Symphony-storm-cooler-71-lts-Very-good-condition-VB201705171774173-ak_LWBP1314085994-1677127154.png",
        "title": "good condition :|: Keypad i Pod",
        "days": "17 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i5/20230223/Durafit-2hp-treadmill-auto-incline-VB201705171774173-ak_LWBP551793361-1677120270.jpeg",
        "title": "kids push car for sell :|: Prams/Walkers and Strollers",
        "days": "19 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i4/20230223/good-condition-VB201705171774173-ak_LWBP1369453326-1677143271.jpeg",
        "title": "hp 15.6inc laptop for sell in just 6000 full working  :|: HP ( Hewlett-Packard),Gently Used,HP ( Hewlett-Packard),Individual,2GB,15 to 15.9",
        "days": "7 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i4/20230223/kids-push-car-for-sell-VB201705171774173-ak_LWBP878672691-1677137168.jpeg",
        "title": "Brand new and original apple iPhone 13 Pro Max 512GB grey unlocked with full accessories and warranty",
        "days": "2 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i5/20230224/Brand-new-and-original-apple-iPhone-13-Pro-Max-512GB-grey-unlocked-with-full-accessories-and-warranty-VB201705171774173-ak_LWBP614035771-1677196495.jpeg",
        "title": "Apple iPad Air 5th Generation 64 Gb With Wifi.5G.Call.78383320.27",
        "days": "20 hours ago"
    },
    {
        "url": "https://teja8.kuikr.com/i5/20230223/Apple-iPad-Air-5th-Generation-64-Gb-With-Wifi5GCall7838332027-VB201705171774173-ak_LWBP1882396306-1677131101.jpeg",
        "title": "powermax treadmill, in good condition",
        "days": "22 hours ago"
    },
    {
        "url": "https://teja9.kuikr.com/i6/20230223/BRAND-NEW-IPHONE-11-128GB-WHITE-COLOUR-COD-AVAILABLE-8057440167-VB201705171774173-ak_LWBP831487241-1677155383.png",
        "title": "BRAND NEW IPHONE 11 128GB WHITE COLOUR COD AVAILABLE 80574.40167 :|: Apple",
        "days": "14 hours ago"
    },
    {
        "url": "https://teja10.kuikr.com/i4/20230223/Mee-Mee-walker-kids-VB201705171774173-ak_LWBP363794373-1677136945.jpeg",
        "title": "Apple iPad Air 5th Generation 64 Gb With Wifi.5G.Call.78383320.27",
        "days": "20 hours ago"
    },
    {
        "url": "https://teja10.kuikr.com/i6/20230223/4-month-old-Water-Filter-with-bill---warranty--single-person-used-VB201705171774173-ak_LWBP2005616312-1677144878.jpeg",
        "title": "Mee Mee walker kids :|: Prams/Walkers and Strollers",
        "days": "19 hours ago"
    },
]



const AddTemplate = ({ url, alt, title, days }) => {
    return (
        <>
            <Box
                w='105px'
                m='auto'
                // border={'1px solid'} 
                fontSize={'10px'}>

                <Box bg='#EDF2F7'>
                    <Center >
                        <Image h={'80px'}
                            src={url}
                            alt={alt}
                        />
                    </Center>
                </Box>
                <Box p='1' bg='white'>
                    <Text
                        whiteSpace="nowrap"
                        overflow='hidden'
                        textOverflow=' ellipsis'
                        color={'#00A3C4'}> {title}
                    </Text>
                    <Text
                        fontWeight={'thin'}
                        display={'flex'}
                        flexDirection={'row-reverse'}> {days}
                    </Text>
                </Box>
            </Box>
        </>
    )
}


const Adds = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 1241, min: 800 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3,
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
            <Box w='70%'
                mt='5'
                bg='#FFF5F5'
                boxShadow='sm'
                p='5'
            >
                <Text>Trending Ads</Text>

                <Carousel responsive={responsive}>
                    {addsData.map((el) => (
                        <AddTemplate key={el.title}
                            url={el.url}
                            title={el.title}
                            days={el.days}
                            alt={el.title}
                        />
                    ))}
                </Carousel>
            </Box>

        </>
    )
}

export default Adds;