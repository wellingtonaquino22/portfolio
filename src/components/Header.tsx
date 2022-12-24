import { Flex, HStack,Box } from "@chakra-ui/react";

export default function Headc (){
    
return(
<Flex bg={'#1D1D1D'} color={'white'} align={'center'} h={'100px'} w={'full'}>
<HStack p={'50'} cursor={'pointer'} fontSize={'2xl'} fontFamily={'montserrat'}>
<Box>Projetos</Box>
<Box>Hello</Box>
<Box>About</Box>
</HStack>
</Flex>
)
}