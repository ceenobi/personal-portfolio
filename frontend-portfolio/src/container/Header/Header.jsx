import React from 'react'
import {
  Box,
  Flex,
  Container,
  Text,
  VStack,
  LinkOverlay,
  LinkBox,
  Image,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { asset } from '../../constants'

export default function Header({ color }) {
  return (
    <Box py={5}>
      <Container maxW='container.lg'>
        <Flex
          justify='center'
          align='center'
          as={motion.div}
          whileInView={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          mt='10rem'
        >
          <VStack alignItems='center' spacing={0}>
            <Text textStyle='h1' color='' className='text-effect'>
              Code.
            </Text>
            <Text textStyle='h1' className='header-effect'>
              Showcase.
            </Text>
            <Text textStyle='h1' color='#920cd3'>
              Portfolio.
            </Text>
          </VStack>
        </Flex>
        <Box mt={20} mb={6}>
          <Text textStyle='h2' mb={6}>
            <Box as='span' color={color}>
              Hello! I'm{' '}
            </Box>
            Charles&nbsp;
            <Box as='span' fontSize={{ base: '2.5rem', '2xl': '5rem' }}>
              👋
            </Box>
          </Text>
          <Flex align='center' flexWrap='wrap'>
            <Text textStyle='p'>
              I am a{' '}
              <Box as='span' p={3} bg='#FFD803' color='pallete.deepPurple'>
                web developer
              </Box>{' '}
              with special focus on frontend development and web design.&nbsp;
            </Text>
            <HStack spacing='3px'>
              <LinkBox
                title='email me'
                textTransform='uppercase'
                color='pallete.lightPink'
              >
                <LinkOverlay href='mailto:cobimbachu@gmail.com' textStyle='p'>
                  Get in touch
                </LinkOverlay>
              </LinkBox>
              <Image src={asset.email} alt='email' boxSize='20px' />
            </HStack>
          </Flex>
        </Box>

        <LinkBox
          title='download me'
          color='pallete.deepPurple'
          bg='pallete.eggYellow'
          p={3}
          mt={10}
          w='245px'
          textAlign='center'
        >
          <LinkOverlay
            href='https://drive.google.com/file/d/1-Bg8BDxDdNR3EDfzUoYElyV6Qwrg6T3p/view?usp=sharing'
            textStyle='p'
            isExternal
          >
            Click to view my resume
          </LinkOverlay>
        </LinkBox>
      </Container>
    </Box>
  )
}
