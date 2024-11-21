import {
	Box,
	Button,
	ChakraProvider,
	Flex,
	Text,
	Divider,
	Image,
	CardBody,
	Stack,
	Heading,
	CardFooter,
	ButtonGroup,
	Card,
  } from "@chakra-ui/react";
  import theme from "@/app/theme";
  import { useRouter } from "next/navigation";
  import config from '../config.js';

  export default function CardMentor(props) {
	const router = useRouter();
	return (
	  <ChakraProvider theme={theme}>
		<Flex justify="center" gap="3" wrap="wrap">
		  <Card
			width="300px"
			bg="orange.400"
		  >
			<CardBody>
			  <Stack mt="1" spacing="3" align="center">
				<Image
				  src={`${config.API_URL}/uploads/${props.mentor.foto}`} // Concatenando a URL base com o nome do arquivo
				  alt="Mentor Foto"
				  borderRadius="50%"
				  width="200px"
				  height="200px"
				  objectFit="cover"
				/>
				<Text fontSize="2xl" color="black">
				  {props.mentor.nome}
				</Text>
				<Text color="black">{props.mentor.profissao}</Text>
				<Text color="black">Oferece mentoria em:</Text>
				<Text color="black">{props.mentor.interesse}</Text>
			  </Stack>
			</CardBody>
			<Divider />
			<CardFooter>
			  <ButtonGroup spacing="2">
				<Button
				  variant="solid"
				  bg="black"
				  color="white"
				  onClick={() => {
					router.push(`/mentor/${props.mentor.id}`);
				  }}
				>
				  Agendar
				</Button>
			  </ButtonGroup>
			</CardFooter>
		  </Card>
		</Flex>
	  </ChakraProvider>
	);
  }
