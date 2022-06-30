import React from 'react'
import {
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react'
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import { exploreRouterMenu } from '../../constants'

export default function Navbar({ colorMode, toggleColorMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  const outerBoxStyles = {
    background: 'rgba(255,255,255,0.25)',
    border: '1px solid rgba(255,255,255,0.18)',
    backdropFilter: 'auto',
    backdropBlur: '2xl',
  }

  const bg = colorMode === 'light' ? 'pallete.lightYellow' : 'pallete.mildDark'

  return (
    <Box
      sx={outerBoxStyles}
      justify='space-between'
      align='center'
      top={0}
      zIndex={2}
      p='1rem 1rem'
      w='100%'
      position='fixed'
    >
      <Flex maxW='container.lg' justify='space-between'>
        <Flex justify='flex-start' align='center' flex='1'>
          <Icon
            as={HiMenuAlt2}
            width={8}
            height={8}
            onClick={isOpen ? onClose : onOpen}
            variant='unstyled'
            display={{ base: 'block', md: 'none' }}
          />
          <HStack
            spacing={6}
            align='center'
            justify='center'
            display={{ base: 'none', md: 'block' }}
          >
            {exploreRouterMenu.map((menu) => (
              <NavLink
                key={menu.sectionId}
                to={`${menu.path}`}
                className={(navData) =>
                  navData.isActive && location.pathname !== '/'
                    ? 'activeLink'
                    : ''
                }
              >
                {menu.sectionLabel}
              </NavLink>
            ))}
          </HStack>
        </Flex>
        <Flex>
          <IconButton
            size='lg'
            colorScheme='grey.400'
            border='1px'
            variant='link'
            icon={colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
            aria-label={'Change Color Theme'}
            onClick={toggleColorMode}
          />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <Drawer
            placement={'left'}
            onClose={onClose}
            isOpen={isOpen}
            size='md'
            as={motion.div}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <DrawerOverlay />
            <DrawerContent bg={bg}>
              <DrawerHeader>
                <Flex justify='space-between'>
                  <Icon as={HiX} w={8} h={8} onClick={onClose} />
                  <IconButton
                    size='lg'
                    colorScheme='grey.400'
                    border='1px'
                    variant='link'
                    icon={
                      colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />
                    }
                    aria-label={'Change Color Theme'}
                    onClick={toggleColorMode}
                  />
                </Flex>
              </DrawerHeader>
              <DrawerBody boxShadow='xl'>
                <VStack spacing={10} mt={2} p={5}>
                  {exploreRouterMenu.map((menu) => (
                    <NavLink
                      key={menu.sectionId}
                      to={`${menu.path}`}
                      onClick={isOpen ? onClose : onClose}
                      className={(navData) =>
                        navData.isActive && location.pathname !== '/'
                          ? 'activeLink'
                          : ''
                      }
                    >
                      {menu.sectionLabel}
                    </NavLink>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  )
}
