import { Box, Text } from "grommet";
import React from "react";
import styled from "styled-components";

const PlayNowButton = styled(Box)``;

// info block object used for slash
export const InfoBlock = ({size= "medium"}) => (
    <Box background="#1C232D" flex="grow" align="center" justify="center">
        <Box pad={size === "medium" ? "large" : "small"}>
            <Text
                size={size === "medium" ? "xxlarge" : "xlarge"}
                weight="bold"
                color="#DADADA"
                textAlign="center"
            >
                Join the Open Alpha Today!
            </Text>
            <PlayNowButton
                margin={{top: "medium"}}
                background="#1C8ECD"
                height={size === "medium" ? "80px" : "60px"}
                width="90%"
                round="small"
                alignSelf="center"
                border={{
                    side: "bottom",
                    color: "#007DC3",
                    size: "medium",
                }}
                justify="center"
            >
                <Text
                    textAlign="center"
                    size={size === "medium" ? "xxlarge" : "xlarge"}
                    weight="bold"
                >
                    Blockempires.com
                </Text>
            </PlayNowButton>
            <Box margin={{top: "medium"}}>
            </Box>
        </Box>
    </Box>
);
