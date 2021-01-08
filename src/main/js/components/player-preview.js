import React, { useCallback } from "react";
import { Box, Card, Text } from "grommet";
import { ColorType } from "grommet/utils";
import { useNavigation } from "react-navi";

import { PlayerAvatar } from "./player-avatar";
import { RoleIcon } from "./icon";

// shows basic info about a player
export const PlayerPreview = ({
                                                                player,
                                                                size = "medium",
                                                                color = "brand",
                                                            }) => {
    const navigation = useNavigation();

    const onPlayerClick = useCallback(() => {
        navigation.navigate(`/player/${player.username}`);
    }, [navigation, player]);

    if (size === "small") {
        return (
            <Box
                direction="row"
                align="center"
                onClick={onPlayerClick}
                margin={{ right: "xsmall" }}
            >
                <Box pad={{ right: "xsmall" }}>
                    <PlayerAvatar minecraftPlayerId={player.minecraftId} size="small" />
                </Box>
                <Box>
                    <Text color={color} size="small" weight="bold">
                        {player.username}
                    </Text>
                </Box>
            </Box>
        );
    }

    return (
        <Card
            background="light-2"
            direction="row"
            pad="small"
            animation="zoomIn"
            onClick={onPlayerClick}
            hoverIndicator
        >
            <Box pad={{ right: "small" }}>
                <PlayerAvatar minecraftPlayerId={player.minecraftId} size="large" />
            </Box>
            <Box>
                <Box direction="row" align="center">
                    <Text
                        color={color}
                        size="small"
                        weight="bold"
                        margin={{
                            right: "xxsmall",
                        }}
                    >
                        {player.username}
                    </Text>
                    <RoleIcon role={player.role} />
                </Box>
                <Text size="small">Level: {player.level}</Text>
            </Box>
        </Card>
    );
};
