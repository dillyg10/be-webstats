import React from "react";
import styled from "styled-components";
import { Box, Image } from "grommet";
import { useActive } from "react-navi";

const BackgroundImageWithGradient = styled(Image)`
  -webkit-mask-image: linear-gradient(to right, transparent 5%, black 25%);
  mask-image: linear-gradient(to top, transparent 5%, black 25%);
  opacity: 0.65;
  transition: opacity 500ms ease-in-out;
`;

// main layout for the site
export const ResourceLayout = ({
                                                                  children,
                                                                   }) => {
    // background switcher
    const isPlayer = useActive("/player", { exact: false }) || useActive("/player-leaderboard", { exact: false });
    const isEmpire = useActive("/empire", { exact: false });
    const isRaid = useActive("/raid", { exact: false });

    // Wraps the page in the header, footer, and background objects
    return (
        <>
            <Box
                style={{
                    top: 0,
                    position: "absolute",
                    width: "100%",
                    height: 580,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            margin: "0 auto",
                        }}
                    >
                        <BackgroundImageWithGradient
                            fit="cover"
                            height="580px"
                            width="100%"
                            src="https://www.wallpapertip.com/wmimgs/24-244857_minecraft-shaders.png"
                            style={{ opacity: isPlayer ? 0.65 : 0 }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                        }}
                    >
                        <BackgroundImageWithGradient
                            fit="cover"
                            height="580px"
                            width="100%"
                            src="https://assets.rockpapershotgun.com/images/2019/08/Minecraft-shaders-1.14-Sildurs-Vibrant-Shaders-1212x682.png"
                            style={{ opacity: isEmpire ? 0.65 : 0 }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                        }}
                    >
                        <BackgroundImageWithGradient
                            fit="cover"
                            height="580px"
                            width="100%"
                            src="https://pbs.twimg.com/media/EYjuKqdXgAAWj5g.jpg"
                            style={{ opacity: isRaid ? 0.5 : 0 }}
                        />
                    </div>
                </div>
            </Box>
            {children}
        </>
    );
};
