"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Importando useParams para acessar o parâmetro dinâmico
import CardMentor from "@/componentes/cardMentor";
import Footer from "@/componentes/footer";
import MenuBar from "@/componentes/menubar";
import theme from "@/app/theme";
import { ChakraProvider, Box, SimpleGrid, Center } from "@chakra-ui/react";
import config from '../../../config.js';

const Listagem = () => {
  const [mentores, setMentores] = useState([]);
  const { id } = useParams();  // Pegando o parâmetro 'id' da URL

  useEffect(() => {
    if (!id) return;  // Garante que o 'id' existe antes de fazer a requisição
    async function getMentores() {
      const response = await fetch(`${config.API_URL}/mentores?area_id=${id}`, {
        method: "GET",
      });
      const retorno = await response.json();
      setMentores(retorno);
    }
    getMentores();
  }, [id]);  // O useEffect será chamado sempre que o 'id' mudar

  const listaMentores = mentores.map((mentor) => (
    <CardMentor key={mentor.id} mentor={mentor} />
  ));

  return (
    <main>
      <ChakraProvider theme={theme}>
        <MenuBar showButtons={false} />
        <Center>
          <Box maxWidth="1200px" padding="4">
            <SimpleGrid columns={4} spacing="4">
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
