
import { Box, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardTemplate from "../Templates/CardTemplate";

const MobileItems = [
    {
        "src": "https://teja10.kuikr.com/i5/20230221/Apple-iPad-9th-Gen-Wi-Fi-64GB-Tablet-VB201705171774173-ak_WBP420202360-1676990221.png",
        "title": "Apple iPad 9th Gen Wi-Fi 64GB Tablet",
        "price": "₹ 24,500",
        "location": "Delhi",
        "days": "41 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230221/6gb-ram-with-64-internal-storage-VB201705171774173-ak_WBP1959640336-1676989815.png",
        "title": "6gb ram with 64 internal storage  :|: Poco M2,Poco M2",
        "price": "₹ 6,400",
        "location": "Bangalore",
        "days": "50 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230221/MOTOROLA-EDGE-30-PRO-5G-9-months-old-bill-and-box-available--VB201705171774173-ak_LWBP477477670-1676987768.jpeg",
        "title": "MOTOROLA EDGE 30 PRO 5G 9 months old(bill and box available)",
        "price": "₹ 34,999",
        "location": "Hyderabad",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja9.kuikr.com/i4/20230217/Maha-Shivratri-Call-WhatsApp--7595832577-Imported-California-Apple-iPhone-14-pro-max-512GB-available-all-over-India-VB201705171774173-ak_WBP85464231-1676609544.jpeg",
        "title": "Maha Shivratri Call/WhatsApp: 7595832577 Imported California Apple iPhone 14 pro max 512GB available all over India :|: Clones",
        "price": "₹ 3,500",
        "location": "Bangalore",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja9.kuikr.com/i4/20230217/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1474248663-1676629708.png",
        "title": "Call/ WhtsApp:8961292242 California edition imported Apple iphones 13 pro & 14 pro iphones @cheap rate warranty bill and delivery available all over India :|: Clones",
        "price": "₹ 3,500",
        "location": "Bangalore",
        "days": "1 hour ago"
    },

    {
        "src": "https://teja9.kuikr.com/i6/20230222/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP1193913827-1677063528.png",
        "title": "iPhone power pack (5000mh)",
        "price": "₹ 5,000",
        "location": "Faridabad",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja8.kuikr.com/i6/20230222/IPhone-13pro-max-4gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1109813213-1677064183.png",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .931082201.3 :|: Clones",
        "price": "₹ 5,000",
        "location": "Bangalore",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230222/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1119509788-1677063596.png",
        "title": "OnePlus 7T snapdragon 855+",
        "price": "₹ 24,999",
        "location": "Hyderabad",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230206/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP347417281-1675623174.png",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Pune",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230209/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1996497131-1675914445.png",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .931082201.3 :|: Clones",
        "price": "₹ 5,000",
        "location": "Mumbai",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja9.kuikr.com/i4/20230223/Apple-Watch-Series-7-45mm-Only-GPS-VB201705171774173-ak_LWBP2084131824-1677168881.jpeg",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Bangalore",
        "days": "2 hours ago"
    },
    {

        "src": "https://teja8.kuikr.com/i5/20230223/Apple-iPad-Air-4-4th-gen-64GB-Wi-Fi-VB201705171774173-ak_LWBP1592356816-1677168635.jpeg",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Chennai",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja8.kuikr.com/i5/20230223/Apple-iPad-Air-4-4th-gen-64GB-Wi-Fi-VB201705171774173-ak_LWBP1592356816-1677168635.jpeg",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Bangalore",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230222/50--Holi-Discount-Contact--9038178720-All-types-of-Apple-iPhone-available-imported-Dubai--Korea-USA--and-Indonesia-with-warranty-VB201705171774173-ak_LWBP1855225331-1677062344.jpeg",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Chennai",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja8.kuikr.com/i4/20230222/50--Holi-Discount-Contact--9038178720-All-types-of-Apple-iPhone-available-imported-Dubai--Korea-USA--and-Indonesia-with-warranty-VB201705171774173-ak_LWBP1362416529-1677062299.jpeg",
        "title": "Apple 14 Pro Max 512GB dual Sim Call .9310822013 :|: Clones",
        "price": "₹ 5,000",
        "location": "Hyderabad",
        "days": "2 hours ago"
    }
]

const LifestyleArr = [
    {
        "src": "https://teja8.kuikr.com/i6/20230224/Kids-silk-langa-ND-blouse-VB201705171774173-ak_LWBP1251724310-1677234062.png",
        "title": "Kids silk langa ND blouse",
        "price": "₹                            10,000",
        "days": "1 min ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230224/Kids-silk-langa-ND-blouse-VB201705171774173-ak_LWBP1251724310-1677234062.png",
        "title": "Kids silk langa ND blouse",
        "price": "₹                            10,000",
        "days": "1 min ago"
    },
    {
        "src": "https://teja8.kuikr.com/i4/20230224/Original-Teak-Wood-King-Size-Bed--VB201705171774173-ak_LWBP1405056678-1677233506.jpeg",
        "title": "Original Teak Wood King Size Bed . :|: Bed Sets,Without Storage,39000,Almost Like New,Individual,Used",
        "price": "₹                            39,000",
        "days": "7 mins ago"
    },
    {
        "src": "https://teja8.kuikr.com/i6/20230224/Wardrobes-VB201705171774173-ak_LWBP1188478028-1677233026.png",
        "title": "Wardrobes  :|: Engineered Wood (PLY),Anniefurni,4999,Brand New,Individual,New",
        "price": "₹                            4,999",
        "days": "11 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/sofa-set-for-sale-VB201705171774173-ak_LWBP485523664-1677232716.png",
        "title": "sofa set for sale :|: Sofa Sets,3+1+1,Leatherette,Others,11000,Heavily Used,Individual,Used",
        "price": "₹                            11,000",
        "days": "23 mins ago"
    },
    {
        "src": "https://teja9.kuikr.com/i5/20230202/Home-office-study-table-VB201705171774173-ak_WBP1195964671-1675360614.png",
        "title": "Home office study table",
        "price": "₹ 8,000",
        "days": "31 mins ago"
    },
    {
        "src": "https://teja8.kuikr.com/i6/20230224/Sofa-set-with-5-seater-for-sale-ak_LWBP1133373155-1677209385.jpeg",
        "title": "Sofa set with 5 seater for sale",
        "price": "₹     9,500",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja8.kuikr.com/i4/20230224/Wakefit-Orthopaedic-Mattress-75x48--8-Inch--VB201705171774173-ak_LWBP1474225950-1677229558.jpeg",
        "title": "Wakefit Orthopaedic Mattress 75x48 (8 Inch)",
        "price": "₹                            7,500",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230224/fence-for-protecting-babies-and-infants-VB201705171774173-ak_LWBP1960668293-1677227249.png",
        "title": "Crib plus swing with side bumber free",
        "price": "₹ 5,500",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja8.kuikr.com/i4/20230224/Crib-plus-swing-with-side-bumber-free-VB201705171774173-ak_WBP410671482-1677227097.png",
        "title": "fence for protecting babies and infants  :|: Baby/Infant Fence with 8 panels",
        "price": "₹ 8,000",
        "days": "1 hour ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230224/L-shape-sofa--3-2--in-Pink-VB201705171774173-ak_LWBP304775786-1677226370.jpeg",
        "title": "L shape sofa (3+2) in Pink :|: Sofa Sets,3+1+1,20000,Gently Used,Individual,Used",
        "price": "₹ 20,000",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230224/Do-you-have-old-Coins----Contact-us-for-Sell-or-Buy-Old-coins-VB201705171774173-ak_LWBP1958247215-1677223624.jpeg",
        "title": "Teakwood king bed with ortho mattress and side tables :|: Bed Sets,Without Storage,25000,Gently Used,Individual,Used",
        "price": "₹ 25,000",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Double-cot-with-storage-and-mattresses-for-sale-VB201705171774173-ak_WBP740614258-1677223403.png",
        "title": "Do you have old Coins !  Contact us for Sell or Buy Old coins.",
        "price": "₹ 9,85,000",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja8.kuikr.com/i6/20230215/Dining-table-VB201705171774173-ak_LWBP794568335-1676465744.png",
        "title": "Double cot with storage and mattresses for sale  :|: Bed Sets,Solid Wood (Teak),Others,24000,Almost Like New,Individual,Used",
        "price": "₹ 24,000",
        "days": "2 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/2-double-bed-2-sofa-set-one-dinning-table-VB201705171774173-ak_LWBP1366934473-1677221581.png",
        "title": "Dining table",
        "price": "₹  12,500",
        "days": "3 hours ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/2-double-bed-2-sofa-set-one-dinning-table-VB201705171774173-ak_LWBP1366934473-1677221581.png",
        "title": "2 double bed 2 sofa set one dinning table  :|: Bed Sets,Without Storage,Solid Wood (Teak),2 Double Bed With Mattress 2 5 Seater Sofa Set 4 Seater Dining Table,45000,Gently Used,Individual,Used",
        "price": "₹45,000",
        "days": "3 hours ago"
    },
    {
        "src": "https://teja8.kuikr.com/i5/20230223/Bed-Mattress-VB201705171774173-ak_LWBP602653162-1677138274.png",
        "title": "Bed+Mattress",
        "price": "₹10,500",
        "days": "3 hours ago"
    },
    {
        "src": "https://teja9.kuikr.com/i5/20230222/COT--Bed--Diwan-style-for-sale-with-mattress-VB201705171774173-ak_WBP1016959426-1677053369.png",
        "title": "COT (Bed) Diwan style for sale with mattress",
        "price": "₹    3,000",
        "days": "3 hours ago"
    },
    {
        "src": "https://teja9.kuikr.com/i6/20230224/Office-Chair-As-good-as-new-Adjustable-height--back-handles-head-rest-5-wheels-VB201705171774173-ak_LWBP689277614-1677220448.jpeg",
        "title": "Office Chair-As good as new-Adjustable height, back,handles,head rest-5 wheels",
        "price": "₹                            4,000",
        "days": "3 hours ago"
    },
    {
        "src": "https://teja9.kuikr.com/i5/20230205/Adidas-Original-Exercise-bench-VB201705171774173-ak_WBP47203339-1675566668.png",
        "title": "Adidas Original Exercise bench",
        "price": "₹ 5,000",
        "days": "3 hours ago"
    }
]


const AppliancesArr = [
    {
        "src": "https://teja10.kuikr.com/i6/20230224/Used-Luminous-1050-Ecovolt-inverter-with-Luminous-RC-18000-150AH-Battery-VB201705171774173-ak_LWBP213798602-1677233826.png",
        "title": "Used Luminous 1050 Ecovolt inverter with Luminous RC 18000 150AH Battery :|: Inverters",
        "price": "₹ 8,900",
        "days": "20 mins ago"
    },
    {
        "src": "https://teja9.kuikr.com/i4/20230224/Call-on-8750728324-APPLE-MacBook-Air-M1---512GB-SSD--8GB-RAM---14-Inch-Display--Replacement-Warranty--COD-Available-VB201705171774173-ak_LWBP578349810-1677232586.png",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available.",
        "price": "₹                            14,500",
        "days": "32 mins ago"
    },
    {
        "src": "https://teja8.kuikr.com/i4/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP1108923453-1677234007.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹                            13,500",
        "days": "5 mins ago"
    },
    {
        "src": "https://teja9.kuikr.com/i4/20230224/Call-on-8750728324-APPLE-MacBook-Air-M1---512GB-SSD--8GB-RAM---14-Inch-Display--Replacement-Warranty--COD-Available-VB201705171774173-ak_LWBP134986257-1677232653.png",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available.",
        "price": "₹                            14,500",
        "days": "2 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i4/20230224/Call-on-8750728324-APPLE-MacBook-Air-M1---512GB-SSD--8GB-RAM---14-Inch-Display--Replacement-Warranty--COD-Available-VB201705171774173-ak_LWBP1463630091-1677232471.png",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available.",
        "price": "₹                            14,500",
        "days": "13 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i4/20230224/Call-on-8750728324-APPLE-MacBook-Air-M1---512GB-SSD--8GB-RAM---14-Inch-Display--Replacement-Warranty--COD-Available-VB201705171774173-ak_LWBP1463630091-1677232471.png",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹    13,500",
        "days": "20 days ago"
    },
    {
        "src": "https://teja10.kuikr.com/i4/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP761332365-1677233866.jpeg",
        "title": "Used Luminous 1050 Ecovolt inverter with Luminous RC 18000 150AH Battery :|: Inverters",
        "price": "₹  8,900",
        "days": "2 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "5 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available.",
        "price": "₹ 14,500",
        "days": "8 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "9 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available.",
        "price": "₹  14,500",
        "days": "11 days ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "11 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "13 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i5/20230224/Buy-on-98910-09376-SONY-PlayStation-4-Slim-1-TB---Console--Controller--2-CDs--With-Bill-Box-Available-VB201705171774173-ak_LWBP357864241-1677233279.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "13 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230220/Sale-72330-07176-Apple-MacBook-Air-2020-M1--Display-133-Inch-LED-backlit--8GB--512GB--macOS-Big-Sur--With-All-Accessories-and-6-months-Brand-Warranty-VB201705171774173-ak_LWBP112720709-1676868892.jpeg",
        "title": "Buy on 98910 09376 SONY PlayStation 4 Slim 1 TB ( Console, Controller, 2 CDs) With Bill Box Available.",
        "price": "₹ 13,500",
        "days": "15 mins ago"
    },

    {
        "src": "https://teja10.kuikr.com/i6/20230220/Sale-72330-07176-Apple-MacBook-Air-2020-M1--Display-133-Inch-LED-backlit--8GB--512GB--macOS-Big-Sur--With-All-Accessories-and-6-months-Brand-Warranty-VB201705171774173-ak_LWBP112720709-1676868892.jpeg",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available. :|: Laptop,Brand New,14500,Verified Seller,Dealer,14 to 14.9",
        "price": "₹  14,500",
        "days": "22 mins ago"
    },
    {
        "src": "https://teja10.kuikr.com/i6/20230220/Sale-72330-07176-Apple-MacBook-Air-2020-M1--Display-133-Inch-LED-backlit--8GB--512GB--macOS-Big-Sur--With-All-Accessories-and-6-months-Brand-Warranty-VB201705171774173-ak_LWBP112720709-1676868892.jpeg",
        "title": "Call on 8750728324 APPLE MacBook Air M1 ( 512GB SSD/ 8GB RAM ) 14 Inch Display, Replacement Warranty, COD Available. :|: Laptop,Brand New,14500,Verified Seller,Dealer,14 to 14.9",
        "price": "₹ 14,500",
        "days": "27 mins ago"
    }
]


const AllProdSlider = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 1241, min: 800 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <Box
                boxShadow={'2xl'}
                bg='#F7FAFC'
                borderRadius={'lg'}
                mt='8' >
                <Text p='3'>Mobile & Tablets</Text>
                <Carousel responsive={responsive}>
                    {MobileItems.map((item) => (
                        <CardTemplate key={item.title}
                            url={item.src}
                            alt={item.title}
                            title={item.title}
                            price={item.price}
                            location={item.location}
                            days={item.days}
                        />
                    ))}
                </Carousel>
            </Box>

            <Box
                boxShadow={'2xl'}
                bg='#F7FAFC'
                borderRadius={'lg'}
                mt='8' >
                <Text p='3'>Home & Lifestyle</Text>
                <Carousel responsive={responsive}>
                    {LifestyleArr.map((item) => (
                        <CardTemplate key={item.title}
                            url={item.src}
                            alt={item.title}
                            title={item.title}
                            price={item.price}
                            location={item.location}
                            days={item.days}
                        />
                    ))}
                </Carousel>
            </Box>


            <Box
                boxShadow={'2xl'}
                bg='#F7FAFC'
                borderRadius={'lg'}
                mt='8' >
                <Text p='3'>Electronics & Appliances</Text>
                <Carousel responsive={responsive}>
                    {AppliancesArr.map((item) => (
                        <CardTemplate key={item.title}
                            url={item.src}
                            alt={item.title}
                            title={item.title}
                            price={item.price}
                            location={item.location}
                            days={item.days}
                        />
                    ))}
                </Carousel>
            </Box>

        </>
    )
}

export default AllProdSlider;
