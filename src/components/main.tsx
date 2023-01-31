import { Button, Box, Image, Text, Link, Flex} from "@chakra-ui/react";
import NextLink from 'next/link'

export function Main() {
    return (
        <Box
            backgroundImage={'fundo-portfolio.jpg'}
            h={{lg: '780px',md: '870px',sm: '910px', base: '870px'}}
            fontFamily={'montserrat'}>
            <Flex direction={{ lg: 'row', md: 'column', sm: 'column', base: 'column'}} 
            pt={{lg: '190px', md: '130px', sm: '150px', base: '150px'}}
            >
                <Box ml={{lg:'40px', md: '40px', sm: '40px', base: '10px'}}>
                    <Text
                        fontSize={{lg: '42px',md: '42px', sm: '40px', base: '35px'}}
                        color={'#275572'}>
                        OLÁ MEU NOME É WELLINGTON</Text>
                    <Text
                         fontSize={{lg: '27px',md: '27px', sm: '25px', base: '23px'}}
                        color={'black'}>
                        Sou Desenvolvedor Front-End</Text>
                        <Flex pt={'40px'} flexWrap={'wrap'}
                    justifyContent={{lg: "initial",md: 'center', sm: 'center', base: 'center'}} gap={'28px'}>
                        <Button
                            fontSize={{lg:'22px', md: '22px', sm:'22px', base: '18px'}}
                            w={'250px'}
                            borderRadius={'50px'}
                            variant={'outline'}
                            bg={'transparent'}
                            _hover={{ bg: 'gray' }}
                            padding={{lg:'50px', md: '50px', sm:'50px', base: '30px'}}
                            color={'gray.700'}>
                            <Link as={NextLink} href='#projects' style={{ textDecoration: 'inherit' }}>
                                Meus Projetos
                            </Link>
                        </Button>
                        <Button
                            fontSize={{lg:'22px', md: '22px', sm:'22px', base: '18px'}}
                            w={'250px'}
                            borderRadius={'50px'}
                            variant={'outline'}
                            bg={'transparent'}
                            _hover={{ bg: 'gray' }}
                            padding={{lg:'50px', md: '50px', sm:'50px', base: '30px'}}
                            color={'gray.700'}
                        >
                            <Link as={NextLink} href='#about' style={{ textDecoration: 'inherit' }}>
                                Sobre Mim
                            </Link>
                        </Button>
                    </Flex>
                </Box>
                <Box m={{lg:'auto', md: '60px auto auto',sm: '40px auto auto',base: '40px auto auto'}}>
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