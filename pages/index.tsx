import { background, Box,Button,color,Flex,HStack, Image, Text } from '@chakra-ui/react'
import Headc from '../src/components/Header'
import Aboutc from '../src/components/About'

export default function Home() {
  return (
    <>
    <Headc/>
  <Box className='img' position={'relative'}>
    <Image src='fundo-portfolio.jpg' 
    w={'full'}
    h={'700px'}/>
    <Text
    fontFamily={'Proxima Nova'} 
    position={'absolute'}
    top={'170px'}
    fontSize={'50px'}
    color={'#275572'}
    >OLÁ MEU NOME É WELLINGTON</Text>
    <Text
    fontFamily={'Proxima Nova'} 
    position={'absolute'}
    top={'250px'}
    fontSize={'30px'}
    color={'black'}
    >Sou Desenvolvedor Front-End Junior</Text>
  </Box>
    <Box>
    <Button
      size={'lg'}
      position={'absolute'}
      top={'450px'}
      borderRadius={'50px'}
      variant={'outline'}
      bg={'transparent'}
      _hover={{bg: 'gray'}}
      >
      Meus Projetos
    </Button>
    <Button
      size={'lg'}
      position={'absolute'}
      top={'450px'}
      left={'200px'}
      borderRadius={'50px'}
      variant={'outline'}
      bg={'transparent'}
      _hover={{bg: 'gray'}}
      >
      Sobre Mim
    </Button>
    </Box>
    <Aboutc/>
  </>
  )
}
