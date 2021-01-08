import { css } from "styled-components";

export const theme = {
    global: {
        focus: {
            border: {
                color: "accent-1",
            },
        },
        size: {
            xlarge: "1165px",
        },
        font: {
            family: "Montserrat",
        },
        colors: {
            // brand: "rgb(39, 116, 174)",
            brand: "#FFB53A",
            // "accent-1": "rgb(255, 209, 0)",
            "accent-1": "#007DC3",
            "accent-2": "#6b3aff",
            "accent-3": "#ff3ace",
            "dark-1": "#1E2127",
            "dark-2": "#0D1117",
            "dark-3": "#222933",
            "dark-4": "#404a58",
            "light-0": "#fcfcfc",
            "light-5": "#C4C4C4",
            text: {
                light: "#474747",
            },
        },
        input: {
            padding: {
                vertical: "2px",
                horizontal: "7px",
            },
        },
        breakpoints: {
            xsmall: {
                value: 375,
            },
            small: {
                value: 568,
                edgeSize: {
                    none: "0px",
                    small: "6px",
                    medium: "12px",
                    large: "24px",
                },
            },
            medium: {
                value: 870,
                edgeSize: {
                    none: "0px",
                    small: "12px",
                    medium: "24px",
                    large: "48px",
                },
            },
            large: {
                value: 1250,
                edgeSize: {
                    none: "0px",
                    small: "12px",
                    medium: "24px",
                    large: "48px",
                },
            },
            xlarge: {
                value: 1300,
                edgeSize: {
                    none: "0px",
                    small: "12px",
                    medium: "24px",
                    large: "48px",
                },
            },
        },
        elevation: {
            light: {
                none: "none",
                xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
                medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                xmedium: "0px 4px 8px rgba(0, 0, 0, 0.35)",
                large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
                xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)",
                reverse: "0px 1px 2px rgba(255, 255, 255, 0.10)",
            },
        },
    },
    layer: {
        background: {
            light: "transparent",
            dark: "transparent",
        },
    },
    text: {
        extend: () => css`
      font-family: Montserrat;
    `,
    },
    heading: {
        extend: () => css`
      font-family: Montserrat;
    `,
        font: {},
    },
    dataTable: {
        header: {
            background: "accent-1",
            extend: () => css`
        font-family: Montserrat !important;
        font-weight: 600;
      `,
        },
        body: {
            extend: () => css`
        font-family: Montserrat;
        font-weight: 500;
      `,
        },
    },
    table: {
        row: {
            hover: {
                background: "light-3",
            },
        },
    },
    tip: {
        content: {
            background: "white",
        },
    },
    menu: {
        icons: {
            color: "brand",
        },
    },
};
