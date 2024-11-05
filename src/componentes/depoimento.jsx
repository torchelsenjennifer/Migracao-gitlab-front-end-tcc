import {
	Box,
	ChakraProvider,
	Flex,
	Text,
	Image,
	VStack,
  } from "@chakra-ui/react";
  import theme from "@/app/theme";

  export default function Depoimento() {
	const testimonials = [
	  {
		name: "Joao Silva",
		profession: "Estudante de Analise de Sistemas",
		image: "/depoimentoA.jpg",
		feedback: "A plataforma me ajudou a entender conceitos complexos de programacao e me deu a confianca para avancar na minha carreira."
	  },
	  {
		name: "Maria Oliveira",
		profession: "Desenvolvedora Software Junior",
		image: "/depoimentoB.jpg",
		feedback: "Gracas aos mentores incriveis, consegui solucionar minhas duvidas e melhorar minhas habilidades em programacao."
	  },
	  {
		name: "Edecio Fernando",
		profession: "Analista de Dados",
		image: "/depoimentoC.jpeg",
		feedback: "A ajuda personalizada que recebi foi fundamental para resolver questoes tecnicas complicadas de forma eficiente."
	  },
	];

	return (
	  <ChakraProvider theme={theme}>
		<Flex direction="column" alignItems="center" mt={10} p={5}>
		  <Text fontWeight="bold" fontSize="3xl" color="white" mb={8}>
			Conheca os depoimentos de quem acabou com suas duvidas
		  </Text>

		  <Flex
			direction={["column", "row"]}
			justifyContent="space-around"
			width="100%"
			maxWidth="1200px"
		  >
			{testimonials.map((testimonial, index) => (
			  <Box
				key={index}
				bg="gray.800"
				p={5}
				borderRadius="md"
				textAlign="center"
				width={["100%", "30%"]}
				mb={[6, 0]}
				color="white"
				boxShadow="md"
			  >
				<Flex alignItems="center" mb={4}>
				  <Image
					src={testimonial.image}
					alt={`Foto de ${testimonial.name}`}
					boxSize="80px"
					borderRadius="full"
					mr={4}
				  />
				  <VStack align="flex-start">
					<Text fontWeight="bold" fontSize="xl">
					  {testimonial.name}
					</Text>
					<Text fontSize="sm" color="gray.300">
					  {testimonial.profession}
					</Text>
				  </VStack>
				</Flex>
				<Text fontSize="sm" mt={2}>
				  "{testimonial.feedback}"
				</Text>
			  </Box>
			))}
		  </Flex>
		</Flex>
	  </ChakraProvider>
	);
  }
