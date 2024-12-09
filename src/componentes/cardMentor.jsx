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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import theme from "@/app/theme";
import { useRouter } from "next/navigation";
import config from "../config.js";
import { GraduationCap, Building2, BriefcaseBusiness, Medal } from "lucide-react";

export default function CardMentor(props) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" gap="3" wrap="wrap">
        <Card width="300px" bg="orange.400">
          <CardBody>
            {/* Verificando se o mentor é premium */}
            {props.mentor.premium && (
              <Box position="absolute" top="10px" left="10px">
                <Medal size={40} color="black" /> {/* Ícone de Medalha */}
              </Box>
            )}
            <Stack mt="1" spacing="3" align="center">
              <Image
                src={`${config.API_URL}/uploads/${props.mentor.foto}`}
                alt="Mentor Foto"
                borderRadius="50%"
                width="200px"
                height="200px"
                objectFit="cover"
              />
              <Text fontSize="2xl" color="black">
                {props.mentor.nome}
              </Text>
              <Grid templateColumns="30px 1fr" gap="2" alignItems="center">
                <GridItem>
                  <BriefcaseBusiness />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {props.mentor.profissao}
                  </Text>
                </GridItem>

                <GridItem>
                  <Building2 />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {props.mentor.empresa}
                  </Text>
                </GridItem>

                <GridItem>
                  <GraduationCap />
                </GridItem>
                <GridItem>
                  <Text fontSize="14px" color="black">
                    {props.mentor.formacao}
                  </Text>
                </GridItem>
              </Grid>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
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
