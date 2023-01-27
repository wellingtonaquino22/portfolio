import { Box, Button, Flex,Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ButtomHome() {

    return(
        <Box>
        <Flex justifyContent={'center'} p={'80px'} fontFamily={'montserrat'}>
            <Button colorScheme='gray' size='lg'>
            <Link as={NextLink} href='#topo' style={{textDecoration: 'inherit'}}>
                INICIO
            </Link>
            </Button>
        </Flex>
        </Box>
    )

}
