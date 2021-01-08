import React from 'react';
import { Box, DataTable, Heading, Text } from "grommet";
import { route } from "navi";

import { PlayerPreview, SpinLoader } from "../../components";

import {queries} from "../../app";

// top 25 player leaderboard
export class PlayerLeaderboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: null
        }
    }

    componentDidMount() {
        queries.getTopPlayers(25)
            .done(result => {
                let players = result.entity._embedded.players;
                players.forEach(player => player.player = player);
                this.setState({
                    players: players
                })
            }, err =>{
                console.log(err)
            });
    }

    render() {
        if (this.state.players) {
            return (
                <Box pad="large" animation="fadeIn">
                    <Box>
                        <Heading level={2}>Top 25 Players</Heading>
                    </Box>
                    <Box
                        overflow={{
                            horizontal: "scroll",
                        }}
                    >
                        <DataTable
                            border={{
                                color: "light-5",
                                side: "bottom",
                            }}
                            primaryKey="id"
                            columns={[
                                {
                                    property: "elo",
                                    header: "ELO",
                                },
                                {
                                    property: "player",
                                    header: "Player",
                                    render: (datum) => (
                                        <PlayerPreview player={datum.player} size="small"/>
                                    ),
                                },
                                {
                                    property: "relicsStolen",
                                    header: "Relics Stolen",
                                },
                                {
                                    property: "deaths",
                                    header: "Deaths",
                                },
                                {
                                    property: "kills",
                                    header: "Players Killed",
                                },
                                {
                                    property: "totalRaids",
                                    header: "Total Raids",
                                },
                            ]}
                            data={this.state.players}
                            sortable
                        />
                    </Box>
                </Box>
            )
        }
        return <SpinLoader />
    }
}

export const PlayerLeaderboardRoute = route(() => {
    return { view: <PlayerLeaderboard /> };
});
