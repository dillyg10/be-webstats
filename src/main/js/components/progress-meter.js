import React, { useMemo } from "react";
import { Box } from "grommet";

import { useIsMounted } from "../api/use-is-mounted";

// displays progress on a bar that fills up when loaded
export const ProgressMeter = ({
                                                                max,
                                                                value,
                                                                barColor = "brand",
                                                                backgroundColor = "light-4",
                                                                round = true,
                                                            }) => {
    const isMounted = useIsMounted();
    const percentComplete = useMemo(() => Math.round((value / max) * 100), [
        max,
        value,
    ]);

    return (
        <Box
            width="medium"
            flex="grow"
            background={backgroundColor}
            pad="1px"
            direction="row"
            round={round ? "medium" : false}
        >
            <Box
                round={round ? "medium" : false}
                background={barColor}
                height="6px"
                alignSelf="center"
                width={isMounted ? `${percentComplete}%` : "0%"}
                style={{
                    transition: "width 450ms ease-in",
                }}
            />
        </Box>
    );
};
