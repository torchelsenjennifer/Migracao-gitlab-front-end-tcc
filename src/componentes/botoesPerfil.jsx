import { Box, Button, ChakraProvider, Flex, Text, Link } from '@chakra-ui/react';
import { Pencil, Award } from 'lucide-react';
import theme from '@/app/theme';
import { useContext } from 'react';
import { LoginContext } from '@/Context/LoginContext';

export default function BotoesPerfil({ showButtons = true }) {
    const { user } = useContext(LoginContext);

    if (!user) {
        return (
            <Text color='#FFF' fontSize='xl'>
                Você precisa estar logado para acessar essas opções.
            </Text>
        );
    }

    return (
        <ChakraProvider theme={theme}>
            <Flex direction='column' alignItems='center' height='100vh'>
                <Text color='#FFFF' fontWeight='bold' fontSize='x-large' mb={2} mt={15}>
                    Bem Vindo(a)
                </Text>

                <Text color='#FFF' fontWeight='bold' fontSize='x-large' mb={6}>
                    Opções Disponíveis
                </Text>

                <Link href={`/editar/${user.id}`}>
                    <Button
                        colorScheme='laranja'
                        fontSize='40px'
                        width='400px'
                        height='80px'
                        leftIcon={<Pencil size={45} color='black' />}
                        m={4}
                    >
                        Editar Perfil
                    </Button>
                </Link>

                <Link href='/premium'>
                    <Button
                        colorScheme='laranja'
                        fontSize='40px'
                        width='400px'
                        height='80px'
                        leftIcon={<Award size={50} color='black' />}
                        m={4}
                    >
                        Ser Premium
                    </Button>
                </Link>
            </Flex>
        </ChakraProvider>
    );
}