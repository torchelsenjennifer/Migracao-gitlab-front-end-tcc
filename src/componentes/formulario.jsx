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
	Select,
	Textarea,
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import theme from "@/app/theme";

  export default function Formulario() {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = async (data) => {
	  try {
		const response = await fetch("http://localhost:3001/mentores", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(data),
		});

		if (response.ok) {
		  alert("Cadastro realizado com sucesso!");
		  reset();
		} else {
		  alert("Erro ao cadastrar. Tente novamente.");
		}
	  } catch (error) {
		console.error("Erro ao cadastrar:", error);
		alert("Erro ao conectar com a API.");
	  }
	};

	return (
	  <ChakraProvider theme={theme}>
		<Flex direction="column" alignItems="center">
		  <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
			Bem Vindo(a),
		  </Text>
		  <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
			Faca seu Cadastro
		  </Text>
		  <Box
			bg="orange.500"
			p={8}
			borderRadius="md"
			boxShadow="md"
			width="800px"
			mt={"30px"}
			mb={"100px"}
		  >
			<form onSubmit={handleSubmit(onSubmit)}>
			  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
				<GridItem>
				  <FormControl id="nome">
					<FormLabel>Nome</FormLabel>
					<Input type="text" {...register("nome", { required: true })} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="cpf">
					<FormLabel>CPF</FormLabel>
					<Input type="text" {...register("cpf", { required: true })} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="email">
					<FormLabel>Email</FormLabel>
					<Input type="email" {...register("email", { required: true })} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="telefone">
					<FormLabel>WhatsApp</FormLabel>
					<Input type="text" {...register("telefone", { required: true })} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="interesse">
					<FormLabel>Area de Interesse</FormLabel>
					<Select placeholder="Selecione uma opcao" {...register("interesse")}>
					  <option value="Back-End">Back-End</option>
					  <option value="DevOps">DevOps</option>
					  <option value="Infra">Infra</option>
					</Select>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="linkedin">
					<FormLabel>Link do LinkedIn</FormLabel>
					<Input type="url" {...register("linkedin")} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="senha">
					<FormLabel>Senha</FormLabel>
					<Input type="password" {...register("senha", { required: true })} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="descricao">
					<FormLabel>Descricao</FormLabel>
					<Textarea {...register("descricao")} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="calendly">
					<FormLabel>Link do Calendly</FormLabel>
					<Input type="url" {...register("calendly")} />
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="foto">
					<FormLabel>Cadastro da Foto</FormLabel>
					<Input type="url" {...register("foto")} />
				  </FormControl>
				</GridItem>
			  </Grid>
			  <Button
				type="submit"
				bg="black"
				color="white"
				mt={4}
				width="full"
				_hover={{ bg: "gray.700" }}
			  >
				Cadastrar
			  </Button>
			</form>
		  </Box>
		</Flex>
	  </ChakraProvider>
	);
  }
