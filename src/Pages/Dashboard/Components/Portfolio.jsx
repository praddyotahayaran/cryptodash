import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { CgPushDown, CgPushUp } from 'react-icons/cg'

const Portfolio = () => {
    return (
        <HStack justify={"space-between"} bg={"white"} borderRadius={"xl"} p={6} flexDir={{
            base: "column",
            xl: "row"
        }} align={{
            base: "flex-start",
            xl: "center"
        }} spacing={{
            base: "4",
            xl: "0"
        }}>
            <HStack spacing={{ base: "0", xl: "16" }} flexDir={{
                base: "column",
                xl: "row"
            }} align={{
                base: "flex-start",
                xl: "center"
            }}>
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>Total Portfolio Value</Text>
                        <Icon as='AiOutlineInfoCircle' />
                    </HStack>
                    <Text textStyle={"h2"} fontWeight="bold">₹ 122,315.55</Text>
                </Stack>

                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>Wallet Balance</Text>
                    </HStack>
                    <HStack>
                        <HStack spacing={5}>
                            <Text textStyle={"h2"} fontWeight="bold">22.395425000</Text><Tag fontWeight="bold" colorScheme='gray'>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle={"h2"} fontWeight="bold">₹ 1,300.00</Text><Tag fontWeight="bold" colorScheme='gray'>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>

            <HStack>
                <Button leftIcon={<Icon as={CgPushDown} />}> Deposit</Button>
                <Button leftIcon={<Icon as={CgPushUp} />}> Withdraw</Button>
            </HStack>
        </HStack>
    )
}

export default Portfolio