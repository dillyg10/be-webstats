import React from "react";
import { Box, Text } from "grommet";

import { EmpireMediumHeader, EmpireSmallHeader } from "./svgs";


const COLORS = {
    empire: {
        primaryColor: "#FFB53A",
        secondaryColor: "#E8A332",
        textColor: "accent-1",
    }
};

// header for empire info box
export const EmpireHeader = ({
                                                              size = "medium",
                                                              leftText,
                                                              rightText,
                                                              type = "empire",
                                                          }) => (
    <Box style={{ position: "relative", zIndex: 2 }}>
        {size === "small" ? (
            <EmpireSmallHeader
                primaryColor={COLORS[type].primaryColor}
                secondaryColor={COLORS[type].secondaryColor}
            />
        ) : (
            <EmpireMediumHeader
                primaryColor={COLORS[type].primaryColor}
                secondaryColor={COLORS[type].secondaryColor}
            />
        )}
        <Box
            direction="row"
            style={{ position: "absolute", top: size === "small" ? 15 : 24 }}
            justify={type === "empire" ? "between" : "center"}
            pad={{
                horizontal: "medium",
            }}
            width="100%"
        >
            {type === "empire" ? (
                <>
                    <Box>
                        <Text weight="bold" color={COLORS[type].textColor} size={size}>
                            {leftText}
                        </Text>
                    </Box>
                    <Box>
                        <Text size={size}>{rightText}</Text>
                    </Box>
                </>
            ) : (
                <Box>
                    <Text weight="bold" color={COLORS[type].textColor} size={size}>
                        Raid:{" "}
                        <Text color="brand" size={size}>
                            {leftText}
                        </Text>
                    </Text>
                </Box>
            )}
        </Box>
    </Box>
);
