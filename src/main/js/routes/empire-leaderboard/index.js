import React from 'react';
import { Box, DataTable, Heading, Text } from "grommet";
import { route } from "navi";

import { EmpirePreview, SpinLoader } from "../../components";

import {queries} from "../../app";

export class EmpireLeaderboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empires: null
        }
    }

    componentDidMount() {
        queries.getTopEmpires(25)
            .done(result => {
                let empires = result.entity._embedded.empires;
                empires.forEach(empire => empire.empire = empire);
                this.setState({
                    empires: empires
                })
            }, err =>{
                console.log(err)
            });
    }

    render() {
        if (this.state.empires) {
            return (
                <Box pad="large" animation="fadeIn">
                    <Box>
                        <Heading level={2}>Top 25 Empires</Heading>
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
                                    property: "empire",
                                    header: "Empire",
                                    render: (datum) => (
                                        <EmpirePreview empire={datum.empire} size="small"/>
                                    ),
                                },
                                {
                                    property: "relicsCaptured",
                                    header: "Relics Captured",
                                },
                                {
                                    property: "relicsReturned",
                                    header: "Relics Returned",
                                },
                                {
                                    property: "timesRaided",
                                    header: "Times Raided",
                                }
                            ]}
                            data={this.state.empires}
                            sortable
                        />
                    </Box>
                </Box>
            )
        }
        return <SpinLoader />
    }
}

export const EmpireLeaderboardRoute = route(() => {
    return { view: <EmpireLeaderboard /> };
});
