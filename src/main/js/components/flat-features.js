import React from "react";
import { Box, Heading, Video } from "grommet";

// used for the feature box
export const FlatFeatures = ({ items }) => (
    <Box gap="large">
        {items.map((item) => (
            <Box key={item.id}>
                <Box>
                    <Heading level={2} color="dark-3" type="secondary" textAlign="center">
                        {item.title}
                    </Heading>
                </Box>
                <Box elevation="medium" round="xsmall" height="600px">
                    <Box height="50%" pad="large" background="light-2">
                        {item.content}
                    </Box>
                    <Box height="50%" background="dark-3" pad="medium">
                        <Video fit="cover" controls={false} autoPlay loop>
                            <source key="video" src={item.videoSrc} type="video/mp4" />
                        </Video>
                    </Box>
                </Box>
            </Box>
        ))}
    </Box>
);
