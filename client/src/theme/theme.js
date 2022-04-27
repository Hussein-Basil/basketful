import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
    colors: {
        primary: {
            100: "#84d9b1",
            500: "#2cbf6c",
        },
        dark: {
            100: "#707070",
            200: "rgba(7, 21, 64, 0.5)",
            500: "#071540",
        },
        light: {
            100: "#ffffff",
            500: "#f2f2f2",
        },
        border: {
            100: "rgba(0, 0, 0, 0.05)",
            200: "rgba(0, 0, 0, 0.1)",
            300: "rgba(0, 0, 0, 0.2)",
            400: "rgba(0, 0, 0, 0.3)",
            500: "rgba(0, 0, 0, 0.4)",
            600: "rgba(0, 0, 0, 0.5)",
        },

    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "dark.500",
            },
        },
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1670px',
        '2xl': '1670px',
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: "0",
                _hover: {
                    bg: "light.500",
                    backgroundColor: "light.500",
                },
                _focus: {
                    boxShadow: "none"
                }

            },
            variants: {
                primary: {
                    fontWeight: "semibold",
                    backgroundColor: "primary.500",
                    color: "light.500",
                    borderWidth: 0,
                    _hover: {
                        backgroundColor: "primary.100",
                    },
                    _focus: {
                        border: "1px",
                        borderColor: "primary.500",
                        boxShadow: "none",
                    }
                },
                secondary: {
                    backgroundColor: "light.100",
                    fontWeight: "regular",
                    color: "dark.500",
                    borderColor: "dark.500",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fill: "dark.500",
                    _hover: {
                        color: "primary.500",
                        borderColor: "primary.500",
                        fill: "primary.500",
                    },
                    _focus: {
                        border: "1px",
                        borderColor: "primary.500",
                        boxShadow: "none",
                    }
                }
            }
        },
        Input: {
            variants: {
                primary: {
                    border: "1px black solid",
                    borderColor: "border.200",
                    borderRadius: "0",
                }
            }
        },
        FormLabel: {
            baseStyle: {
                color: "dark.200",
                letterSpacing: -1
            }
        }
    },
    defaultProps: {
        size: '',
        variant: 'primary',
    }
})

export default Theme