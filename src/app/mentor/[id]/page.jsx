"use client";

import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";
import { useParams } from "next/navigation.js";
import { useState, useEffect } from "react";
import { ChakraProvider, Flex, Box, Text, Image } from "@chakra-ui/react";
import theme from "@/app/theme";

const Mentor = () => {
  const [mentorDados, setMenorDados] = useState();
  const params = useParams();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    async function getMentorDados() {
      const response = await fetch(
        `http://localhost:3001/mentores/${params.id}`,
        {
          method: "GET",
        }
      );
      const retorno = await response.json();
      //console.log(retorno);
      setMenorDados(retorno);
    }
    getMentorDados();
  }, []);
  console.log(mentorDados);
  return (
    <ChakraProvider theme={theme}>
      <MenuBar showButtons={false} />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="100px"
        mb="50px"
      >
        <Box bg="orange.500" p={10} textAlign="center" width="90%">
          <Flex justifyContent="space-between" alignItems="center">
            <Image
              src="/profissionalA.jpg"
              alt="Foto do Profissional"
              boxSize="150px"
              borderRadius="full"
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
                Jennifer
              </Text>
              <Box bg="black" p={6} textAlign="center" mx="auto">
                <Text color="white" fontSize="md">
                  Sou desenvolvedor back-end com 4 anos de experiencia na
                  criacao de sistemas robustos e escalaveis. Especializada em
                  linguagens como Python, Java e Node.js, e ainda tenho um
                  profundo conhecimento em frameworks como Flask, Spring Boot e
                  Express.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Box bg="orange.500" p={10} textAlign="center" width="90%">
          {mentorDados && (
            <div
              className="calendly-inline-widget"
              data-url={mentorDados.calendly}
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          )}
        </Box>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
};

export default Mentor;
