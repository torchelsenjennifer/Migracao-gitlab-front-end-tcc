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
  import config from "../config.js";
  import { useEffect, useState } from "react";

  export default function Formulario() {
	const { register, handleSubmit, reset } = useForm();
	const [areas, setAreas] = useState([]);

	const onSubmit = async (data) => {
	  try {
		const formData = new FormData();

		formData.append("nome", data.nome);
		formData.append("profissao", data.profissao);
		formData.append("email", data.email);
		formData.append("telefone", data.telefone);
		formData.append("area_id", data.area_id);
		formData.append("linkedin", data.linkedin);
		formData.append("senha", data.senha);
		formData.append("descricao", data.descricao);
		formData.append("calendly", data.calendly);
		formData.append("empresa", data.empresa);
		formData.append("formacao", data.formacao);

		if (data.foto && data.foto[0]) {
		  formData.append("foto", data.foto[0]);
		}

		const response = await fetch(`${config.API_URL}/mentores`, {
		  method: "POST",
		  body: formData,
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
			mt={"30px"}
			mb={"100px"}
		  >
			<form onSubmit={handleSubmit(onSubmit)}>
			  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
				<GridItem>
				  <FormControl id="nome">
					<FormLabel color="white">Nome</FormLabel>
					<Input
					  color="white"
					  type="text"
					  {...register("nome", { required: true })}
					/>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="profissao">
					<FormLabel color="white">Profissão</FormLabel>
					<Input
					  color="white"
					  type="text"
					  {...register("profissao", { required: true })}
					/>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="email">
					<FormLabel color="white">Email</FormLabel>
					<Input
					  color="white"
					  type="email"
					  {...register("email", { required: true })}
					/>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="telefone">
					<FormLabel color="white">WhatsApp</FormLabel>
					<Input
					  color="white"
					  type="text"
					  {...register("telefone", { required: true })}
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
						<option value={area.id}>{area.descricao}</option>
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
				  <FormControl id="senha">
					<FormLabel color="white">Senha</FormLabel>
					<Input
					  color="white"
					  type="password"
					  {...register("senha", { required: true })}
					/>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="empresa">
					<FormLabel color="white">Empresa</FormLabel>
					<Input
					  color="white"
					  type="text"
					  {...register("empresa", { required: true })}
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
					  type="formacao"
					  {...register("formacao", { required: true })}
					/>
				  </FormControl>
				</GridItem>
				<GridItem>
				  <FormControl id="foto">
					<FormLabel color="white">Upload de Foto</FormLabel>
					<Input
					  color="white"
					  type="file"
					  accept="image/jpeg, image/png, image/gif, image/webp"
					  {...register("foto")}
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
				Cadastrar
			  </Button>
			</form>
		  </Box>
		</Flex>
	  </ChakraProvider>
	);
  }
