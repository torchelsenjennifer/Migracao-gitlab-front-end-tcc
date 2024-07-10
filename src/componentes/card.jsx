import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import theme from "@/app/theme";

function Card() {
  return (
    <Flex
      width="20rem"
      height="20rem"
      border="1px solid #0000"
      borderRadius="md"
      p={4}
      direction="column"
      align="center"
      boxShadow="md"
      bg="orange.500"
      m={4}
    >
      <Image
        src="/profissionalA.jpg"
        alt="Foto do Profissional"
        borderRadius="full"
        boxSize="100px"
        mb={4}
      />

      <Text fontSize="lg" color="black" fontWeight="bold">
        Tiago Ferreira
      </Text>
      <Text fontSize="md" color="black" fontWeight="bold" mt={"5px"}>
        Engenheiro de Software
      </Text>
      <Text fontSize="sm" color="black" fontWeight="bold" mb={4} mt={"5px"}>
        Banqi
      </Text>

      <Divider my={4} />

      <Button bg="black" color="white" _hover={{ bg: "gray.700" }}>
        Agendar
      </Button>
    </Flex>
  );
}

export default function CardContainer() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" mt="50px">
        <Box bg="orange.500" p={2} textAlign="center" width="76%" mx="auto">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Back End
          </Text>
        </Box>
      </Flex>
      <Flex direction="row" wrap="wrap" justify="center" mt="50px">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </ChakraProvider>
  );
}
