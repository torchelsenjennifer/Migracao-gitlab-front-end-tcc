import {
  Box,
  Button,
  Image,
  ChakraProvider,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import theme from "@/app/theme";
import {Copyright } from "lucide-react";

export default function Footer() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" px={4} bg="#696969" alignItems="center" mt={10}>
        <Text color="#FFFF" fontSize="lg" ml={50}>
          APRENDA COM OS MELHORES, SEJA{" "}
          <Text color="orange.500" as="span">
            O SEU MELHOR
          </Text>
        </Text>

		<Flex alignItems={"center"}>
			<Text color="#FFFF" fontSize="md" mr={2}>
			Wise Share Brasil Atividades de Internet. Todos os direitos reservados
			</Text>
			<Copyright color="white" height="15px" width="15px" />
		</Flex>
      </Flex>
    </ChakraProvider>
  );
}
