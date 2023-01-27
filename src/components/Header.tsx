import { Flex, HStack, Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Headc() {

    return (
        <Box
        id="topo">
            <Flex
                position={'fixed'}
                opacity={'0.6'}
                bg={'#1D1D1D'}
                color={'white'}
                align={'center'}
                h={'100px'}
                w='full'
                justifyContent={'center'}
            >
                <HStack p={'50'} fontSize={{lg: '3xl', md: '3xl', sm: '3xl', base: '20px'}} fontFamily={'montserrat'} justifyContent={'space-around'} flexWrap={'wrap'} spacing={'10'}>
                    <Box>
                    <Link as={NextLink} href='#projects' style={{ textDecoration: 'inherit' }} cursor={'pointer'} _hover={{ bg: 'gray' }} borderRadius={'10px'}>
                       Projetos
                    </Link>
                    </Box>
                    <Box>
                    <Link as={NextLink} href='#Habilits' style={{ textDecoration: 'inherit' }} cursor={'pointer'} _hover={{ bg: 'gray' }} borderRadius={'10px'}>
                        Habilidades
                    </Link>
                    </Box>
                    <Box>
                    <Link as={NextLink} href='#about' style={{ textDecoration: 'inherit' }} cursor={'pointer'} _hover={{ bg: 'gray' }} borderRadius={'10px'}>
                        Sobre
                    </Link>
                    </Box>
                    <Box>
                    <Link as={NextLink} href='#contact' style={{ textDecoration: 'inherit' }} cursor={'pointer'} _hover={{ bg: 'gray' }} borderRadius={'10px'}>
                        Contato
                    </Link>
                    </Box>
                </HStack>
            </Flex>
        </Box>
    )
}