import { Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

import routes from './routes/configRoutes'
import Footer from './components/Footer/Footer'
import { Loading } from './constants'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const color = useColorModeValue('pallete.lightPink', 'pallete.lightBlue')
  const bg = useColorModeValue('pallete.lightYellow', 'pallete.deepPurple')
  return (
    <>
      <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box
        as={motion.div}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                exact
                element={
                  <Suspense fallback={<Loading />}>
                    <route.element color={color} bg={bg} />
                  </Suspense>
                }
              />
            )
          })}
        </Routes>
        <Footer />
      </Box>
    </>
  )
}

export default App
