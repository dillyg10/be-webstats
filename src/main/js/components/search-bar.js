import React, { useCallback, useMemo, useState } from "react";
import { Box, ColumnSizeType, Text, TextInput, Select } from "grommet";
import _ from "lodash";
import { useNavigation } from "react-navi";
import {queries} from "../app";

// search suggestion object
const SearchSuggestion = ({
    value,
    isLast
}) => (
    <Box
        direction="row"
        align="center"
        gap="small"
        border={!isLast ? "bottom" : undefined}
        pad="small"
    >
        {/*<Image width="48px" src={imageUrl} style={{ borderRadius: "100%" }} />*/}
        <Text>
            <strong>{value.displayName ? value.displayName : value.username}</strong>
        </Text>
    </Box>
);

// search toggle type
class SearchToggle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'player'
        }
    }

    render() {
        return (
            <Select
                options={['player', 'empire']}
                value={this.state.value}
                onChange={({option}) => {
                    this.setState({
                        value:option
                    })
                    this.props.onToggle(option);
                }}
            />
        )
    }
}

// search text box
const SearchText = ({type, size, suggests, onSuggestionsChange}) => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");

    const onSuggestionSelect = useCallback(
        (event) => {
            const value = event.suggestion.value;
            if (type === 'empire') {
                navigation.navigate(`/empire/${value.name}`);
            } else if (type === "player") {
                navigation.navigate(`/player/${value.username}`);
            }

            // if (onSelect) {
            //     onSelect(value);
            // }
            setSearchText("");
        },
        [navigation, type],
    );

    const suggestions = useMemo(() => {
        if (!suggests) {
            return [];
        }
        return suggests.map((suggest, i) => {
            return {
                value: suggest,
                label: <SearchSuggestion value={suggest} isLast={suggests.length === i - 1} />
            };
        });
    }, [suggests]);
//throttledSearch(event.target.value)

    return (
        <TextInput
            // @ts-ignore
            suggestions={suggestions}
            onSelect={onSuggestionSelect}
            onChange={(event) => {
                setSearchText(event.target.value);
                onSuggestionsChange(event.target.value);
            }}
            value={searchText}
            placeholder="Search player or empire..."
            size={size}
            style={{ background: "black" }}
            autoFocus={false}
        />
    )
}

// combined state holder for text box and option menu
export class SearchBar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            type: 'player',
            suggestions: []
        }

        this.onSuggestionsChange = this.onSuggestionsChange.bind(this);//_.throttle((val) => this.onSuggestionsChange(val), 150).bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(option) {
        this.setState({
            type: option,
            suggestions: []
        });
    }


    onSuggestionsChange(val) {
        if (this.state.type === 'empire') {
            queries.searchEmpiresLike(val).done(result => {
                this.setState({
                    type: this.state.type,
                    suggestions: result.entity._embedded.empires
                })
            }, err => {
                console.log(err);
            });
        } else {
            queries.searchPlayersLike(val).done(result => {
                this.setState({
                    type: this.state.type,
                    suggestions: result.entity._embedded.players
                })
            }, err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <Box
                direction="row"
            >
                <SearchText type={this.state.type} suggests={this.state.suggestions} onSuggestionsChange={this.onSuggestionsChange} size={this.props.size} />
                <SearchToggle onToggle={this.onToggle} />
            </Box>
        )
    }

}