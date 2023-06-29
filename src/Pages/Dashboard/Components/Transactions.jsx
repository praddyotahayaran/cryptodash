import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { BsCurrencyRupee } from 'react-icons/bs'
import { SiBitcoinsv } from 'react-icons/si'

const Transactions = () => {
    const transaction = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "₹ 81,266.10",
            timeStamp: "2022-06-09 7:05 PM",
        },
        {
            id: "2",
            icon: SiBitcoinsv,
            text: "BTC Sell",
            amount: "-12.48513391 BTC",
            timeStamp: "2022-06-09 7:05 PM",
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "₹ 81,266.10",
            timeStamp: "2022-06-09 7:05 PM",
        },
    ]
    return (
        <CustomCard >
            <Text mb={"6"} fontSize={"sm"} color={"black.80"}>
                Recent Transactions
            </Text>
            <Stack >
                {transaction.map((transaction, i) => (
                    <Fragment key={transaction.id}>
                        {i != 0 && <Divider />}
                        <Flex gap="4" w={"full"}>
                            <Grid placeItems="center" bg={"black.5"} boxSize={10} borderRadius={"full"}>
                                <Icon as={transaction.icon} />
                            </Grid>
                            <Flex justify={"space-between"} w={"full"}>
                                <Stack spacing={0}>
                                    <Text textStyle={"h6"} >
                                        {transaction.text}
                                    </Text>
                                    <Text fontSize={"sm"} color={"black.40"}>
                                        {transaction.timeStamp}
                                    </Text>
                                </Stack>
                                <Text textStyle={"h6"} >
                                    {transaction.amount}
                                </Text>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))}
            </Stack>
            <Button w="full" colorScheme='gray' mt={5}>
                View All
            </Button>
        </CustomCard>
    )
}

export default Transactions