"use client";

import { Box, Flex, Text, ChakraProvider, useToast } from "@chakra-ui/react";
import { useState } from "react";
import theme from "@/app/theme";
import config from "../../config.js";
import MenuBar from "@/componentes/menubar.jsx";
import Footer from "@/componentes/footer";
import { Medal, QrCode } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Premium() {
  const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento
  const toast = useToast(); // Para exibir notificações
  const router = useRouter(); // Cria o router

  // Função para processar o clique no QR Code
  const setMentorPremium = async () => {
    if (loading) return; // Impede cliques múltiplos enquanto processa

    setLoading(true); // Define como carregando


	const token = localStorage.getItem("token"); // Substitua "token" pelo nome exato usado ao salvar o JWT

	if (!token) {
	  throw new Error("Token de autenticação não encontrado.");
	}



    try {
      const response = await fetch(`${config.API_URL}/mentor/premium`, {
        method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`, // Incluindo o token JWT no cabeçalho
		  },
      });

      if (response.ok) {
        toast({
          title: "Pagamento processado com sucesso!",
          description: "Você será VIP dentro de algumas horas.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
		router.push("/perfil");
      } else {
        toast({
          title: "Erro no processamento.",
          description: "Por favor, tente novamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Erro ao processar o pagamento:", error);
      toast({
        title: "Erro de conexão.",
        description: "Não foi possível conectar ao servidor.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <MenuBar showButtons={false} />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="25px"
        mb="25px"
      >
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" mt="27px">
          Torne-se um Mentor Premium
        </Text>
        <Box
          bg="orange.500"
          p={10}
          textAlign="center"
          width="50%"
          mt="50px"
          minHeight="500px"
          mb="52px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex mb="4" alignItems="center">
            <Medal size="50px" color="black" />
            <Text
              color="#FFFFFF"
              fontWeight="bold"
              fontSize="lg"
              ml="4"
              textAlign="left"
            >
              Benefícios de tornar-se um Mentor Premium
            </Text>
          </Flex>
          <Text color="#FFFFFF" textAlign="left" mb="4">
            1º Prioridade nas buscas por área
            <br />
            2º Destaque nas campanhas de marketing
          </Text>
          <Flex mt="6" justifyContent="space-between" alignItems="center">
            <Box flex="1">
              <Text color="#FFFFFF">
                Com isso, realize o pagamento a partir do QR code ao lado e nos
                encaminhe o comprovante por email, e pronto! Você será VIP
                dentro de algumas horas!
              </Text>
            </Box>
            <Box flex="0 0 auto" ml="6">
              <QrCode
                size="200px"
                color="black"
                cursor="pointer"
                onClick={setMentorPremium} // Chamando a função ao clicar
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}
