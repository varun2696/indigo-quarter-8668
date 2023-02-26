import { Grid, GridItem, Image, Center, Flex, Text, Button, Box, Container  } from '@chakra-ui/react'
const SinglePage = () => {

    return (
        <>
            <Grid
                w='90%'
                m='auto'
                templateColumns='repeat(2, 1fr)'
                gap={24} mt='50'
            //  border={'1px solid'}
            >
                <GridItem className='singleImage'
                    w='122%'
                    h='250'
                    boxShadow={'lg'}
                    bgColor={'pink.100'}
                >
                    <Center className='innerImage'>
                        <Image boxSize='248px'
                            src='https://teja9.kuikr.com/i5/20230226/64gb-black-with-one-charger--adpoter---cable----BOX-VB201705171774173-ak_LWBP555373486-1677408263_lg.webp' />
                    </Center>
                </GridItem>

                <GridItem w='90%' h='250' >

                    <Flex gap={5} fontSize='12px' fontWeight={500}>
                        <Text color={'green'}>Used</Text>
                        <Text colorScheme={'cyan'}>APPLE IPHONE 11 32GB</Text>
                    </Flex>
                    <Text fontSize={'lg'} fontWeight='bold'>
                        64gb black with one charger (adpoter + cable) + BOX
                    </Text>
                    <Flex gap={2} fontSize='10'>
                        <Text>Jaipur</Text>
                        |
                        <Text>Posted 3 Hours Ago</Text>
                    </Flex>
                    <Text
                     color={"rgb(0 131 202)"}
                      fontWeight='bold'
                      mt={2}
                      mb={2}
                      >29,500</Text>
                    <Flex gap={5}>

                        <Button
                            bgColor='rgb(0 131 202)'
                            color={'white'}
                            size='lg'
                            width='130px'
                            height='40px'
                            _hover={'rgb(0 131 202)'}
                        >CALL
                        </Button>

                        <Button
                          colorScheme={'facebook'}
                            size='lg'
                            width='130px'
                            height='40px'
                        >CHAT</Button>
                    </Flex>

                    <Box  w='180px'  bg={'#EDF2F7'} p='2'm='4' >
                        <Flex gap={4} fontSize={6}  >
                            <Box  m='auto'>
                                <Image boxSize={'30px'}
                                src='https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png'
                                />
                                <Text>Get all details</Text>
                            </Box>
                            <Box m='auto'>
                            <Image boxSize={'30px'}
                            src='https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png'
                            />
                                <Text>Schedule a visit</Text>
                            </Box>

                            <Box m='auto'>
                            <Image boxSize={'30px'}
                            src='https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png'
                            />
                                <Text>Negotiate price</Text>
                            </Box>
                        </Flex>
                    </Box >

                </GridItem>
            </Grid>
        </>
    )
}

export default SinglePage;

// cal=rgb(0 104 167)