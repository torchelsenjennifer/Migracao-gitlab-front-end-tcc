"use client";

import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";
import { useParams } from "next/navigation.js";
import { useState, useEffect } from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Image,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import theme from "@/app/theme";
import config from "../../../config.js";
import { GraduationCap, Building2, BriefcaseBusiness } from "lucide-react";

const Mentor = () => {
  const [mentorDados, setMentorDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    async function getMentorDados() {
      try {
        const response = await fetch(`http://localhost:3001/mentores/${id}`, {
          method: "GET",
        });
        const retorno = await response.json();
        setMentorDados(retorno);
      } catch (error) {
        console.error("Erro ao buscar os dados do mentor:", error);
      } finally {
        setLoading(false);
      }
    }

    getMentorDados();
  }, [id]);

  useEffect(() => {
    if (mentorDados && mentorDados.calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [mentorDados]);

  if (loading) {
    return (
      <ChakraProvider theme={theme}>
        <MenuBar showButtons={false} />
        <Flex justify="center" align="center" minHeight="100vh" bg="#1a202c">
          <Spinner size="xl" color="orange.500" />
        </Flex>
        <Footer />
      </ChakraProvider>
    );
  }

  if (!mentorDados) {
    return (
      <ChakraProvider theme={theme}>
        <MenuBar showButtons={false} />
        <Flex justify="center" align="center" minHeight="100vh" bg="#1a202c">
          <Text fontSize="2xl" color="white">
            Não foi possível carregar os dados do mentor.
          </Text>
        </Flex>
        <Footer />
      </ChakraProvider>
    );
  }

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
        <Box bg="orange.500" p={10} textAlign="center" width="90%">
          <Flex  alignItems="center">
            <Image
              src={`${config.API_URL}/uploads/${mentorDados.foto}`}
              alt="Foto do Profissional"
              boxSize="150px"
              borderRadius="50%"
              height="200px"
              width="200px"
              mr={8}
            />
            <Box>
              <Text
                textAlign="left"
                fontSize="xl"
                mb={4}
                color="black"
                fontWeight="bold"
              >
                {mentorDados.nome}
              </Text>
              <Grid templateColumns="30px 1fr" gap="2" textAlign="left" mb="5">
                <GridItem>
                  <BriefcaseBusiness />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {mentorDados.profissao}
                  </Text>
                </GridItem>
                <GridItem>
                  <Building2 />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {mentorDados.empresa}
                  </Text>
                </GridItem>
                <GridItem>
                  <GraduationCap />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {mentorDados.formacao}
                  </Text>
                </GridItem>
              </Grid>
              <Box bg="black" p={6}  mx="auto" borderRadius="10px">
                <Text color="orange.300" textAlign="left" fontSize="lg" fontWeight="bold" mb={4}>
                  Sobre o Mentor
                </Text>
                <Text color="white" textAlign="justify" fontSize="md">
                  {mentorDados.descricao}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Box bg="orange.500" textAlign="center" width="90%">
          {mentorDados.calendly && (
            <div
              className="calendly-inline-widget"
              data-url={mentorDados.calendly}
              style={{ minWidth: "320px", height: "700px", marginTop:"10px" }}
            ></div>
          )}
        </Box>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
};

export default Mentor;
