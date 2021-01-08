import React, { useCallback, useMemo, useState } from "react";
import { Box, Heading, ResponsiveContext, Text, Video } from "grommet";

export const FeatureTabTitle = ({
                                                                    title,
                                                                    selected = false,
                                                                    size = "medium",
                                                                    onClick,
                                                                }) => (
    <Box
        onClick={onClick}
        border={
            selected
                ? {
                    side: "bottom",
                    size: "medium",
                    color: "accent-1",
                }
                : undefined
        }
        focusIndicator={false}
    >
        <Heading
            level={size === "medium" ? 2 : 3}
            color={selected ? "dark-3" : "dark-5"}
            margin="none"
            type="secondary"
        >
            {title}
        </Heading>
    </Box>
);

export const FeatureTabs = ({ items }) => {
    const [selected, setSelected] = useState(items[0]);

    const handleSelection = useCallback(
        (item) => setSelected(item),
        [setSelected],
    );

    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box>
                    <Box direction="row" justify="around" margin={{ bottom: "medium" }}>
                        {items.map((item, i) => (
                            <FeatureTabTitle
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={() => handleSelection(item)}
                                size={
                                    ["xsmall", "small", "medium"].includes(size)
                                        ? "small"
                                        : "medium"
                                }
                                title={item.title}
                                selected={item.id === selected.id}
                                key={i}
                            />
                        ))}
                    </Box>
                    <Box>
                        <Box
                            elevation="medium"
                            round="xsmall"
                            height={size === "medium" ? "860px" : "480px"}
                            direction={
                                ["xsmall", "small", "medium"].includes(size) ? "column" : "row"
                            }
                        >
                            <Box
                                background="light-2"
                                height={
                                    ["xsmall", "small", "medium"].includes(size) ? "50%" : "100%"
                                }
                                width={
                                    ["xsmall", "small", "medium"].includes(size) ? "100%" : "40%"
                                }
                                pad="large"
                            >
                                {selected && selected.content}
                            </Box>
                            <Box
                                background="dark-3"
                                height={
                                    ["xsmall", "small", "medium"].includes(size) ? "50%" : "100%"
                                }
                                width={["xsmall", "small", "medium"] ? "100%" : "60%"}
                                pad="medium"
                            >
                                <Video fit="cover" controls={false} autoPlay loop>
                                    <source
                                        key="video"
                                        src={selected.videoSrc}
                                        type="video/mp4"
                                    />
                                </Video>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};
