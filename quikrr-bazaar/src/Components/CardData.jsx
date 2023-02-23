import {
    Card, CardHeader, CardBody, Heading, Stack, StackDivider,
    Flex,
    Spacer,
    Text
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';



const CardTemplate = ({ bgUrl, heading, e1, e2, e3, e4, e5 }) => {

    return (
        <>
            <Card w={'sm'} bg='#EDF2F7'>
                <CardHeader backgroundImage={`url(${bgUrl})`}>
                    <Heading
                        textAlign={'center'}
                        fontSize="12px"
                        color={'white'}
                    >{heading}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='2' fontSize={'12px'}>
                        <Flex align="center" justify={'center'}>
                            <p>{e1}</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>

                        <Flex align="center" justify={'center'}>
                            <p>{e2}</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>

                        <Flex align="center" justify={'center'}>
                            <p>{e3}</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>

                        <Flex align="center" justify={'center'}>
                            <p>{e4}</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>

                        <Flex align="center" justify={'center'}>
                            <p>{e5}</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>

                        <Flex align="center" justify={'center'}>
                            <p>View All</p>
                            <Spacer />
                            <ChevronRightIcon />
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

const CardData = () => {

    return (
        <>
            <Text textAlign={'center'} margin="20px">Buy and Sell from 1200+ Cities Across India</Text>
            <Flex gap="5">
                < CardTemplate key={1}
                    bgUrl={'https://www.roedl.com/de-de/de/themen/PublishingImages/Themenspecial/digitalisierung-handy-731.jpg'}
                    heading={'Mobile & Tablets'}
                    e1={'Used Mobiles'}
                    e2={'Tablets'}
                    e3={'Accessories'}
                    e4={'Wearables'}
                    e5={'Batteries'}
                />

                < CardTemplate key={2}
                    bgUrl={'https://www.roedl.com/de-de/de/themen/PublishingImages/Themenspecial/digitalisierung-handy-731.jpg'}
                    heading={'Home & Lifestyle'}
                    e1={'Furniture & Decor'}
                    e2={'Sports, Hobbies & Fashion'}
                    e3={'Footwear'}
                    e4={'Household Items'}
                    e5={'Luggages'}
                />

                < CardTemplate key={3}
                    bgUrl={'https://www.roedl.com/de-de/de/themen/PublishingImages/Themenspecial/digitalisierung-handy-731.jpg'}
                    heading={'Electronics & Appliances'}
                    e1={'Laptop & Accessories'}
                    e2={'TV - DVD - Multimedia'}
                    e3={'Camera & Accessories'}
                    e4={'Home Appliances'}
                    e5={'Kitchen Appliances'}
                />
            </Flex>

        </>

    )
}

export default CardData;





