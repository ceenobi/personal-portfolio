import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
  return (
    <Flex justifyContent='center' align='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='pallete.deepPurple'
        color='pallete.eggYellow'
        size='xl'
        label='loading'
      />
    </Flex>
  )
}
