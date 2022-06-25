import { useColorModeValue } from '@chakra-ui/react'

export default function useColors() {
  const cols = [
    useColorModeValue('#FFE69A', '#400a0a'),
    useColorModeValue('#ECDBBA', '#112B3C'),
    useColorModeValue('pallete.eggYellow', '#B05E27'),
    useColorModeValue('#CEE5D0', '#334756'),
    useColorModeValue('#E9A6A6', '#3F3351'),
  ]
  return [cols]
}
