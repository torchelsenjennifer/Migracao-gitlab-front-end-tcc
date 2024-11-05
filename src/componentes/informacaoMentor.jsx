import {
  Box,
  ChakraProvider,
  Flex,
  Text,
  Image,
  Button,
  Divider
} from "@chakra-ui/react";
import theme from "@/app/theme";

export default function InformacoesMentores() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={150}
      >
        <Flex
          mt={6}
          justifyContent="space-around"
          width="100%"
          maxWidth="1200px"
          flexDirection={["column", "row"]}
          alignItems="center"
        >
          <Box textAlign="center" mb={[4, 0]}>
            <Image
              src="/informacaoMentor.jpg"
              alt="Imagem de Mentor"
              boxSize="300px"
              objectFit="cover"
            />
          </Box>

          <Box textAlign="center" ml={[0, 8]}>
            <Text fontWeight="bold" color="white" mb={4} fontSize="2xl">
              Que tal se tornar um mentor?
            </Text>
            <Button colorScheme="orange" size="lg">
              Quero mentorar!
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
