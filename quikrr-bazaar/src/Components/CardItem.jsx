import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";

const CardItem = () => {
    return (
        <>
            <Box w='180px' h="auto" border={'1px solid'} mt='5' mb='10' fontSize={'12px'}>

                <Box bg='#EDF2F7'>
                    <Center >
                        <Image h={'120px'}
                            src='https://teja8.kuikr.com/i5/20230223/Book-now-iphone-X-with-all-accessories-and-bill-box-VB201705171774173-ak_LWBP2101922872-1677147201.png'
                            alt='Green double couch with wooden legs'
                        />
                    </Center>
                </Box>


                <Text color={'#00A3C4'}>Book now Iphone</Text>
                <Flex w="100%" align={'center'} justify='center' p='2' fontWeight={'light'}>
                    <Box>
                        <Text> 9000</Text>
                        <Button colorScheme='blue'
                            size='xs'
                            p='2' variant='outline'>
                            View
                        </Button>
                    </Box>
                    <Spacer />
                    <Box>
                        <Text>Lll</Text>
                        <Text>jhjdsj</Text>
                    </Box>
                </Flex>

            </Box>
        </>
    )
}

export default CardItem;
