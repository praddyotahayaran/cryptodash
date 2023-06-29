import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import SupportCard from './Components/SupportCard'
import ContactCard from './Components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { AiFillMessage } from 'react-icons/ai'
import InfoCard from '../Dashboard/Components/InfoCard'
import { Stack } from '@chakra-ui/react'


const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing={'5rem'}>
        <SupportCard icon={IoMdMail} leftComponent={<ContactCard />} title="Contact Us"
          text="Have a question or just want to know more? Feel free to 
      reach out to us." />

        <SupportCard icon={AiFillMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              imgUrl="/Visual2.svg"
              tagText="Contact"
              text={"Learn more about our real estate, mortgage, and  corporate account services"} />
          }
          title="Live Chat"
          text="Don't have time to wait for the answer? Chat with us now." />

      </Stack>
    </DashboardLayout>
  )
}

export default Support