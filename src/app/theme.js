import { extendTheme } from "@chakra-ui/react";
import { Space_Grotesk } from "next/font/google";

const Spacegrotesk = Space_Grotesk({ subsets: ["latin"] });
export const theme = extendTheme({
  colors: {
    laranja: {
      50: "#FFEFE5",
      100: "#FFD1B8",
      200: "#FFB48A",
      300: "#FF975C",
      400: "#FF792E",
      500: "#FF5C00",
      600: "#CC4A00",
      700: "#993700",
      800: "#662500",
      900: "#331200",
    },
    preto: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
  },
  styles: {
    global: {
      body: {
        bg: "black",
      },
    },
  },
});

export default theme;
