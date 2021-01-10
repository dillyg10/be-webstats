import React from "react";
import { Box, Heading, Image, ResponsiveContext, Text } from "grommet";
import { Link } from "react-navi";
import { Fade } from "react-reveal";

import {
    Icon,
    Splash,
    FeatureTabs,
    FlatFeatures,
    PlayerList,
    EmpireList
} from '../../components/'

import { route } from "navi";

// feature selection screen for marketing
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
                    Your empire can rise to the top to become the best around.
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
                    Raid empires in a quest to become the best player in the world!
                </Text>
                <Text type="secondary">Raiding is a fun unique mehcanic of the BlockEmpires server. Destroy the empires of your foes!</Text>
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
                    Build your own unique plot and stand out amongst other players.
                </Text>
                <Text type="secondary">See what you can create!</Text>
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
                    We love our community, and promise to maintain honor and dignity.
                </Text>
                <Text type="secondary">Join us on discord and chat about what can make our server better!</Text>
            </Box>
        ),
        videoSrc: "https://i.imgur.com/JL7LjXd.mp4",
    },
];

// migrates the features
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

// home page for the site, contains game info, featured players and empires
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

// home route object
export const HomeRoute = route({ view: <Home /> });