import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { route } from "navi";

import {
    PlayerInfo,
    //RaidTable,
    ResourcePage,
    SectionHeading,
    SpinLoader,
    StatBlock,
} from "../../components";
import {queries} from "../../app";
// import { PlayerEventsTable } from "./components";

const PlayerSideContent = ({ player }) => (
    <ResponsiveContext.Consumer>
        {(size) => (
            <PlayerInfo
                player={player}
                size={size === "large" ? "small" : "medium"}
            />
        )}
    </ResponsiveContext.Consumer>
);

export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null
        }
    }

    componentDidMount() {
        queries.getPlayer(this.props.username)
            .done(result => {
                this.setState({player: result})
            }, error => {
                console.log(error);
            })
    }
    /*
          "kills" : 10,
      "deaths" : 5,
      "objectivesCompleted" : 1,
      "itemsSold" : 10,
      "barbariansRaided" : 12,
      "empiresRaided" : 1,
      "totalRaids" : 1,
      "relicsStolen" : 4,
     */

    render() {
        if (this.state.player && this.state.player.entity) {
            const player = this.state.player.entity;
            return (
                <ResourcePage sideContent={<PlayerSideContent player={player} />}>
                    <Box>
                        <Box>
                            <SectionHeading>Stats</SectionHeading>
                            <ResponsiveContext.Consumer>
                                {(size) => (
                                    <Grid
                                        columns={{
                                            count: ["xsmall", "small"].includes(size) ? 2 : 4,
                                            size: "flex",
                                        }}
                                        gap="small"
                                    >
                                        {[
                                            {
                                                name: "Players Killed",
                                                value: player.kills,
                                                iconType: "kill",
                                            },
                                            { name: "Deaths", value: player.deaths, iconType: "death" },
                                            {
                                                name: "Objectives Completed",
                                                value: player.objectivesCompleted,
                                                iconType: "objective_complete",
                                            },
                                            {
                                                name: "Items Sold",
                                                value: player.itemsSold,
                                                iconType: "sell",
                                            },
                                            {
                                                name: "Barbarians Raided",
                                                value: player.barbariansRaided,
                                                iconType: "raid_status",
                                            },
                                            {
                                                name: "Empires Raided",
                                                value: player.empiresRaided,
                                                iconType: "raid_status",
                                            },
                                            {
                                                name: "Total Raids",
                                                value: player.totalRaids,
                                                iconType: "raid_status",
                                            },
                                            {
                                                name: "Relics Stolen",
                                                value: player.relicsStolen,
                                                iconType: "steal_relic",
                                            }
                                        ].map((o, i) => (
                                            <StatBlock
                                                key={i}
                                                name={o.name}
                                                value={o.value}
                                                iconType={o.iconType}
                                            />
                                        ))}
                                    </Grid>
                                )}
                            </ResponsiveContext.Consumer>
                        </Box>
                    </Box>
                    <Box
                        pad={{
                            top: "medium",
                        }}
                    >
                        {/*<SectionHeading>Raids</SectionHeading>*/}
                        {/*<Box overflow="scroll">*/}
                        {/*    <RaidTable raids={data.player.raids} />*/}
                        {/*</Box>*/}
                    </Box>
                    {/*<Box*/}
                    {/*    pad={{*/}
                    {/*        top: "medium",*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <SectionHeading>Recent Activity</SectionHeading>*/}
                    {/*    <Box overflow="scroll">*/}
                    {/*        <PlayerEventsTable events={data.player.events} />*/}
                    {/*    </Box>*/}
                    {/*</Box>*/}
                </ResourcePage>
            );
        }
        return <SpinLoader />
    }
}

export const PlayerRoute = route((req) => {
    return { view: <Player username={req.params.username} /> };
});