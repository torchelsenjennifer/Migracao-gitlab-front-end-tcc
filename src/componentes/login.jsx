import {
	Box,
	Button,
	FormControl,
	FormLabel,
	ChakraProvider,
	Input,
	Flex,
	Text,
} from "@chakra-ui/react";
import theme from "@/app/theme";

export default function Login() {
	return (
		<ChakraProvider theme={theme}>
			<Flex direction="column" alignItems="center" height="100vh" justifyContent="center">
				<Text color="#FFFF" fontWeight="bold" fontSize="x-large" mb={6}>
					Bem Vindo(a),
				</Text>
				<Text color="#FFFF" fontWeight="bold" fontSize="x-large" mb={4}>
					Faca seu Login
				</Text>
				<Box
					bg="orange.500"
					p={8}
					borderRadius="md"
					boxShadow="md"
					width="400px"
				>
					<FormControl id="email" mb={4}>
						<FormLabel color="white">Email</FormLabel>
						<Input type="email" bg="white" />
					</FormControl>
					<FormControl id="senha" mb={4}>
						<FormLabel color="white">Senha</FormLabel>
						<Input type="password" bg="white" />
					</FormControl>
					<Button
						type="submit"
						bg="black"
						color="white"
						width="full"
						mt={4}
						_hover={{ bg: "gray.700" }}
					>
						Acessar
					</Button>
				</Box>
			</Flex>
		</ChakraProvider>
	);
}
