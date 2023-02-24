import { Box, Flex, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { FaApple, FaFacebook, FaGooglePlay, FaGooglePlusG, FaLinkedinIn, FaMicrosoft, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    return (
        <>
            <Box border={'1px solid'} w='85%' h='auto' m='auto' mt='5' mb='2'>
                <Flex w='99%' m='auto'>
                    <Box border={'1px solid'}
                        w='66%'
                    >
                        <Flex fontSize={'10px'} gap='3' p='2'>
                            <Text>About Us</Text>
                            <Text>Contact Us</Text>
                            <Text>Careers</Text>
                            <Text>Quikr Videos</Text>
                            <Text>Advertise With Us</Text>
                            <Text>Blog</Text>
                            <Text>Help</Text>
                        </Flex>
                        <Text fontSize={'8px'} p='1'>
                            Widely known as India’s no. 1 online classifieds platform, Quikr is all about you. Our aim is to empower every person in the country to independently connect with buyers and sellers online. We care about you — and the transactions that bring you closer to your dreams. Want to buy your first car? We’re here for you. Want to sell commercial property to buy your dream home? We’re here for you. Whatever job you’ve got, we promise to get it done.
                        </Text>

                        <Box bg={'#EDF2F7'} w='96%' p={2} fontSize={10} m='1'>
                            At Quikr, you can buy, sell or rent anything you can think of.
                        </Box>

                        <Wrap spacing='3px' fontSize={'10'} mt='4' p='2' lineHeight={6}>
                            <WrapItem>
                                <Text>Listing Policy</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text>Terms of Use</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text> Privacy Policy</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text>Quikr Mobiles Policy</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text>Quikr Brand Guidelines</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text> Sitemap News</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text>Other Brands: Commonfloor</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text> Hiree</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text> Dazzlr </Text>
                            </WrapItem>


                            <WrapItem>
                                <Text>Realty  Compass</Text>
                            </WrapItem>

                            <WrapItem>
                                <Text> Zefo</Text>
                            </WrapItem>
                        </Wrap>

                        <Text display={'flex'}
                            flexDirection='row-reverse'
                            mt='5'
                            fontSize={'12px'}>
                            Copyright © 2008 - 2023 Quikr India Private Limited
                        </Text>
                    </Box>
                    <Spacer />

                    <Box
                        border={'1px solid'}
                        w='33.5%' >
                        <Box
                            fontSize={'10px'}
                            display='flex'
                            p='2'
                        >
                            <div>
                                <p>Ahmedabad</p>
                                <p>Bangalore</p>
                                <p>Chandigarh</p>
                                <p>Chennai</p>
                                <p>Coimbatore</p>
                                <p>All Cities</p>
                            </div>
                            <Spacer />
                            <div>
                                <p>Delhi</p>
                                <p>Hyderabad</p>
                                <p>Jaipur</p>
                                <p>Gurgaon</p>
                                <p>Kochi</p>
                            </div>
                            <Spacer />
                            <div>
                                <p>Kolkata</p>
                                <p>Lucknow</p>
                                <p>Mumbai</p>
                                <p>Pune</p>
                                <p>Trivandrum</p>
                            </div>
                        </Box>

                        <Flex gap={'4'}
                            align='center'
                            p='2'
                        >
                            <Text fontSize={'12'}>Follow Us</Text>
                            <FaFacebook />
                            <FaLinkedinIn />
                            <FaGooglePlusG />
                            <FaTwitter />
                            <FaYoutube />
                        </Flex>

                        <Flex gap={'4'}
                            align='center'
                            p='2'
                        >
                            <Text fontSize={'12'}>Download The App</Text>
                            <FaApple />
                            <FaGooglePlay />
                            <FaMicrosoft />
                        </Flex>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Footer






