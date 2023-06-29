import { HStack, Stack, Table, TableCaption, TableContainer, Tag, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TransactionTable = () => {

    const tableData = [
        {
            id: "HD82NA2H",
            date: "24-06-23",
            time: "12:10 PM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer"
            },
            amount: "+₹21,123",
            status: "Processing"
        },
        {
            id: "HD82NA2R",
            date: "24-06-23",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer"
            },
            amount: "+₹51,163",
            status: "Sucessful"
        },
        {
            id: "HD82NA2J",
            date: "24-06-23",
            time: "12:05 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer"
            },
            amount: "+₹71,523",
            status: "Pending"
        },
        {
            id: "HD82NN5K",
            date: "24-06-23",
            time: "04:05 PM",
            type: {
                name: "Sell",
                tag: "BTC"
            },
            amount: "+₹4,556",
            status: "Failed"
        },
        {
            id: "HD82YU25",
            date: "24-06-23",
            time: "01:05 PM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer"
            },
            amount: "+₹45,845",
            status: "Sucessful"
        },
        {
            id: "HD87PZ7G",
            date: "24-06-23",
            time: "11:14 PM",
            type: {
                name: "INR Deposit",
                tag: "Wire Transfer"
            },
            amount: "+₹78,264",
            status: "Procesing"
        },
        {
            id: "HD44HJ2N",
            date: "24-06-23",
            time: "10:12 PM",
            type: {
                name: "Buy",
                tag: "BTC"
            },
            amount: "+₹68,759",
            status: "Pending"
        },
    ]

    const statusColor = {
        Pending: "#797E82",
        Failed: "#EB5757",
        Processing: "#F5A50B",
        Sucessful: "#059669",
    }
    return (
        <TableContainer>
            <Table variant='simple' colorScheme='gray'>
                <Thead>
                        <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody color={"p.black"} >
                    {
                        tableData.map((data) => (
                            <Tr key={data.id}>
                                <Td>
                                    {data.id}
                                </Td>
                                <Td>
                                    <Stack>
                                        <Text>{data.date}</Text>
                                        <Text fontSize={"xs"}>{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack>
                                        <Text>
                                            {data.type.name}
                                        </Text>

                                        <Text fontSize={"xs"} color={"black.60"} >
                                            {data.type?.tag}
                                        </Text>

                                    </Stack>
                                </Td>
                                <Td fontSize={"sm"}>
                                    {data.amount}
                                </Td>

                                <Td fontSize={"sm"} >
                                    <Tag color={"white"} borderRadius={"full"} bg={statusColor[data.status]}>
                                        {data.status}
                                    </Tag>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>


            </Table>
        </TableContainer>
    )
}

export default TransactionTable