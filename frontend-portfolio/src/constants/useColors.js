import { useColorModeValue } from '@chakra-ui/react'

export default function useColors() {
  const cols = [
    useColorModeValue('#400a0a', '#FFE69A'),
    useColorModeValue('#112B3C', '#ECDBBA'),
    useColorModeValue('#B05E27', 'pallete.eggYellow'),
    useColorModeValue('#334756', '#CEE5D0'),
    useColorModeValue('#3F3351', '#E9A6A6'),
  ]
  return [cols]
}
