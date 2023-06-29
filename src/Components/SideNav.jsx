import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx"
import { BiTransfer } from "react-icons/bi"
import { BiSupport } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const SideNav = () => {
    const location = useLocation()

    const isActiveLink = (link) => {
        return location.pathname == link;
    }

    const navLinks = [
        {
            icon: RxDashboard,
            text: "DashBoard",
            link: "/"
        },
        {
            icon: BiTransfer,
            text: "Transaction",
            link: "/transaction"
        },
    ]

    return (
        <Stack bg={"white"} justify="space-between" boxShadow={{
            base: "none",
            lg: "lg"
        }} w={{
            base: "full",
            lg: "16rem"
        }} h="100vh"
        >
            <Box>
                <Heading textAlign="center" as="h1"
                    pt="56px" fontSize="20px"
                >
                    Praddyota
                </Heading>
                <Box mx="3" mt="6">
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack
                                borderRadius="10px"
                                py="3" px="4"
                                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                                _hover={{
                                    bg: "#F3F3F7",
                                    color: "#171717",
                                }}
                                cursor={"pointer"}
                            >
                                <Icon as={nav.icon} />
                                <Text fontWeight="medium" fontSize="14px">
                                    {nav.text}
                                </Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box mt="6" mb={"6"} mx="3">
                <Link to="/support">

                    <HStack
                        borderRadius="10px"
                        py="3" px="4"
                        bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
                        color={isActiveLink("/support") ? "#171717" : "#797E82"}

                        _hover={{
                            bg: "#F3F3F7",
                            color: "#171717",
                        }}
                        cursor={"pointer"}
                    >
                        <Icon as={BiSupport} />
                        <Text fontWeight="medium" fontSize="14px">
                            Support
                        </Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}

export default SideNav