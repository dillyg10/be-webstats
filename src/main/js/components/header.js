import React, { useCallback } from "react";
import { Box, Heading, Image, Menu, ResponsiveContext, Text } from "grommet";
import { Link, useNavigation } from "react-navi";
import styled from "styled-components";
import { Menu as MenuIcon } from "grommet-icons";
import { FaDiscord } from "react-icons/fa";
import {SearchBar} from "./search-bar";
// import { SearchBar } from "../../../search-bar";

const Logo = styled(Heading)`
  font-family: Red Rose, serif;
  font-weight: bold;
  text-transform: uppercase;
`;

const ReleaseText = styled(Text)`
  text-transform: uppercase;
  font-weight: bold;
  color: #dadada;
`;

// side header
export const Header = () => {
    const navigation = useNavigation();

    const gotoEmpireLeaderboard = useCallback(() => {
        navigation.navigate("/empire-leaderboard");
    }, [navigation]);

    const gotoPlayerLeaderboard = useCallback(() => {
        navigation.navigate("/player-leaderboard");
    }, [navigation]);

    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box
                    tag="header"
                    direction="row"
                    justify="center"
                    align="center"
                    background="dark-1"
                    elevation="large"
                    height={
                        ["medium", "small", "xsmall"].includes(size) ? "55px" : "65px"
                    }
                    style={{
                        position: "relative",
                        zIndex: 10,
                    }}
                >
                    <Box
                        direction="row"
                        justify="between"
                        pad={{ horizontal: "large" }}
                        flex
                        align="center"
                    >
                        <Link
                            href="/"
                            activeStyle={{
                                color: "white",
                                textDecoration: "none",
                            }}
                            active
                        >
                            <Box direction="row">
                                <Logo
                                    size={size === "xsmall" ? "22px" : "small"}
                                    color="brand"
                                    margin="none"
                                >
                                    Block Empires
                                </Logo>
                                {size === "xsmall" ? null : (
                                    <ReleaseText
                                        type="secondary"
                                        alignSelf="start"
                                        size="xsmall"
                                        margin={{
                                            top: "5px",
                                            left: "3px",
                                        }}
                                    >
                                        Alpha
                                    </ReleaseText>
                                )}
                            </Box>
                        </Link>
                        {["medium", "small", "xsmall"].includes(size) ? (
                            <>
                                <Menu
                                    icon={<MenuIcon />}
                                    items={[
                                        {
                                            label: "Player Leaderboard",
                                            onClick: gotoPlayerLeaderboard,
                                        },
                                        {
                                            label: "Empire Leaderboard",
                                            onClick: gotoEmpireLeaderboard,
                                        },
                                        {
                                            label: "Store",
                                        },
                                    ]}
                                />

                            </>
                        ) : (
                            <>
                                {(
                                    <Box
                                        direction="row"
                                        justify="center"
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            pointerEvents: "none",
                                        }}
                                        width="100%"
                                    >
                                        <Box
                                            width="medium"
                                            style={{
                                                pointerEvents: "all",
                                            }}
                                        >
                                            <SearchBar size="medium" />
                                        </Box>
                                    </Box>
                                )}
                                <Box direction="row" gap="small" align="center">
                                    <Box>
                                        <Menu
                                            margin="none"
                                            label="Leaderboards"
                                            items={[
                                                { label: "Empire", onClick: gotoEmpireLeaderboard },
                                                { label: "Player", onClick: gotoPlayerLeaderboard },
                                            ]}
                                        />
                                    </Box>
                                    <Box>Store</Box>
                                    <Link href="https://discord.gg/NwfUbKnY">
                                        <Box height="35px" width="35px" margin={{ left: "20px" }}>
                                            <Image
                                                src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
                                                fit="cover"
                                                margin={{ top: "6px" }}
                                            />
                                        </Box>
                                    </Link>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};
