import React from "react";
import { Box, Text } from "grommet";
import { DateTime } from "luxon";
import { Tip } from "grommet/components/Tip";

import { ProgressMeter } from "./progress-meter";
import { PlayerBody } from "./player-body";
import { EmpirePreview } from "./empire-preview";
import { RoleIcon } from "./icon";
import { PlayerHeader } from "./player-header";
import {queries} from "../app";

// import { EmpireBanner } from "../empire-banner";

class EmpirePreviewInternal extends React.Component{

    constructor(props) {
        super(props);

        this.state =
            {
                empire: null
            }
    }

    componentDidMount() {
        if (this.props.player.empireId) {
            queries.getEmpireById(this.props.player.empireId)
                .done(result => {
                    this.setState({
                        empire: result.entity
                    })
                }, err => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            this.state.empire ? (
                    <EmpirePreview empire={this.state.empire} size="medium" />
                ) : (
                    <Text>Nomad</Text>
                )
        )
    }
}

export const PlayerInfo = ({
                                                          player,
                                                          size = "medium",
                                                      }) => {
    return (
        <Box align="center">
            <Box width="medium" align="center">
                <PlayerHeader
                    leftText={player.username}
                    rightText={`${player.elo} ELO`}
                    size={size}
                />
                <Box
                    elevation="xmedium"
                    width={size === "small" ? "250px" : "343px"}
                    style={{ position: "relative", top: -6, zIndex: 1 }}
                >
                    <Box background="light-0" pad="medium">
                        <Box align="center">
                            <div
                                style={{
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        zIndex: 3,
                                    }}
                                >
                                    <PlayerBody
                                        minecraftPlayerId={player.minecraftId}
                                        facing="left"
                                        size={size === "medium" ? "large" : "medium"}
                                    />
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        zIndex: 1,
                                        bottom: 0,
                                        width: 70,
                                        height: 10,
                                        backgroundColor: "#8D8D8D",
                                        opacity: "100%",
                                        borderRadius: "50%",
                                        filter: "blur(7.9803px)",
                                        transform: "rotate(14.37deg)",
                                    }}
                                />
                            </div>
                        </Box>
                    </Box>
                    <Box background="light-4" height="3px" />
                    <Box background="light-3" pad="xsmall" height="140px">
                        <Box align="center" flex="grow" justify="between">
                            <Box width="220px">
                                <Box align="center">
                                    <EmpirePreviewInternal player={player}/>
                                </Box>
                                <Box margin={{ top: "xsmall" }}>
                                    <Box direction="row">
                                        <Text size="small" margin={{ right: "xxsmall" }}>
                                            Role:
                                        </Text>
                                        <RoleIcon role={player.role} />
                                        <Text size="small" margin={{ left: "xxsmall" }}>
                                            {player.role}
                                        </Text>
                                    </Box>
                                    <Text size="small">Level: {player.level}</Text>
                                    <Tip
                                        content={<Text size="xsmall">Player level</Text>}
                                        dropProps={{
                                            stretch: false,
                                        }}
                                    >
                                        <Box>
                                            <ProgressMeter value={player.experience} max={100} barColor="accent-2" />
                                        </Box>
                                    </Tip>
                                </Box>
                            </Box>
                            <div>
                                <Text size="small" weight="bold">
                                    Created:{" "}
                                </Text>
                                <Text size="small">
                                    {DateTime.fromISO(player.created).toLocaleString(
                                        DateTime.DATE_FULL,
                                    )}
                                </Text>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
