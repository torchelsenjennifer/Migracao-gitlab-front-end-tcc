"use client";
import CardMentor from "@/componentes/cardMentor";
import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";
import { useEffect, useState } from "react";
import theme from "@/app/theme";
import { ChakraProvider, Box, SimpleGrid, Center } from "@chakra-ui/react";

const Listagem = () => {
  const [mentores, setMentores] = useState([]);

  useEffect(() => {
    async function getMentores() {
      const response = await fetch(`http://localhost:3001/mentores`, {
        method: "GET",
      });
      const retorno = await response.json();
      setMentores(retorno);
    }
    getMentores();
  }, []);

  const listaMentores = mentores.map((mentor) => (
    <CardMentor key={mentor.id} mentor={mentor} />
  ));

  return (
    <main>
      <ChakraProvider theme={theme}>
        <MenuBar showButtons={false} />
        <Center>
          <Box maxWidth="1200px" padding="4">
            <SimpleGrid columns={3} spacing="4">
              {listaMentores}
            </SimpleGrid>
          </Box>
        </Center>
        <Footer />
      </ChakraProvider>
    </main>
  );
};

export default Listagem;
