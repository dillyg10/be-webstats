import React, { useCallback } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useNavigation } from "react-navi";

import { PlayerInfo, SpinLoader } from "./";
import {queries} from "../app";

// internal object render
const PlayerListObjectInternal = ({player, size}) => {
    const navigation = useNavigation();

    const gotoPlayerPage = useCallback(
        (playerUsername) => navigation.navigate(`/player/${playerUsername}`),
        [navigation],
    );
    return (
    <Box
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => gotoPlayerPage(player.username)}
        key={player.username}
        // focusIndicator={false}
    >
        <PlayerInfo
            key={player.username}
            player={player}
            size={
                ["xsmall", "small", "large"].includes(size)
                    ? "small"
                    : "medium"
            }
        />
    </Box>
    )
}

// shows list of players with more info
export class PlayerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {players: null}
    }

    componentDidMount() {
        queries.getFeaturedPlayers().done(players => {
            this.setState({
                players: players.entity._embedded.players
            })
        }, error =>{
            console.log(error);
        })
    }


    render() {

        if (!this.state.players) {
            return <SpinLoader />
        }

        return (
            <div>
                <ResponsiveContext.Consumer>
                    {(size) => (
                        <Grid
                            fill
                            columns={{
                                count: ["large", "xlarge"].includes(size) ? 3 : 1,
                                size: "flex",
                            }}
                            gap="medium"
                        >
                            {this.state.players.map((player) => (
                                <PlayerListObjectInternal player={player} size={size} key={player.username}/>
                            ))}
                        </Grid>
                    )}
                </ResponsiveContext.Consumer>
            </div>
        );
    }
}
