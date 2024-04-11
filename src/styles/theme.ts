import { inter } from "@/components/Providers";
import { extendTheme } from "@chakra-ui/react";

import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

  const baseStyle = definePartsStyle({
    // define the part you're going to style
    thumb: {
      width: '1.0em',
      height: '1.0em',
      bg: 'white',
      boxShadow: 'md',
    },
    track: {
      width: '2.0em',
      height: '1.0em',
      bg: 'buttonMain',

      _checked: {
        bg: 'buttonMain',
      },
    },
  })



  const switchTheme = defineMultiStyleConfig({ baseStyle })

const theme = extendTheme({
  colors: {
    textHomePage: "#293361",
    buttonMain: "#FE3CFD",  
    brand: {
      50: "#FFFFFF",
      100: "#FFFFFF",
      200: "#FFFFFF",
      300: "#FFFFFF",
      400: "#DEFFEE",
      500: "#B5FFD9",
      600: "#7DFFBC",
      700: "#45FF9F",
      800: "#0DFF83",
      900: "#00D467",
    },
    beige: {
      50: "#D7D5D4",
      100: "#CDCACA",
      200: "#B9B6B5",
      300: "#A5A1A0",
      400: "#918D8B",
      500: "#7D7876",
      600: "#605C5B",
      700: "#434140",
      800: "#262524",
      900: "#0A0909",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#faf6f5",
      },
    },
  },
  fonts: {
    heading: `'${inter.style.fontFamily}', sans-serif`,
    body: `'${inter.style.fontFamily}', sans-serif`,
  },
  components: {
    Switch: switchTheme,
    Button: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
    Link: {
      variants: {
        brand: {
          transition: "all 0.2s",
          bg: "brand.500",
          color: "blackAlpha.700",
          shadow: "lg",
          borderWidth: "1px",
          borderColor: "blackAlpha.100",
          _hover: {
            shadow: "md",
          },
        },
      },
    },
  },
});

export default theme;
