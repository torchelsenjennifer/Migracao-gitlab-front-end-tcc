"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  ChakraProvider,
  Input,
  Flex,
  Text,
  Grid,
  GridItem,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import theme from "@/app/theme";
import config from "../../../config.js";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MenuBar from "@/componentes/menubar.jsx";

export default function Formulario() {
  const { register, handleSubmit, reset } = useForm();
  const [areas, setAreas] = useState([]);
  const [mentorData, setMentorData] = useState(null);
  const { id } = useParams();

  const onSubmit = async (data) => {
    try {
      // Enviar dados como um objeto JSON em vez de FormData
      const response = await fetch(`${config.API_URL}/mentor/alterar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Envia os dados no formato JSON
      });

      const result = await response.json(); // Resposta detalhada da API

      if (response.ok) {
        alert("Cadastro atualizado com sucesso!");
        reset(); // Limpar formulário após sucesso
      } else {
        console.error("Erro ao atualizar:", result);
        alert(`Erro ao atualizar: ${result.msg || "Tente novamente."}`);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API.");
    }
  };

  useEffect(() => {
    async function getAreas() {
      try {
        const response = await fetch(`${config.API_URL}/areas`, {
          method: "GET",
        });
        const retorno = await response.json();
        setAreas(retorno);
      } catch (error) {
        console.error("Erro ao buscar áreas:", error);
      }
    }
    getAreas();
  }, []);

  useEffect(() => {
    if (id) {
      async function getMentorData() {
        try {
          const response = await fetch(`${config.API_URL}/mentores/${id}`);
          const data = await response.json();
          setMentorData(data);
          reset(data); // Preenche os campos com os dados recebidos
        } catch (error) {
          console.error("Erro ao buscar dados do mentor:", error);
        }
      }
      getMentorData();
    }
  }, [id, reset]);

  return (
    <ChakraProvider theme={theme}>
      <MenuBar showButtons={false} />
      <Flex direction="column" alignItems="center">
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
          Bem-Vindo(a),
        </Text>
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
          Faça seu Cadastro
        </Text>
        <Box
          bg="orange.500"
          p={8}
          borderRadius="md"
          boxShadow="md"
          width="800px"
          mt="30px"
          mb="100px"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <FormControl id="nome">
                  <FormLabel color="white">Nome</FormLabel>
                  <Input
                    color="white"
                    type="text"
                    {...register("nome", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="profissao">
                  <FormLabel color="white">Profissão</FormLabel>
                  <Input
                    color="white"
                    type="text"
                    {...register("profissao", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="email">
                  <FormLabel color="white">Email</FormLabel>
                  <Input
                    color="white"
                    type="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="telefone">
                  <FormLabel color="white">WhatsApp</FormLabel>
                  <Input
                    color="white"
                    type="text"
                    {...register("telefone", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="area_id">
                  <FormLabel color="white">Área de Interesse</FormLabel>
                  <Select
                    placeholder="Selecione uma opção..."
                    color="white"
                    {...register("area_id")}
                  >
                    {areas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.descricao}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl id="linkedin">
                  <FormLabel color="white">Link do LinkedIn</FormLabel>
                  <Input color="white" type="url" {...register("linkedin")} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="empresa">
                  <FormLabel color="white">Empresa</FormLabel>
                  <Input
                    color="white"
                    type="text"
                    {...register("empresa", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="descricao">
                  <FormLabel color="white">Descrição</FormLabel>
                  <Textarea color="white" {...register("descricao")} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="calendly">
                  <FormLabel color="white">Link do Calendly</FormLabel>
                  <Input color="white" type="url" {...register("calendly")} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="formacao">
                  <FormLabel color="white">Formação</FormLabel>
                  <Input
                    color="white"
                    type="text"
                    {...register("formacao", {
                      required: true,
                    })}
                  />
                </FormControl>
              </GridItem>
            </Grid>
            <Button
              type="submit"
              bg="white"
              color="black"
              mt={4}
              width="full"
              _hover={{ bg: "gray.700" }}
            >
              Atualizar
            </Button>
          </form>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
