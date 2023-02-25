import { Box, Button, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";


const CardTemplate = ({ url, alt, title, price, location, days }) => {
    return (
        <>
            <Box
                w='170px'
                m='auto'
                mt='5'
                mb='10'
                bg={'#FFF5F5'}
                fontSize={'12px'}>

                <Box bg='#EDF2F7'>
                    <Center >
                        <Image h={'120px'}
                            src={url}
                            alt={alt}
                        />
                    </Center>
                </Box>

                <Text
                    p='2'
                    whiteSpace="nowrap"
                    overflow='hidden'
                    textOverflow=' ellipsis'
                    color={'#00A3C4'}>{title}</Text>

                <Flex w="100%" align={'center'} justify='center' p='2' fontWeight={'light'}>
                    <Text >{price}</Text>
                    <Spacer />
                    <Text >{location}</Text>
                </Flex>

                <Flex w="100%" align={'center'} justify='center' p='2' fontWeight={'light'}>
                    <Button colorScheme='blue'
                        size='xs'
                        p='2' variant='outline'>
                        View
                    </Button>
                    <Spacer />
                    <Text>{days}</Text>
                </Flex>

            </Box>
        </>
    )
}

export default CardTemplate;
