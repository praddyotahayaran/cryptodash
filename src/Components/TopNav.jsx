import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import {HiOutlineMenuAlt1 } from 'react-icons/hi'

const TopNav = ({ title, onOpen }) => {
    return (
        <Box px={"4"} bg={"white"}>
            <HStack
                maxW="70rem"
                h={16}
                justify="space-between"
                mx="auto"
            >
                <Icon as={HiOutlineMenuAlt1} display={{
                    base: 'block',
                    lg: 'none'
                }} onClick={onOpen} />
                <Heading fontWeight={"medium"} fontSize={"28px"}>
                    {title}
                </Heading>
                <Menu>
                    <MenuButton>
                        <Icon fontSize={"32"} as={FaUserCircle} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                        <MenuItem>Feedback</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav