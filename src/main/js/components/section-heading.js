import React from "react";
import { Box, Heading } from "grommet";

export const SectionHeading = ({ children }) => (
    <Box
        border={{
            side: "bottom",
            size: "3px",
            color: "light-4",
        }}
        margin={{
            bottom: "small",
        }}
    >
        <Heading level={3} margin="none">
            {children}
        </Heading>
    </Box>
);
