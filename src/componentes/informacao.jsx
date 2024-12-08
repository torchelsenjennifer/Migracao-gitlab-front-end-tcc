import {
	Box,
	ChakraProvider,
	Flex,
	Text,
	Image,
} from "@chakra-ui/react";
import theme from "@/app/theme";

export default function Informacao() {
	return (
		<ChakraProvider theme={theme}>
			<Flex direction="column" alignItems="center" justifyContent="center" mt="80px">
				<Flex mt={6} justifyContent="space-around" width="100%" maxWidth="1200px">
					<Box textAlign="center">
						<Text display="flex" fontWeight="bold" alignItems="center" justifyContent="center" fontSize="25px" color="white" minHeight="76px" mb={2}>Esta com dúvida?</Text>
						<Image
							src="/Ellipse4.png"
							alt="Dúvida"
							boxSize="250px"
							objectFit="cover"
							mt={10}
							borderRadius="full"
						/>
					</Box>
					<Box textAlign="center">
						<Text fontWeight="bold" fontSize="25px" color="white" minHeight="76px" mb={2}>
							Em projetos ou <br /> estudos?
						</Text>
						<Image
							src="/Ellipse5.png"
							alt="Projetos ou Estudos"
							boxSize="250px"
							objectFit="cover"
							mt={10}
							borderRadius="full"
						/>
					</Box>
					<Box textAlign="center">
						<Text fontWeight="bold" fontSize="25px" color="white" minHeight="76px" mb={2}>
							A Wise Share
							<Box as="span" color="orange.500"> te ajuda</Box> <br />
							a encontrar um mentor!
						</Text>
						<Image
							src="/Ellipse6.png"
							alt="Wise Share"
							boxSize="250px"
							objectFit="cover"
							mt={10}
							borderRadius="full"
						/>
					</Box>
				</Flex>
			</Flex>
		</ChakraProvider>
	);
}
