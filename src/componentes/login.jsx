import {
  Box,
  Button,
  FormControl,
  FormLabel,
  ChakraProvider,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import theme from "@/app/theme";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        senha,
      });
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.erro || "Erro ao fazer login");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        alignItems="center"
        height="100vh"
        justifyContent="center"
      >
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" mb={6}>
          Bem Vindo(a),
        </Text>
        <Box
          bg="orange.500"
          p={8}
          borderRadius="md"
          boxShadow="md"
          width="400px"
        >
          <Text
            color="black"
            fontWeight="bold"
            fontSize="x-large"
            mb={4}
            textAlign="center"
          >
            FACA SEU LOGIN
          </Text>
          <form onSubmit={handleLogin}>
            <FormControl id="email" mb={4}>
              <FormLabel color="white">Email</FormLabel>
              <Input
                type="email"
                bg="white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="senha" mb={4}>
              <FormLabel color="white">Senha</FormLabel>
              <Input
                type="password"
                bg="white"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormControl>

            {error && <Text color="red.500">{error}</Text>}

            <Button
              type="submit"
              bg="black"
              color="white"
              width="full"
              mt={4}
              _hover={{ bg: "gray.700" }}
            >
              Acessar
            </Button>
          </form>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            <Text color="white">Ou</Text>
          </Box>

          <Link href="/cadastrar">
            <Button
              bg="blue.500"
              color="white"
              width="full"
              mt={4}
              _hover={{ bg: "blue.700" }}
            >
              Cadastrar
            </Button>
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
