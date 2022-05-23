import React from 'react'
import { Box, Container, Text, Flex} from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom'

export default function NoPage() {
  const navigate = useNavigate()
  return (
    <Box py={5}>
      <Container maxW='container.lg'>
        <Flex justifyContent='center' mt={4}>
          <Text textStyle='h2' mt='4rem' p={4}>
            Page not found
          </Text>
        </Flex>
        <Flex justify='center' mt={4} py={5}>
          <Text textStyle='p' align='center'>
            Ooops! The page you are looking for does not exist.
          </Text>
        </Flex>
        <Flex justify='center' mt={4} py={5}>
          <Text textStyle='p'>
            <Box
              as='span'
              color='pallete.lightPink'
              onClick={() => navigate('/')}
              cursor='pointer'
            >
              Go
            </Box>
            &nbsp;home
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}
