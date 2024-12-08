import {
  Box,
  Button,
  Image,
  ChakraProvider,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import theme from "@/app/theme";
import { useContext } from "react";
import { LoginContext } from "@/Context/LoginContext";

export default function MenuBar({ showButtons = true }) {
  const { user, isLoggedIn, handleLogout } = useContext(LoginContext);

  return (
    <ChakraProvider theme={theme}>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between" mt={5}>
          <Flex alignItems="center">
            <Link href="/">
              <Image
                src="/wise-share.png"
                alt="logo"
                width="80px"
                height="80px"
              />
            </Link>
            <Text color="#FF6A16" fontWeight="bold" fontSize="25px"  ml={4}>
              Wise Share
            </Text>
          </Flex>
          <Flex alignItems="center">
            {isLoggedIn && user ? (
              <>
                <Link href="/perfil">
                  {" "}
                  <Text color="white" mr={4} cursor="pointer">
                    Bem-vindo(a), {user.nome}
                  </Text>
                </Link>
                <Button
                  onClick={handleLogout}
                  colorScheme="laranja"
                  fontSize="14px"
                  width="40px"
                  height="30px"
                >
                  SAIR
                </Button>{" "}
              </>
            ) : (
              showButtons && (
                <>
                  <Link href="/cadastrar">
                    <Button colorScheme="laranja" mr={4}>
                      Cadastrar-se
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button colorScheme="laranja">Logar</Button>
                  </Link>
                </>
              )
            )}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
