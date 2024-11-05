import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import theme from "@/app/theme";
import Link from "next/link";

export default function Filtro() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        px={4}
        mt={"200px"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Divider borderColor="#FF6A16" borderWidth="2px" width="60%" />
        <Text
          color="white"
          fontWeight="bold"
          fontSize="xl"
          ml={4}
          mt={"50px"}
          mb={"50px"}
        >
          Sua dúvida se encontra em qual área?
        </Text>

        <Flex justifyContent="center" py={4}>
		<Link href="/listagem">
            <Button
              mx={2}
              colorScheme="orange"
              variant="outline"
              color="#FF6A16"
              bg="black"
              _hover={{ bg: "orange.400", color: "black" }}
            >
              Back-End
            </Button>
          </Link>

          <Button
            mx={2}
            colorScheme="orange"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            Front-End
          </Button>
          <Button
            mx={2}
            colorScheme="orange"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            UX/UI Design
          </Button>
          <Button
            mx={2}
            colorScheme="orange"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            DevOps
          </Button>
          <Button
            mx={2}
            colorScheme="orange"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            Data Scientist
          </Button>
        </Flex>

        <Flex justifyContent="center" py={4}>
          <Button
            mx={2}
            colorScheme="laranja"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            Back-End
          </Button>
          <Button
            mx={2}
            colorScheme="laranja"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            Front-End
          </Button>
          <Button
            mx={2}
            colorScheme="laranja"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            UX/UI Design
          </Button>
          <Button
            mx={2}
            colorScheme="laranja"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            DevOps
          </Button>
          <Button
            mx={2}
            colorScheme="laranja"
            variant="outline"
            color="#FF6A16"
            bg="black"
            _hover={{ bg: "orange.400", color: "black" }}
          >
            Data Scientist
          </Button>
        </Flex>

        <Divider
          borderColor="#FF6A16"
          borderWidth="2px"
          width="60%"
          mt={"25px"}
        />
      </Box>
    </ChakraProvider>
  );
}
