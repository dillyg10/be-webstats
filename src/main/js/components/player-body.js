import React, { useMemo } from "react";
import { useImage } from "react-image";
import { Image } from "grommet";

import { BaseRenderWrapper } from "./base-renderer";


const URL = "https://crafatar.com/renders/body/";

export const PlayerBodyInternal = ({
                                                                  minecraftPlayerId,
                                                                  size = "medium",
                                                                  facing = "left",
                                                              }) => {
    const scaleSize = useMemo(() => {
        switch (size) {
            case "small":
                return 2;
            case "medium":
                return 3;
            case "large":
                return 4;
            case "xlarge":
                return 6;
        }
    }, [size]);

    const { src } = useImage({
        srcList: `${URL}/${minecraftPlayerId}?scale=${scaleSize}&default=MHF_Steve&overlay`,
    });

    return (
        <Image
            fit="contain"
            src={src}
            alt="player-avatar"
            style={
                facing === "left"
                    ? {
                        transform: "scaleX(-1)",
                    }
                    : {}
            }
        />
    );
};

export const PlayerBody = (props) => {
    return (
        <BaseRenderWrapper>
            <PlayerBodyInternal {...props} />
        </BaseRenderWrapper>
    );
};
