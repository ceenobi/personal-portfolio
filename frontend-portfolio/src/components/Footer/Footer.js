import React from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  VStack,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Link
} from '@chakra-ui/react'
import { GoLinkExternal } from 'react-icons/go'
import { MdMail, MdOutlinePhoneAndroid } from 'react-icons/md'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function Footer() {
  const linkStyles = {
    a: {
      _hover: { color: 'red.800', textDecoration: 'none' },
    },
  }
  return (
    <Box mt='5rem' py={5}>
      <Container maxW='container.lg'>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
          sx={linkStyles}
        >
          <VStack spacing='10px' mb={4}>
            <Text textStyle='p' fontWeight='bold'>
              Info
            </Text>
            <VStack mt={4}>
              <Text as={ReactRouterLink} to='/'>
                Home
              </Text>
              <Text as={ReactRouterLink} to='/about'>
                About
              </Text>
            </VStack>
          </VStack>
          {/* <VStack spacing='10px' mb={4}>
            <Text textStyle='p' fontWeight='bold'>
              Article
            </Text>
            <VStack mt={4}>
              <Text as={ReactRouterLink} to='/#'>
                Blog
              </Text>
              <Text as={ReactRouterLink} to='/#'>
                Wordpress
              </Text>
            </VStack>
          </VStack> */}
          <VStack spacing='10px' mb={4}>
            <Text textStyle='p' fontWeight='bold'>
              Hire me
            </Text>
            <VStack mt={4}>
              <Link href='mailto:cobimbachu@gmail.com' alignItems='center'>
                <HStack spacing='4px'>
                  <Icon as={MdMail} boxSize='20px' />
                  <Text> cobimbachu@gmail.com</Text>
                </HStack>
              </Link>
              <Link href='tel: +2348132793245' alignItems='center'>
                <HStack spacing='4px'>
                  <Icon as={MdOutlinePhoneAndroid} boxSize='20px' />
                  <Text>+2348132793245</Text>
                </HStack>
              </Link>
            </VStack>
          </VStack>
          <VStack spacing='10px' mb={4}>
            <Text textStyle='p' fontWeight='bold'>
              Social
            </Text>
            <VStack spacing='10px' mt={4}>
              <HStack>
                <LinkBox>
                  <LinkOverlay
                    href='https://www.twitter.com/ceenobii'
                    isExternal
                  >
                    Twitter
                    <Icon as={GoLinkExternal} mx='2px' />
                  </LinkOverlay>
                </LinkBox>
              </HStack>
              <HStack>
                <LinkBox alignItems='center'>
                  <LinkOverlay href='https://github.com/ceenobi' isExternal>
                    Github
                    <Icon as={GoLinkExternal} mx='2px' />
                  </LinkOverlay>
                </LinkBox>
              </HStack>
              <HStack>
                <LinkBox>
                  <LinkOverlay
                    href='https://www.linkedin.com/in/charles-mbachu-40bb66173/'
                    isExternal
                  >
                    LinkedIn
                    <Icon as={GoLinkExternal} mx='2px' />
                  </LinkOverlay>
                </LinkBox>
              </HStack>
            </VStack>
          </VStack>
        </Grid>
        <Flex
          w='100%'
          p={1}
          mt={6}
          direction='row'
          justify='center'
          align='center'
        >
          <HStack spacing='16px'>
            <Text textTransform='uppercase'>@2022 Cobi</Text>
            <Text textTransform='uppercase'>All rights reserved</Text>
            <Text textTransform='uppercase'>Powered by Sanity</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
