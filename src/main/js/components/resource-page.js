import React from "react";
import styled from "styled-components";
import { Box, ResponsiveContext } from "grommet";

const StickyInfoBox = styled.div`
  top: 20px;
  position: -webkit-sticky;
  position: sticky;
`;

// used for empire page and player page
export const ResourcePage = ({
                                                              children,
                                                              sideContent,
                                                          }) => (
    <ResponsiveContext.Consumer>
        {(size) => (
            <Box
                pad={
                    ["xsmall", "small", "medium"].includes(size)
                        ? "small"
                        : size === "large"
                        ? "medium"
                        : "large"
                }
                animation="fadeIn"
            >
                <Box
                    direction={
                        ["xsmall", "small", "medium"].includes(size) ? "column" : "row"
                    }
                    justify="between"
                    width="xlarge"
                    alignSelf="center"
                    margin={{
                        top: "medium",
                    }}
                    style={{
                        zIndex: 999,
                        position: "relative",
                    }}
                >
                    <Box
                        animation="slideUp"
                        width="large"
                        pad="medium"
                        background="light-0"
                        round="small"
                        elevation="large"
                        style={{
                            order: ["xsmall", "small", "medium"].includes(size) ? 2 : 1,
                        }}
                    >
                        {children}
                    </Box>
                    <Box
                        animation="slideLeft"
                        style={{
                            order: ["xsmall", "small", "medium"].includes(size) ? 1 : 2,
                        }}
                        margin={{ bottom: "large" }}
                    >
                        <StickyInfoBox>{sideContent}</StickyInfoBox>
                    </Box>
                </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
);
