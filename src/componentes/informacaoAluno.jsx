﻿import {
	Box,
	ChakraProvider,
	Flex,
	Text,
	Image,
	Button,
	Divider
  } from "@chakra-ui/react";
  import theme from "@/app/theme";

  export default function InformacoesAluno() {
	return (
	  <ChakraProvider theme={theme}>
		<Flex
		  direction="column"
		  alignItems="center"
		   justifyContent="center"
		  mt={10}
		>
		  <Flex
			mt={6}
			justifyContent="center"
			gap="25px"
			borderRadius="20px"
			width="100%"
			maxWidth="1200px"
			flexDirection={["column", "row"]}
			alignItems="center"
		  >
			<Box textAlign="center" mb={[4, 0]}>
			  <Image
				src="/informacaoAluno.jpg"
				alt="Imagem de Mentor"
				boxSize="300px"
				objectFit="cover"
				borderRadius={20}
			  />
			</Box>

			<Box minWidth="30%" textAlign="center" ml={[0, 8]}>
			  <Text fontWeight="bold" color="white" mb={4} fontSize="2xl">
				Qual é a sua dúvida?
			  </Text>
			  <Button colorScheme="orange" size="lg">
				Encontrar Mentor!
			  </Button>
			</Box>
		  </Flex>
		  <Divider
			  borderColor="#FF6A16"
			  borderWidth="2px"
			  width="60%"
			  mt={"50px"}
			  mb={"50px"}
			/>
		</Flex>
	  </ChakraProvider>
	);
  }