import {
	Box,
	Button,
	ChakraProvider,
	Flex,
	Text,
	Divider,
  } from "@chakra-ui/react";
  import theme from "@/app/theme";
  import Link from "next/link";
  import { useEffect, useState } from "react";
  import config from "../config.js";

  export default function Filtro() {
	const [areas, setAreas] = useState([]);

	useEffect(() => {
	  async function getAreas() {
		const response = await fetch(`${config.API_URL}/areas`, {
		  method: "GET",
		});
		const retorno = await response.json();
		setAreas(retorno);
	  }
	  getAreas();
	}, []);

	return (
	  <ChakraProvider theme={theme}>
		<Box
		  px={4}
		  mt={"200px"}
		  display="flex"
		  flexDirection="column"
		  alignItems="center"
		>
		  <Divider borderColor="#FF6A16" borderWidth="2px" width="60%" />
		  <Text
			color="white"
			fontWeight="bold"
			fontSize="xl"
			ml={4}
			mt={"50px"}
			mb={"50px"}
		  >
			Sua dúvida se encontra em qual área?
		  </Text>

		  <Flex justifyContent="center" py={4} wrap="wrap" gap={4}>
			{areas.map((area) => (
			  <Link key={area.id} href={`/listagem/${area.id}`}>
				<Button
				  mx={2}
				  colorScheme="orange"
				  variant="outline"
				  color="#FF6A16"
				  bg="black"
				  _hover={{ bg: "orange.400", color: "black" }}
				>
				  {area.descricao}
				</Button>
			  </Link>
			))}
		  </Flex>
		</Box>
	  </ChakraProvider>
	);
  }