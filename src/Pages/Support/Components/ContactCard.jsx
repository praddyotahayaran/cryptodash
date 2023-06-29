import React from 'react'
import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'


const ContactCard = () => {
    return (
        <Card p={6} borderRadius={"1rem"} flexGrow={1}>
            <Stack spacing={6}>
                <Text fontWeight={"medium"}>
                    You will receive response within 34 hours of time of submit.
                </Text>

                <HStack>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Enter your name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Surename</FormLabel>
                        <Input placeholder='Enter your surename' />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='Email' placeholder='Enter your Email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder='Enter your Message' />
                </FormControl>
                <Checkbox defaultChecked >
                    <Text fontSize={'xs'}>
                        I agree with
                        <Box as='span' color={"p.purple"}>Terms & Conditions.</Box>
                    </Text>
                </Checkbox>
                <Stack>
                    <Button fontSize={'sm'}>
                        Send a Message
                    </Button>
                    <Button fontSize={'sm'} colorScheme='gray'>
                        Book a Meeting
                    </Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ContactCard