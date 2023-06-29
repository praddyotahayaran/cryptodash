import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import DashboardLayout from '../../Components/DashboardLayout'
import TransactionTable from './Components/TransactionTable'
import { BiSearchAlt } from 'react-icons/bi'

const Transaction = () => {

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 35,
    },
    {
      name: "Trade",
      count: 50,
    },
  ]


  return (
    <DashboardLayout title= 'Transactions'>
      <Stack h={ "calc(100vh - 100px)" }>

      
      <Flex justify={"end"} mb={5}>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>

      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList display={"flex"} w={"full"}
            justifyContent={"space-between"}
            gap={4} pt="4" px={6}
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} pb={5} gap={4}>
                  {tab.name} <Tag colorScheme='gray' borderRadius={"full"}>{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW={"200px"} >
              <InputLeftElement pointerEvents='none'>
                <BiSearchAlt color='gray.300' />
              </InputLeftElement>
              <Input type='search' placeholder='Search' />
            </InputGroup>
          </TabList>

          <TabPanels >
            <TabPanel >
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
      </Stack>
    </DashboardLayout>
  )
}

export default Transaction