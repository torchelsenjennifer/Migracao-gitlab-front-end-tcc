import { Box, Button, Image, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import theme from "@/app/theme";

export default function MenuBar() {
  return (
    <ChakraProvider theme={theme}>
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Image src="/wise-share.png" alt="logo" width="50px" height="50px" />
            <Text color="#FF6A16" fontWeight="bold" fontSize="xl" ml={4}>
              Wise Share
            </Text>
          </Flex>
          <Flex>
            <a href="/login">
              <Button colorScheme="laranja" mr={4}>
                Cadastrar-se
              </Button>
              <Button colorScheme="laranja">
                Logar
              </Button>
            </a>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}