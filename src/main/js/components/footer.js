import React from "react";
import { Box, Heading, List, Text } from "grommet";
import { Twitter } from "grommet-icons";
import { ColorType } from "grommet/utils";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-navi";

const LINKS = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Player Leaderboard",
        link: "/player-leaderboard",
    },
    {
        name: "Empire Leaderboard",
        link: "/empire-leaderboard",
    },
];


const SocialButton = ({
                                                       children,
                                                       background,
                                                   }) => (
    <Box
        width="35px"
        height="35px"
        background={background}
        justify="center"
        align="center"
        style={{ boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.2)" }}
    >
        {children}
    </Box>
);

export const Footer = () => (
    <Box tag="footer" flex={false} width="100%" margin={{ top: "xlarge" }}>
        <Box
            background="dark-2"
            height="220px"
            width="100%"
            align="center"
            pad={{
                horizontal: "large",
                vertical: "medium",
            }}
        >
            <Box
                width="xlarge"
                direction="row-responsive"
                justify="between"
                gap="large"
            >
                <Box>
                    <Heading
                        level={4}
                        color="light-2"
                        margin={{
                            top: "none",
                            bottom: "small",
                        }}
                    >
                        Links
                    </Heading>
                    <List data={LINKS}>
                        {(datum) => (
                            <Link
                                href={datum.link}
                                activeStyle={{
                                    color: "#F2F2F2",
                                    textDecoration: "none",
                                }}
                                active
                            >
                                <Text size="small">{datum.name}</Text>
                            </Link>
                        )}
                    </List>
                </Box>
                <Box>
                    <Heading
                        level={4}
                        color="light-2"
                        margin={{
                            top: "none",
                            bottom: "small",
                        }}
                    >
                        Social
                    </Heading>
                    <Box direction="row" gap="xsmall">
                        <Link href="https://twitter.com/blockempires">
                            <SocialButton background="#1DA1F2">
                                <Twitter color="light-2" />
                            </SocialButton>
                        </Link>
                        <Link href="https://discord.gg/NwfUbKnY">
                            <SocialButton background="#7289DA">
                                <FaDiscord color="#F2F2F2" />
                            </SocialButton>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box
            background="#0c0d10"
            height="60px"
            width="100%"
            align="center"
            pad={{
                horizontal: "large",
                vertical: "medium",
            }}
        >
            <Box width="xlarge" direction="row" justify="between">
                <Text size="small" color="dark-5">
                    © 2021 Block Empires - All Rights Reserved.
                </Text>
                <Text size="small" color="dark-5">
                    Looking for the old Block Empires? See{" "}
                    <Link href="https://site5ff151acdd580.enjin.com/">here.</Link>
                </Text>
            </Box>
        </Box>
    </Box>
);
