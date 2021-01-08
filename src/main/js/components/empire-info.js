import React from "react";
import { Box, Text } from "grommet";
import { DateTime } from "luxon";
import { Tip } from "grommet/components/Tip";

import { EmpireBanner } from "./empire-banner";
import { ProgressMeter } from "./progress-meter";
import { EmpireHeader } from "./empire-header";

// detailed empire info
export const EmpireInfo = ({
                                                          empire,
                                                          size,
                                                      }) => {
    return (
        <Box align="center">
            <Box width="medium" align="center">
                <EmpireHeader
                    leftText={empire.displayName}
                    rightText={`${empire.elo} ELO`}
                    size={size}
                />
                <Box
                    elevation="xmedium"
                    width={size === "small" ? "250px" : "343px"}
                    style={{ position: "relative", top: -6, zIndex: 1 }}
                >
                    <Box background="light-0" pad="medium">
                        <Box align="center">
                            <EmpireBanner
                                bannerSrc={empire.banner}
                                face="left"
                                size={size === "medium" ? "large" : "medium"}
                            />
                        </Box>
                    </Box>
                    <Box background="light-4" height="3px" />
                    <Box background="light-3" pad="xsmall" height="140px">
                        <Box align="center" flex="grow" justify="between">
                            <Box width="220px">
                                <Text alignSelf="center" weight={600}>
                                    {`Tier ${empire.tier}`}
                                </Text>
                                <Box>
                                    <Text size="small">Level: {empire.level}</Text>
                                    <Tip
                                        content={<Text size="xsmall">5 Levels till next Tier</Text>}
                                        dropProps={{
                                            stretch: false,
                                        }}
                                    >
                                        <Box>
                                            <ProgressMeter value={empire.level} max={20} barColor="accent-2" />
                                        </Box>
                                    </Tip>
                                </Box>
                                <Box
                                    margin={{
                                        top: "xsmall",
                                    }}
                                >
                                    <Text size="small">
                                        Current Relics: {empire.relics}
                                    </Text>
                                    <Tip
                                        content={
                                            <Text size="xsmall">50 Relics till next Level</Text>
                                        }
                                        dropProps={{
                                            stretch: false,
                                        }}
                                    >
                                        <Box>
                                            <ProgressMeter
                                                value={empire.relics}
                                                max={100}
                                                barColor="accent-3"
                                            />
                                        </Box>
                                    </Tip>
                                </Box>
                            </Box>
                            <div>
                                <Text size="small" weight="bold">
                                    Created:{" "}
                                </Text>
                                <Text size="small">
                                    {DateTime.fromISO(empire.created).toLocaleString(
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
