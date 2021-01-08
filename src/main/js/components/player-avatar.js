import React, { useMemo } from "react";
import { useImage } from "react-image";
import { Image } from "grommet";

import { BaseRenderWrapper } from "./base-renderer";


const URL = "https://crafatar.com/avatars";

// uses the crafatar api to render a player head 2d

const PlayerAvatarInternal = ({
                                                               minecraftPlayerId,
                                                               size,
                                                               style,
                                                           }) => {
    const pixelSize = useMemo(() => {
        switch (size) {
            case "small":
                return 18;
            case "medium":
                return 24;
            case "large":
                return 32;
        }
    }, [size]);

    const { src } = useImage({
        srcList: `${URL}/${minecraftPlayerId}?size=${pixelSize}`,
    });

    return <Image fit="contain" src={src} alt="player-avatar" style={style} />;
};

export const PlayerAvatar = (props) => {
    return (
        <BaseRenderWrapper>
            <PlayerAvatarInternal {...props} />
        </BaseRenderWrapper>
    );
};
