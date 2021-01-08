import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";

import { PlayerPreview } from "./player-preview";


export const PlayerPreviewList= ({
                                                                        players,
                                                                    }) => {
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Grid
                    columns={{
                        count: ["xsmall", "small"].includes(size)
                            ? 1
                            : size === "medium"
                                ? 2
                                : 3,
                        size: "small",
                    }}
                    gap="small"
                >
                    {players.map((player) => (
                        <Box key={player.username}>
                            <PlayerPreview player={player} key={player.username} color="accent-1" />
                        </Box>
                    ))}
                </Grid>
            )}
        </ResponsiveContext.Consumer>
    );
};
