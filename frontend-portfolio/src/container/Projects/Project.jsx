import React, { useEffect, useState } from 'react'
import {
  Box,
  Image,
  Link,
  Icon,
  Text,
  Heading,
  Flex,
  VStack,
  HStack,
  Container,
  Grid,
  useStyleConfig,
} from '@chakra-ui/react'
import { GoLinkExternal } from 'react-icons/go'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client'
import { useColors, Loading } from '../../constants'

const Card = React.forwardRef((props, ref) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('Card', { variant })

  return <Box __css={styles} {...rest} ref={ref} />
})

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filterWork, setFilterWork] = useState([])
  const [works, setWorks] = useState([])
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [loading, setLoading] = useState(false)
  const [cols] = useColors()
  const ref = React.createRef()

  const hoverBoxStyle = {
    _hover: { color: 'lightBlue' },
  }

  useEffect(() => {
    setLoading(true)
    const query = '*[_type == "works"] | order(title)'
    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
      setLoading(false)
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <Box py={5} ref={ref}>
      <Container maxW='container.lg'>
        <Box mt='5rem'>
          <Heading as='h4' fw='bold' letterSpacing='0.04em'>
            Practise
          </Heading>
          <Text textStyle='p'>Project Hands-on</Text>
        </Box>
        <Flex
          direction='row' 
          justify='center'
          align='center'
          flexWrap='wrap'
          m='4rem 0 2rem'
        >
          {['Web App', 'UI/UX', 'React Js', 'Next Js', 'All'].map(
            (item, index) => (
              <Box
                textStyle='p'
                fontWeight='bold'
                key={index}
                display='flex'
                justifyContent='center'
                alignItems='center'
                onClick={() => handleWorkFilter(item)}
                cursor='pointer'
                className={`project-works ${
                  activeFilter === item ? 'project-works-active' : ''
                }`}
              >
                {item}
              </Box>
            )
          )}
        </Flex>
        {loading ? (
          <Loading />
        ) : (
          <Grid
            templateColumns={{
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(3, 1fr)',
              '2xl': 'repeat(3, 1fr)',
              base: 'repeat(1, 1fr)',
            }}
            gap={6}
            py='5rem'
            as={motion.div}
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          >
            {filterWork.map((work, index) => (
              <Card
                bg={cols[index] || cols[0]}
                variant='rounded'
                position='relative'
                key={index}
              >
                <Image
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                  h='230px'
                  w='100%'
                  borderRadius='md'
                  objectFit='cover'
                  mb={2}
                />

                <VStack alignItems='left' spacing='6px' p={3}>
                  <HStack spacing='2px'>
                    <Link
                      textStyle='p'
                      fontWeight='bold'
                      href={work.projectLink}
                      isExternal
                    >
                      {' '}
                      {work.title}
                      <Icon as={GoLinkExternal} />
                    </Link>
                  </HStack>
                  <Text textStyle='sm' textAlign='start'>
                    {' '}
                    {work.description}
                  </Text>
                </VStack>
                <Box mt={4} p={2}>
                  <Flex
                    justify='space-between'
                    align='center'
                    position='absolute'
                    bottom='0px'
                    right='22px'
                    left='22px'
                  >
                    <Text textStyle='sm'>
                      {work.tags[0]} | {work.tags[1]}
                    </Text>
                    <Link href={work.codeLink} isExternal>
                      <Icon
                        as={AiFillGithub}
                        boxSize='40px'
                        sx={hoverBoxStyle}
                      />
                    </Link>
                  </Flex>
                </Box>
              </Card>
            ))}
          </Grid>
        )}
        <Flex justify={{ base: 'center', lg: 'flex-end' }} alignItems='center'>
          <HStack spacing='2px' _hover={{ color: 'pallete.lightPink' }}>
            <Link
              textStyle='p'
              fontWeight='bold'
              href='https://wwww.github.com/ceenobi'
              isExternal
            >
              click here to see more
              <Icon as={GoLinkExternal} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
