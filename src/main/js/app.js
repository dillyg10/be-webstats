import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { ReactElement, Suspense, useCallback } from "react";
import { lazy, mount, redirect, withView } from "navi";
import { NotFoundBoundary, Router, View } from "react-navi";
import {Layout, SuspenseFallback, NotFound} from "./components";
import {ResourceLayout} from "./resource-layout";
// import { ResolvableMatcher } from "navi/dist/types/Matcher";

import ReactDOM from 'react-dom';
import {Home} from "./routes/home/";
import {changeFactoryDefault} from './api/change-factory-default'

const client = require('./client');

const NAV_LINKS = {
    HOME: {
        display: "Home",
        href: "/",
    },
    EMPIRE: {
        display: "Empire",
        href: "/empire/:name",
    },
    PLAYER: {
        display: "Player",
        href: "/player/:username",
    },
    // RAID: {
    //     display: "Raid",
    //     href: "/raid/:id",
    // },
    EMPIRE_LEADERBOARD: {
        display: "Empire Leaderboard",
        href: "/empire-leaderboard",
    },
    PLAYER_LEADERBOARD: {
        display: "Player Leaderboard",
        href: "/player-leaderboard",
    }
};

export function routeMatcher(
    dirName,
    matcherName,
) {
    return changeFactoryDefault(
        () => import(`./routes/${dirName}`),
        `${matcherName || dirName}Route`,
    );
}
//<ResourceLayout>
const routes = mount({
    // '/healthcheck': lazy(containerMatcher('healthcheck')),
    "/": redirect(NAV_LINKS.HOME.href), // Homepage redirect
    [NAV_LINKS.HOME.href]: lazy(routeMatcher("home", "Home")),
    [NAV_LINKS.EMPIRE_LEADERBOARD.href]: lazy(
        routeMatcher("empire-leaderboard", "EmpireLeaderboard"),
    ),
    [NAV_LINKS.PLAYER_LEADERBOARD.href]: lazy(
        routeMatcher("player-leaderboard", "PlayerLeaderboard"),
    ),
    "*": withView(
        <ResourceLayout>
            <View />
        </ResourceLayout>
        ,
        mount({
            [NAV_LINKS.EMPIRE.href]: lazy(routeMatcher("empire", "Empire")),
            [NAV_LINKS.PLAYER.href]: lazy(routeMatcher("player", "Player"))
            // [NAV_LINKS.RAID.href]: lazy(routeMatcher("raid", "Raid")),
        }),
    ),
});

export const App = () => {
    const notFound = useCallback(() => <NotFound/>, []);

    return (
        <Router routes={routes}>
            <NotFoundBoundary render={notFound}>
                <Layout navLinks={NAV_LINKS}>
                    <Suspense fallback={<SuspenseFallback/>}>
                        <View/>
                    </Suspense>
                </Layout>
            </NotFoundBoundary>
        </Router>
    )
}

const ROOT = '/api'
const PLAYER_SEARCH_ROOT = `${ROOT}/players/search/`;
const EMPIRE_SEARCH_ROOT = `${ROOT}/empires/search/`

class Queries {

    getPlayer(username) {
        return client({
            method: 'GET',
            path: PLAYER_SEARCH_ROOT+'findPlayerByUsername',
            params: {
                username: username
            }
        });
    }

    getFeaturedPlayers(){
        return client({
            method: 'GET',
            path: PLAYER_SEARCH_ROOT+"getAllByOrderByEloDesc",
            params: {
                page: 0,
                size: 3
            }
        })
    }

    getTopPlayers(n){
        return client({
            method: 'GET',
            path: PLAYER_SEARCH_ROOT+"getAllByOrderByEloDesc",
            params: {
                page: 0,
                size: n
            }
        })
    }

    searchPlayersLike(username, n=5){
        return client({
            method: 'GET',
            path: PLAYER_SEARCH_ROOT+"findPlayersByUsernameLike",
            params: {
                username: `%${username}%`,
                page: 0,
                size: n
            }
        })
    }

    getPlayersInEmpire(empireId) {
        return client({
            method: 'GET',
            path: PLAYER_SEARCH_ROOT+"findPlayersByEmpireIdEquals",
            params: {
                id: empireId
            }
        });
    }

    getEmpireByName(name){
        return client({
            method: 'GET',
            path: EMPIRE_SEARCH_ROOT+"findEmpireByName",
            params: {
                name: name
            }
        });
    }

    getEmpireById(id) {
        return client({
            method: 'GET',
            path: `${ROOT}/empires/${id}`,
        });
    }

    getFeaturedEmpires(){
        return client({
            method: 'GET',
            path: EMPIRE_SEARCH_ROOT+"getAllByOrderByEloDesc",
            params: {
                page: 0,
                size: 3
            }
        })
    }

    getTopEmpires(n){
        return client({
            method: 'GET',
            path: EMPIRE_SEARCH_ROOT+"getAllByOrderByEloDesc",
            params: {
                page: 0,
                size: n
            }
        })
    }

    searchEmpiresLike(displayName, n=5) {
        return client({
            method: 'GET',
            path: EMPIRE_SEARCH_ROOT+"findEmpiresByDisplayNameLike",
            params: {
                displayName: `%${displayName}%`,
                page: 0,
                size: n
            }
        })
    }

}

export const queries = new Queries();

ReactDOM.render(
    <App />,
    document.getElementById('react')
);

