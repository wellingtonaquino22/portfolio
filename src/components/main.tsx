import { Button, Box, Image, Text, Link, Flex} from "@chakra-ui/react";
import NextLink from 'next/link'

export function Main() {
    return (
        <Box
            backgroundImage={'fundo-portfolio.jpg'}
            h={{lg: '900px',md: '870px',sm: '910px', base: '870px'}}
            fontFamily={'montserrat'}>
            <Flex direction={{ lg: 'row', md: 'column', sm: 'column', base: 'column'}} 
            pt={{lg: '240px', md: '130px', sm: '150px', base: '150px'}}
            >
                <Box ml={{lg:'40px', md: '40px', sm: '40px', base: '10px'}}>
                    <Text
                        fontSize={{lg: '50px',md: '50px', sm: '40px', base: '35px'}}
                        color={'#275572'}>
                        OLÁ MEU NOME É WELLINGTON</Text>
                    <Text
                        fontSize={{lg: '30px',md: '30px', sm: '30px', base: '30px'}}
                        color={'black'}>
                        Sou Desenvolvedor Front-End</Text>
                    <Flex fontSize={{lg:'25px', md: '25px', sm:'25px', base: '18px'}} pt={'40px'} flexWrap={'wrap'}
                    justifyContent={{lg: "initial",md: 'center', sm: 'center', base: 'center'}} gap={'30px'}>
                        <Button
                            size={'20px'}
                            w={'250px'}
                            borderRadius={'50px'}
                            variant={'outline'}
                            bg={'transparent'}
                            _hover={{ bg: 'gray' }}
                            padding={{lg:'40px', md: '40px', sm:'40px', base: '20px'}}
                            color={'gray.700'}>
                            <Link as={NextLink} href='#projects' style={{ textDecoration: 'inherit' }}>
                                Meus Projetos
                            </Link>
                        </Button>
                        <Button
                            w={'250px'}
                            size={'20px'}
                            borderRadius={'50px'}
                            variant={'outline'}
                            bg={'transparent'}
                            _hover={{ bg: 'gray' }}
                            padding={{lg:'40px', md: '40px', sm:'40px', base: '20px'}}
                            color={'gray.700'}
                        >
                            <Link as={NextLink} href='#about' style={{ textDecoration: 'inherit' }}>
                                Sobre Mim
                            </Link>
                        </Button>
                    </Flex>
                </Box>
                <Box 
                // bg={{ lg: 'red.200' ,md: 'green.200', sm: 'blue.200', base: 'orange.100'}}
                        m={{lg: 'auto', md: '60px auto auto',sm: '40px auto auto',base: '40px auto auto'}}
                        >
                    <Box
                        w={{ lg:'450px', md: '330px', sm: '260px', base: '260px'}}  
                        >
                        <Image src='profile.jpg'
                            borderRadius={'50%'}
                        />
                    </Box>
                </Box>

            </Flex>
            {/* Box Dentro da imagem */}
        </Box>
    )
}