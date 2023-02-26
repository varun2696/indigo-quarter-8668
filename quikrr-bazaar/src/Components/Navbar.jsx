import {
    Box,
    HStack,
    Input,
    IconButton,
    InputGroup,
    InputRightElement,
    Select,
    Button,
    Flex,
    Avatar,
    Text,
    Center,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer,
    Image,

} from "@chakra-ui/react";

import { SearchIcon, ChevronDownIcon, Icon } from '@chakra-ui/icons';

const Navbar = () => {

    return (
        <Box fontSize="10px"
            w="100%"
            m={'auto'}
            p='2'
            size="lg">

            <HStack mb={-8} >
                <Box mr={6}
                ml='60px'
                >
                    <Image boxSize={120}
                        src="https://media.licdn.com/dms/image/C5622AQGtfWo8QsASUA/feedshare-shrink_800/0/1677432633472?e=1680134400&v=beta&t=x4vqbv9wCLdmSihaFyGAtKtrSBNSBspN4lJCmo8Sn7Q" />
                </Box>
                <Box>
                    <Flex>
                        <Box w='100px'>
                            <Select placeholder='All categories' size='xs'>
                                <option value='option1'>Cars & Bikes</option>
                                <option value='option2'>Mobile & Tablets</option>
                                <option value='option3'>Electronics & Appliances</option>
                                <option value="">Real Estate</option>
                                <option value="">Services</option>
                                <option value="">Jobs</option>
                            </Select>
                        </Box>
                        <Box>
                            <InputGroup size={'xs'}>
                                <Input placeholder='Search in Bangaluru' size='xs' />
                                <InputRightElement children={
                                    <Icon as={SearchIcon} w={4} h={4} color='blue.600' />
                                } />
                            </InputGroup>
                        </Box>
                    </Flex>
                </Box>
                <Spacer />
                <Box p='12'>
                    <Flex alignItems={'center'}>
                        <HStack spacing={'2.5'}>
                            <Avatar src='https://bit.ly/broken-link' size='xs' />
                            <Text>Login/Register</Text>
                            <Button bg={"yellow"} size='xs' p='4'>Post Free Ad</Button>
                        </HStack>

                    </Flex>
                </Box>

            </HStack>

            <Divider h="2" borderBottomColor={"GrayText"} />
            {/* ************************* */}

            <Flex w='80%' m='auto' >
                <Menu >
                    <MenuButton >
                        <Text>Mobile & Tablets <ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Used Mobiles</MenuItem>
                        <MenuItem>Tablets</MenuItem>
                        <MenuItem>Accessories</MenuItem>
                        <MenuItem>Wearables</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />

                <Menu >
                    <MenuButton >
                        <Text > Home & Lifestyle<ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Furniture & Decor</MenuItem>
                        <MenuItem>Sports, Hobbies & Fashion</MenuItem>
                        <MenuItem>Luggages</MenuItem>
                        <MenuItem>Footwear</MenuItem>
                        <MenuItem>Househol Items</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Menu>
                    <MenuButton >
                        <Text >Appliances<ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Laptop & Accessories</MenuItem>
                        <MenuItem>TV -DVD - Multimedia</MenuItem>
                        <MenuItem>Camera & Accessories</MenuItem>
                        <MenuItem>Home & Appliances</MenuItem>
                        <MenuItem>Kitchen Appliances</MenuItem>
                        <MenuItem>View All</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Menu>
                    <MenuButton >
                        <Text > HOME APPLIANCES <ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Menu>
                    <MenuButton >
                        <Text >KIDS & TOYS  <ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Menu>
                    <MenuButton >
                        <Text>SPORTS & FASHION <ChevronDownIcon /></Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>

            <Divider h="2" borderBottomColor={"GrayText"} />

        </Box>


    )
}

export default Navbar

