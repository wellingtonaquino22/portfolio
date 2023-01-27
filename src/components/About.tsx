import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Box data-aos="fade-down">
            <Box id="about" bg={''} pb={50} pt={50} fontFamily={'monteserrat'}>
                <Flex justifyContent={'center'} fontSize={{ lg: '50px', md: '50px', sm: '40px', base: '35px' }}>
                    <Text>Sobre Mim</Text>
                </Flex>
                <HStack justifyContent={'center'} pt={30} fontSize={{ lg: '35px', md: '35px', sm: '30px', base: '20px' }}>
                    <Box w={'75%'}>
                        <Text
                            fontFamily={'monteserrat'}
                            color={'#275572'}>
                            Olá! Eu Sou Wellington, Tenho 24 anos e moro em Vitória de Santo Antão/PE,
                            Sou Desenvolvedor, Graduando o Curso de Sistemas Da Informação,
                            Atualmente Trabalho com Desenvolvimento Web, utilizando Tecnologias como JavaScript, TypeScript, ReactJs e NextJs dentre outras,
                            contato com outras Tecnologias como Docker, Graphql, Git/Github , Etc.
                            Movido por uma forte curiosidade e vontade de fazer sempre mais,Fiquem a conhecer um pouco do meu trajecto Profissional.
                        </Text>
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}