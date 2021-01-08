import React from "react";
import { Box, Heading, Image, ResponsiveContext, Text } from "grommet";
import { Link } from "react-navi";
import { ColorType } from "grommet/utils";
import { Fade } from "react-reveal";

// import { EmpireList, PlayerList } from "../../containers";
// import { Icon, Splash } from "../../components";
import {
    Icon,
    Splash,
    FeatureTabs,
    FlatFeatures,
    PlayerList,
    EmpireList
} from '../../components/'

import { route } from "navi";

const FEATURES = [
    {
        id: "empires",
        title: "Empires",
        content: (
            <Box>
                <Text
                    type="secondary"
                    weight="bold"
                    textAlign="center"
                    margin={{
                        bottom: "medium",
                    }}
                >
                    It's an all out war to become the best Empire in the world!
                </Text>
                <Text type="secondary">
                    Empires are cool and stuff you know what I mean diggity dawg dawg.
                </Text>
            </Box>
        ),
        videoSrc: "https://i.imgur.com/JL7LjXd.mp4",
    },
    {
        id: "raiding",
        title: "Raiding",
        content: (
            <Box>
                <Text
                    type="secondary"
                    weight="bold"
                    textAlign="center"
                    margin={{
                        bottom: "medium",
                    }}
                >
                    Raid it all day
                </Text>
                <Text type="secondary">Raid..</Text>
            </Box>
        ),
        videoSrc: "https://i.imgur.com/JL7LjXd.mp4",
    },
    {
        id: "building",
        title: "Building",
        content: (
            <Box>
                <Text
                    type="secondary"
                    weight="bold"
                    textAlign="center"
                    margin={{
                        bottom: "medium",
                    }}
                >
                    IBuuawe
                </Text>
                <Text type="secondary">awefawe</Text>
            </Box>
        ),
        videoSrc: "https://i.imgur.com/JL7LjXd.mp4",
    },
    {
        id: "community",
        title: "Community",
        content: (
            <Box>
                <Text
                    type="secondary"
                    weight="bold"
                    textAlign="center"
                    margin={{
                        bottom: "medium",
                    }}
                >
                    dddd
                </Text>
                <Text type="secondary">asd</Text>
            </Box>
        ),
        videoSrc: "https://i.imgur.com/JL7LjXd.mp4",
    },
];

const HighlightSection = ({
                                                               children,
                                                               title,
                                                               color = "brand",
                                                           }) => (
    <Box
        pad="medium"
        margin={{
            bottom: "xlarge",
        }}
    >
        <Box>
            <Box
                border={{
                    side: "bottom",
                    size: "medium",
                    color,
                }}
                margin={{
                    bottom: "large",
                }}
            >
                <Heading level={2} style={{ fontFamily: "Montserrat" }}>
                    {title}
                </Heading>
            </Box>
        </Box>
        <Fade bottom>{children}</Fade>
    </Box>
);

export const Home = () => {
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box animation="fadeIn">
                    <Splash />
                    <Box align="center">
                        <Box
                            pad={{
                                horizontal: ["xlarge"].includes(size) ? "small" : "medium",
                                vertical: "medium",
                            }}
                            width="1300px"
                        >
                            <Box
                                direction={
                                    ["small", "xsmall"].includes(size) ? "column" : "row"
                                }
                                align={
                                    ["small", "xsmall"].includes(size) ? "center" : undefined
                                }
                                gap="large"
                                height={["small", "xsmall"].includes(size) ? undefined : "20vh"}
                                margin={{
                                    bottom: "xlarge",
                                }}
                            >
                                <Box flex="shrink">
                                    <Image
                                        src="https://www.pikpng.com/pngl/b/227-2277687_467kib-1000x1000-steve-cartoon-clipart.png"
                                        style={
                                            ["small", "xsmall"].includes(size)
                                                ? { width: 90, height: 170 }
                                                : { width: 160, height: 250 }
                                        }
                                    />
                                </Box>
                                <Box
                                    elevation="medium"
                                    background="light-2"
                                    round="xsmall"
                                    pad="medium"
                                    flex
                                    // height="200px"
                                    animation="slideUp"
                                >
                                    <Text
                                        size="large"
                                        weight="bold"
                                        type="secondary"
                                        margin={{
                                            bottom: "small",
                                        }}
                                    >
                                        Welcome to Block Empires!
                                    </Text>
                                    <Text type="secondary">
                                        The server has just opened for the first time to the public
                                        after 6 months of development!
                                    </Text>
                                    <Box />
                                </Box>
                            </Box>
                            <Box margin={{ bottom: "xlarge" }}>
                                {["xsmall", "small"].includes(size) ? (
                                    <FlatFeatures items={FEATURES} />
                                ) : (
                                    <FeatureTabs items={FEATURES} />
                                )}
                            </Box>
                            <Box>
                                <HighlightSection title="Empire Spotlight" color="accent-1">
                                    <EmpireList />
                                    <Box
                                        margin={{
                                            top: "large",
                                            right: "small",
                                        }}
                                        align="end"
                                    >
                                        <Link
                                            href="/empire-leaderboard"
                                            activeStyle={{
                                                color: "#222933",
                                                textDecoration: "none",
                                            }}
                                            active
                                        >
                                            <Box direction="row" align="center" gap="xsmall">
                                                <Text weight="bold" type="secondary">
                                                    View Leaderboard
                                                </Text>
                                                <Icon type="arrow_right" />
                                            </Box>
                                        </Link>
                                    </Box>
                                </HighlightSection>
                                <HighlightSection title="Player Spotlight" color="accent-1">
                                    <PlayerList />
                                    <Box
                                        margin={{
                                            top: "large",
                                            right: "small",
                                        }}
                                        align="end"
                                    >
                                        <Link
                                            href="/player-leaderboard"
                                            activeStyle={{
                                                color: "#222933",
                                                textDecoration: "none",
                                            }}
                                            active
                                        >
                                            <Box direction="row" align="center" gap="xsmall">
                                                <Text weight="bold" type="secondary">
                                                    View Leaderboard
                                                </Text>
                                                <Icon type="arrow_right" />
                                            </Box>
                                        </Link>
                                    </Box>
                                </HighlightSection>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};

export const HomeRoute = route({ view: <Home /> });