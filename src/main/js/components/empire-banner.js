import React, { useMemo } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: absolute;
  transform: skewY(21deg) skewX(-2deg) translate(-5px, 4px) scale(0.815);
  z-index: 10;
`;


// empire banner renderer, takes in a base64 image and transposes it to look 3d
export const EmpireBanner = ({
                                                              bannerSrc,
                                                              face = "left",
                                                              size = "medium",
                                                          }) => {
    const bannerImgStyle = useMemo(() => {
        switch (size) {
            case "small":
                return { height: 90, width: 45 };
            case "medium":
                return { height: 130, width: 65 };
            case "large":
                return { height: 170, width: 85 };
        }
    }, [size]);

    if (!bannerSrc) {
        return (
            <div
                style={{
                    position: "relative",
                    transform: face === "right" ? "scaleX(-1)" : "none",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        zIndex: 3,
                    }}
                >
                    <img
                        src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/White_Banner.png"
                        // fit="contain"
                        alt="empire-banner"
                        style={bannerImgStyle}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        bottom: 0,
                        width: 60,
                        height: 10,
                        backgroundColor: "#8D8D8D",
                        opacity: "100%",
                        borderRadius: "50%",
                        filter: "blur(7.9803px)",
                        transform: "rotate(14.37deg)",
                    }}
                />
            </div>
        );
    }
    return (
        <div>
            <div
                style={{
                    position: "relative",
                    transform: face === "right" ? "scaleX(-1)" : "none",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        zIndex: 3,
                    }}
                >
                    <ImageWrapper>
                        <img
                            src={`data:image/png;base64,${bannerSrc}`}
                            // fit="contain"
                            alt="empire-banner"
                            style={bannerImgStyle}
                        />
                    </ImageWrapper>
                    <div>
                        <img
                            src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/White_Banner.png"
                            // fit="contain"
                            alt="empire-banner"
                            style={bannerImgStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
