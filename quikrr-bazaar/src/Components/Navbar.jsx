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
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from "@chakra-ui/react";

import { MoonIcon, SunIcon, SearchIcon, ChevronDownIcon, } from '@chakra-ui/icons';

const Navbar = () => {

    return (
        <Box  fontSize="10px" w="80%" m={'auto'} marginTop={"50px"}
            size="lg">
            <Center>
                <HStack spacing='65px'>
                    <Box>Logo</Box>
                    <Box>
                        <Flex>
                            <Box>
                                <Select placeholder='Select option' size='sm'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </Box>
                            <Box>
                                <InputGroup>
                                    <Input placeholder='Search in Bangaluru' size='sm' />
                                    <InputRightElement children={
                                        <IconButton
                                            colorScheme='blue'
                                            aria-label='Search database'
                                            px='1'
                                            h='8'
                                            marginBottom={2}
                                            icon={<SearchIcon />}
                                        />
                                    } />
                                </InputGroup>
                            </Box>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex alignItems={'center'}>
                            <HStack spacing={'2.5'}>
                                <Avatar src='https://bit.ly/broken-link' size='xs' />
                                <Text>Login/Register</Text>
                                <Button bg={"yellow"}>Post Free Ad</Button>
                            </HStack>

                        </Flex>
                    </Box>

                </HStack>
            </Center>
            <Divider h="2" borderBottomColor={"GrayText"} />

            {/* ************************* */}

            <Flex  gap='10'>
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

        </Box>


    )
}

export default Navbar

