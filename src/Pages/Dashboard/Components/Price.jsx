import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { BsArrowUpRight } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Price = () => {

    const timeStamps = ["7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM"]

    return (
        <CustomCard>
            <Flex justify={"space-between"} align={"center"}>
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>Wallet Balance</Text>
                    </HStack>
                    <HStack>
                        <HStack>
                            <Text textStyle={"h2"} fontWeight="bold">22.395425000</Text>
                            <HStack color="green.500">
                                <Icon as={BsArrowUpRight} />
                                <Text fontSize={"sm"} fontWeight="bold">22%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>

                <HStack>
                    <Button leftIcon={<Icon as={AiFillPlusCircle} />}> Buy</Button>
                    <Button leftIcon={<Icon as={AiFillMinusCircle} />}> Sell</Button>
                </HStack>
            </Flex>

            <Tabs variant='soft-rounded' colorScheme='green'>
                <Flex justify={"end"}>
                    <TabList bg={"black.5"} p={"3px"}>
                        {
                            ["1H", "1D", "1W", "1M"].map((tab) => (
                                <Tab _selected={{
                                    bg: "white"
                                }} key={tab} fontSize={"sm"} p={"6px"} borderRadius={"4"}>
                                    {tab}
                                </Tab>
                            ))}
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanels>
                        <Image w={"100%"} src='Graph.svg' mt={"3rem"} />
                        <HStack justify={"space-between"}>
                            {timeStamps.map((timeStamps) => (
                                <Text key={timeStamps} fontSize={"sm"} color={"black.80"}>
                                    {timeStamps}
                                </Text>
                            ))}
                        </HStack>
                    </TabPanels>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>


        </CustomCard>
    )
}

export default Price