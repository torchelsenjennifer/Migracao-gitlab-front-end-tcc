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
import Link from "next/link";
import { Wallpaper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CardMentor(props) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" gap="4" wrap="wrap">
        <Card maxW="sm" bg="orange.400">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="/profissionalA.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Text color="black">{props.mentor.nome}</Text>
              <Text color="black" fontSize="2xl">
                {props.mentor.interesse}
              </Text>
              <Text color="black" fontSize="2xl">
                Banqi
              </Text>
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
