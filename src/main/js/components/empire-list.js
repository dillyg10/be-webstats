import React, { useCallback } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import { useNavigation } from "react-navi";

import { EmpireInfo, SpinLoader } from "./";
import {queries} from "../app";

export const EmpireListObjectInternal = ({empire, size}) => {
    const navigation = useNavigation();

    const gotoEmpirePage = useCallback(
        (empireSlug) => navigation.navigate(`/empire/${empireSlug}`),
        [navigation],
    );

    return (<Box
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => gotoEmpirePage(empire.name)}
        key={empire.id}
        // focusIndicator={false}
    >
        <EmpireInfo
            size={
                ["xsmall", "small", "large"].includes(size)
                    ? "small"
                    : "medium"
            }
            key={empire.id}
            empire={empire}
        />
    </Box>);
}

export class EmpireList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            empires: null
        }
    }

    componentDidMount() {
        queries.getFeaturedEmpires().done(empires => {
            this.setState({
                empires: empires.entity._embedded.empires
            })
        }, err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.empires) {
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
                                {this.state.empires.map((empire) => (
                                    <EmpireListObjectInternal empire={empire} size={size} key={empire.id}/>
                                ))}
                            </Grid>
                        )}
                    </ResponsiveContext.Consumer>
                </div>
            );
        }
        return (<SpinLoader/>)
    }
}
