import React, { useMemo } from "react";
import {
    GiAbstract091,
    GiAnvil,
    GiCastle,
    GiChewedSkull,
    GiCubes,
    GiFlame,
    GiPointySword,
    GiReceiveMoney,
    GiReturnArrow,
    GiSwordsEmblem,
    GiTopHat,
} from "react-icons/gi";
import { Tip } from "grommet/components/Tip";
import { Box } from "grommet";
import { CgArrowUpO } from "react-icons/cg";
import {
    FaArrowRight,
    FaCrown,
    FaDoorClosed,
    FaDoorOpen,
    FaExchangeAlt,
} from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

// all available icons
const IconMap = {
    destroy_structure: GiFlame,
    repair_structure: GiAnvil,
    steal_relic: GiCubes,
    return_relic: GiReturnArrow,
    capture_relic: GiAbstract091,
    level_up: CgArrowUpO,
    raid_status: GiSwordsEmblem,
    login: FaDoorOpen,
    logout: FaDoorClosed,
    objective_complete: BsExclamationCircle,
    death: GiChewedSkull,
    role_governor: GiTopHat,
    role_emperor: FaCrown,
    swap: FaExchangeAlt,
    castle: GiCastle,
    kill: GiPointySword,
    sell: GiReceiveMoney,
    arrow_right: FaArrowRight,
};

// icon object
export const Icon = ({
                                              type,
                                              size = "medium",
                                              color,
                                          }) => {
    const iconSize = useMemo(() => {
        switch (size) {
            case "small":
                return 12;
            case "medium":
                return 18;
            case "large":
                return 28;
            case "xlarge":
                return 36;
            case "xxlarge":
                return 90;
        }
    }, [size]);

    if (!type) {
        return null;
    }
    const Icon = IconMap[type];

    return <Icon size={iconSize} color={color} />;
};

// icon specific for player roles
export const RoleIcon = ({ role }) => {
    let icon = null;
    let tip = null;
    let color;
    if ('MEMBER' === role) {
        return null;
    } else {
        icon = "role_emperor";
        tip = "Emperor";
        color = "orange";
    }

    return (
        <Box direction="row" align="center" justify="center">
            <Tip content={tip}>
                <Box>
                    {icon ? <Icon type={icon} size="small" color={color} /> : null}
                </Box>
            </Tip>
        </Box>
    );
};

