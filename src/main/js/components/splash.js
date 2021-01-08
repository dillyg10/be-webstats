import React from "react";
import styled from "styled-components";
import { Box, Image, ResponsiveContext, Text } from "grommet";

import TestSvg from "../assets/svgs/test.svg";
import {InfoBlock} from "./info-block";
import {Carousel} from "./carousel";

export function Splash() {
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box
                    background="dark-2"
                    height={
                        ["small", "xsmall", "medium"].includes(size) ? "95vh" : "65vh"
                    }
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    <Box
                        justify="center"
                        align="center"
                        flex="grow"
                        style={{ position: "relative", zIndex: 20 }}
                    >
                        <Box
                            width={
                                size === "xlarge"
                                    ? "1300px"
                                    : size === "large"
                                    ? "900px"
                                    : undefined
                            }
                            height={
                                size === "xlarge"
                                    ? "medium"
                                    : size === "large"
                                    ? "330px"
                                    : ["small", "xsmall", "medium"].includes(size)
                                        ? "85vh"
                                        : "65vh"
                            }
                            margin={{
                                top: ["large", "xlarge"].includes(size) ? "-80px" : "0px",
                            }}
                            direction={["large", "xlarge"].includes(size) ? "row" : "column"}
                            justify={
                                ["small", "xsmall"].includes(size) ? undefined : "between"
                            }
                            align={["large", "xlarge"].includes(size) ? undefined : "center"}
                            gap="medium"
                        >
                            <Box
                                width={["large", "xlarge"].includes(size) ? "60%" : "90%"}
                                height={
                                    ["large", "xlarge"].includes(size)
                                        ? "20%"
                                        : size === "medium"
                                        ? "20%"
                                        : "17%"
                                }
                            >
                            {/*    <Carousel />*/}
                            </Box>
                            <Box
                                overflow="hidden"
                                width={["large", "xlarge"].includes(size) ? "40%" : "90%"}
                                height={["large", "xlarge"].includes(size) ? "auto" : "49%"}
                            >
                                <InfoBlock size={size === "xlarge" ? "medium" : "small"} />
                            </Box>
                        </Box>
                    </Box>
                    <img
                        src="https://www.minecraft.net/content/dam/archive/56d7f29938a00fe870956948f91d5d43-Castle2.jpg"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "200%",
                            transform: "translate(-50%,-50%)",
                        }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 1680 40"
                        className="position-absolute width-full z-1"
                        style={{
                            bottom: -5,
                            position: "absolute",
                            width: "100%",
                        }}
                    >
                        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#F8F8F8" />
                    </svg>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
}
