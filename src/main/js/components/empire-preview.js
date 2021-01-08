import React, { useCallback } from "react";
import { useNavigation } from "react-navi";
import { Box, Card, Image, Text } from "grommet";
import styled from "styled-components";

const EmptySmallBanner = styled.div`
  width: 10px;
  height: 20px;
  border: 1px solid grey;
  background: white;
`;

const EmptyMediumBanner = styled.div`
  width: 12px;
  height: 24px;
  border: 1px solid grey;
  background: white;
`;

// small preview for empire to give minimal info
export const EmpirePreview = ({
                                                                empire,
                                                                size = "medium",
                                                            }) => {
    const navigation = useNavigation();

    const onEmpireClick = useCallback(() => {
        navigation.navigate(`/empire/${empire.name}`);
    }, [navigation, empire]);

    if (size === "small") {
        return (
            <Box
                direction="row"
                align="center"
                onClick={onEmpireClick}
                margin={{
                    left: "xsmall",
                }}
            >
                <Box>
                    {empire != null && empire.banner != null ? (
                        <Image src={`data:image/png;base64,${empire.banner}`} height={20} width={10} />
                    ) : (
                        <EmptySmallBanner />
                    )}
                </Box>
                <Box>
                    <Text
                        margin={{ left: "xsmall" }}
                        weight="bold"
                        size="small"
                        color="brand"
                    >
                        {empire && empire.displayName}
                    </Text>
                </Box>
            </Box>
        );
    }

    return (
        <Card
            onClick={onEmpireClick}
            direction="row"
            align="center"
            pad={{
                horizontal: "small",
                vertical: "xsmall",
            }}
            round="small"
            background="light-2"
            margin={{ left: "small" }}
            hoverIndicator
        >
            {empire != null && empire.banner != null ? (
                <Image src={`data:image/png;base64,${empire.banner}`} height={24} width={12} />
            ) : (
                <EmptyMediumBanner />
            )}
            <Text margin={{ left: "xsmall" }} weight="bold">
                {empire && empire.displayName}
            </Text>
        </Card>
    );
};
