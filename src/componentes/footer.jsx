import {
  Box,
  Button,
  Image,
  ChakraProvider,
  Flex,
  Text,
} from "@chakra-ui/react";
import theme from "@/app/theme";

export default function Footer() {
  return (
    <ChakraProvider theme={theme}>
      <Box px={4} bg="#696969">
        <Flex direction="column" h={16} alignItems="center" justifyContent="space-between">
		<Text color="#FFFF" fontSize="lg" ml={50}>
          APRENDA COM OS MELHORES, SEJA <Text color="orange.500" as="span">O SEU MELHOR</Text>
        </Text>
        <Text color="#FFFF"fontSize="lg" ml={50}>
         Wise Share Brasil Atividades de Internet. Todos os direitos reservados
        </Text>
		</Flex>
      </Box>
    </ChakraProvider>
  );
}
