import React from "react";
import { Box, Text } from "grommet";

import { Icon } from "./icon";

export const StatBlock = ({
                                                        iconType,
                                                        value,
                                                        name,
                                                    }) => (
    <Box
        elevation="xsmall"
        background="light-2"
        round="small"
        align="center"
        justify="between"
        pad="small"
        hoverIndicator="red"
    >
        <Box>
            <Icon type={iconType} size="xlarge" />
        </Box>
        <Box
            flex="grow"
            margin={{
                top: "small",
            }}
        >
            <Text textAlign="center" size="xlarge">
                {value}
            </Text>
            <Text
                textAlign="center"
                size="small"
                style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                }}
            >
                {name}
            </Text>
        </Box>
    </Box>
);
