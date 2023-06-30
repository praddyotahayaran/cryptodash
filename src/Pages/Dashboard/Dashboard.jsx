import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import Portfolio from './Components/Portfolio'
import Price from './Components/Price'
import { Grid, GridItem } from '@chakra-ui/react'
import Transactions from './Components/Transactions'
import InfoCard from './Components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)",
      }} gap={6}
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
          <Portfolio />
        </GridItem>

        <GridItem colSpan={1}>
          <Price />
        </GridItem>

        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="Visual.svg"
            tagText="Loan"
            inverted={false}
            text={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"} />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgUrl="Visual2.svg"
            tagText="Contact"
            text={"Learn more about our real estate, mortgage, and  corporate account services"} />
        </GridItem>

      </Grid>
      
    </DashboardLayout>
  )
}

export default Dashboard