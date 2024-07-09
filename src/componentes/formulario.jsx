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
  Textarea
} from "@chakra-ui/react";
import theme from "@/app/theme";

export default function Formulario() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" alignItems="center">
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
          Bem Vindo(a),
        </Text>
        <Text color="#FFFF" fontWeight="bold" fontSize="x-large" ml={50}>
          Faca seu Cadastro
        </Text>
		<Box bg="orange.500" p={8} borderRadius="md" boxShadow="md" width="800px" mt={'30px'} mb={'100px'}>
					<Grid templateColumns="repeat(2, 1fr)" gap={6}>
						<GridItem>
							<FormControl id="nome">
								<FormLabel>Nome</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="cpf">
								<FormLabel>CPF</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="email">
								<FormLabel>Email</FormLabel>
								<Input type="email" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="whatsapp">
								<FormLabel>WhatsApp</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="area-interesse">
								<FormLabel>Area de Interesse</FormLabel>
								<Select placeholder="Selecione uma opcao">
									<option value="option1">Back-End</option>
									<option value="option2">DevOps</option>
									<option value="option3">Infra</option>
								</Select>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="linkedin">
								<FormLabel>Link do LinkedIn</FormLabel>
								<Input type="url" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="senha">
								<FormLabel>Senha</FormLabel>
								<Input type="password" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="descricao">
								<FormLabel>Descricao</FormLabel>
								<Textarea />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="calendly">
								<FormLabel>Link do Calendly</FormLabel>
								<Input type="url" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl id="foto">
								<FormLabel>Cadastro da Foto</FormLabel>
								<Input type="file" />
							</FormControl>
						</GridItem>
					</Grid>
					<Button  bg="black" color="white" mt={4} width="full" _hover={{ bg: "gray.700" }}>
						Cadastrar
					</Button>
				</Box>
      </Flex>
    </ChakraProvider>
  );
}
