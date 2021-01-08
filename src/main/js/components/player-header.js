import React from "react";
import { Box, Text } from "grommet";

import { PlayerMediumHeader, PlayerSmallHeader } from "./svgs";

export const PlayerHeader = ({
                                                              size = "medium",
                                                              leftText,
                                                              rightText,
                                                          }) => (
    <Box style={{ position: "relative", zIndex: 2 }}>
        {size === "small" ? <PlayerSmallHeader /> : <PlayerMediumHeader />}
        <Box
            direction="row"
            style={{ position: "absolute", top: size === "small" ? 6 : 9 }}
            justify="between"
            pad={{
                horizontal: "medium",
            }}
            width="100%"
        >
            <Box>
                <Text weight="bold" color="brand" size={size}>
                    {leftText}
                </Text>
            </Box>
            <Box>
                <Text color="light-2" size={size}>
                    {rightText}
                </Text>
            </Box>
        </Box>
    </Box>
);
