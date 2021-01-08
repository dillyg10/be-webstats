import React from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { route } from "navi";

import {
    EmpireInfo,
    PlayerPreviewList,
    ResourcePage,
    SectionHeading,
    SpinLoader,
    StatBlock,
} from "../../components";

import {queries} from "../../app";

// sidebar for empire info
const EmpireSideContent = ({ empire }) => (
    <ResponsiveContext.Consumer>
        {(size) => (
            <EmpireInfo
                empire={empire}
                size={size === "large" ? "small" : "medium"}
            />
        )}
    </ResponsiveContext.Consumer>
);

// empire info page
export class Empire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empire: null,
            members: null
        }
    }

    componentDidMount() {
        queries.getEmpireByName(this.props.name).then(result => {
            if (result) {
                const empire = result.entity;
                this.setState({
                    empire: empire,
                    members: null
                });
                return queries.getPlayersInEmpire(empire.id);
            }
            return Promise.reject("404 not found");
        }).done(result => {
            this.setState({
                empire: this.state.empire,
                members: result.entity._embedded.players
            })
        }, error => {
            console.log(error);
        })

    }

    render() {
        const empire = this.state.empire;
        const members = this.state.members;
        if (empire && members) {
            return (
                <ResourcePage sideContent={<EmpireSideContent empire={empire} />}>
                    <Box>
                        <SectionHeading>
                            Members ({members.length})
                        </SectionHeading>
                        <PlayerPreviewList players={members} />
                    </Box>
                    <Box
                        pad={{
                            top: "medium",
                        }}
                    >
                        <SectionHeading>Stats</SectionHeading>
                        <ResponsiveContext.Consumer>
                            {(size) => (
                                <Grid
                                    columns={{
                                        count: ["xsmall", "small"].includes(size) ? 2 : 3,
                                        size: "xsmall",
                                    }}
                                    gap="small"
                                >
                                    {[
                                        {
                                            name: "Times Raided",
                                            value: empire.timesRaided,
                                            iconType: "raid_status",
                                        },
                                        {
                                            name: "Own Structures Destroyed",
                                            value: empire.structuresDestroyed,
                                            iconType: "destroy_structure",
                                        },
                                        {
                                            name: "Own Structures Repaired",
                                            value: empire.structuresRepaired,
                                            iconType: "repair_structure",
                                        },
                                        {
                                            name: "Relics Captured",
                                            value: empire.relicsCaptured,
                                            iconType: "capture_relic",
                                        },
                                        {
                                            name: "Relics Returned",
                                            value: empire.relicsReturned,
                                            iconType: "return_relic",
                                        },
                                        {
                                            name: "Objectives Completed",
                                            value: empire.objectivesCompleted,
                                            iconType: "objective_complete",
                                        },
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
                    <Box
                        pad={{
                            top: "large",
                        }}
                    >
                    </Box>
                </ResourcePage>
            );
        }

        return null;
    }
}

// empire route object
export const EmpireRoute = route((req) => {
    return { view: <Empire name={req.params.name} /> };
});
