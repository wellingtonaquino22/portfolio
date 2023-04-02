import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function projects() {
    return (
        <Box
        pb={12}
        data-aos="fade-down"
        id="projects"
            fontFamily={'montserrat'}
            bg={'gray.100'}
            >
            <Flex justifyContent={'center'} fontSize={{lg:'38px', md: '38px', sm:'38px', base: '32px'}}>
                <Text mt={'50px'} color='blue.700'>Projetos</Text>
            </Flex>
            <Box>
                <Flex flexFlow={'row wrap'} fontSize={{lg: '3xl', md: '3xl', sm: '3xl', base: 'md'}} justifyContent={'space-around'} textAlign='center'>
                    <Box data-aos="flip-left"
                     w={{lg: '400px',md: '300px', sm: '300px', base: '300px'}} mt={12} h={{md: '250px', lg: '280px', sm: '250px', base: '250px'}} bg={'gray.300'} cursor={'pointer'}
                        _hover={{
                            transform: 'scale(1.1)',
                            transitionDuration: '0.8s',
                        }}
                        borderRadius={'20px'}
                        boxShadow={'dark-lg'}
                    >
                        <Link as={NextLink} href='https://web-api-movies-react.vercel.app/' target={'_blank'}>
                            <Image src="movie.png" h={'full'} borderRadius={'20px'} />
                        </Link>
                        <Text fontSize={{ lg: '35px', md: '35px', sm: '35px', base: '25px' }}>Movie Api</Text>
                    </Box>
                    <Box data-aos="flip-left"
                     w={{lg: '400px',md: '300px', sm: '300px', base: '300px'}} mt={12} h={{md: '250px', lg: '280px', sm: '250px', base: '250px'}} bg={'gray.300'} cursor={'pointer'}
                        _hover={{
                            transform: 'scale(1.1)',
                            transitionDuration: '0.8s',
                        }}
                        borderRadius={'20px'}
                        boxShadow={'dark-lg'}
                    >
                        <Link as={NextLink} href='https://eletronic-store-4kor2c3kx-wellingtonaquino22.vercel.app/' target={'_blank'}>
                            <Image src="eletronic_store.png" h={'full'} borderRadius={'20px'} />
                        </Link>
                        <Text fontSize={{ lg: '35px', md: '35px', sm: '35px', base: '25px' }}>Eletronic Store</Text>
                    </Box>

                    {/* <Box data-aos="flip-left"
                    pt={'110px'}
                     w={{md: '300px', lg: '400px', sm: '300px', base: '300px'}} mt={16} h={{md: '250px', lg: '280px', sm: '250px', base: '250px'}} bg={'gray.200'} cursor={'pointer'} color={'gray.200'} _hover={{
                        transform: 'scale(1.1)',
                        transitionDuration: '0.8s',
                    }} borderRadius={'20px'} boxShadow={'dark-lg'}

                    >
                        <Link as={NextLink} href='https://eletronic-store-4kor2c3kx-wellingtonaquino22.vercel.app/' target={'_blank'}>
                            <Image src="./eletronic_store.png" h={'full'} borderRadius={'20px'} />
                        </Link>
                        <Text fontSize={{ lg: '35px', md: '35px', sm: '35px', base: '25px' }}>Eletronic Store</Text>
                    </Box> */}

                    <Box data-aos="flip-left"
                    pt={'110px'}
                     w={{md: '300px', lg: '400px', sm: '300px', base: '300px'}} mt={16} h={{md: '250px', lg: '280px', sm: '250px', base: '250px'}} bg={'gray.200'} cursor={'pointer'} color={'gray.200'} _hover={{
                        transform: 'scale(1.1)',
                        transitionDuration: '0.8s',
                    }} borderRadius={'20px'} boxShadow={'dark-lg'}>
                        <Text color={'gray.400'}>
                            <Text color={'gray.400'}>
                                EM BREVE 
                            </Text>
                        </Text>
                    </Box>

                    <Box data-aos="flip-left" w={{md: '300px', lg: '400px', sm: '300px', base: '300px'}} mt={16} h={{md: '250px', lg: '280px', sm: '250px', base: '250px'}}
                        pt={'110px'}
                        bg={'gray.200'}
                        cursor={'pointer'} color={'gray.200'} _hover={{
                            transform: 'scale(1.1)',
                            transitionDuration: '0.8s',
                        }} borderRadius={'20px'} boxShadow={'dark-lg'}>
                        <Text color={'gray.400'}>
                            EM BREVE
                        </Text>
                    </Box>
                </Flex>
            </Box >
        </Box >
    )
}