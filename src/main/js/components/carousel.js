import { Box, Image } from "grommet";
import React from "react";

export function Carousel(props) {
    return (<Box background="#1C232D" pad="small" flex="grow" height="100%">
        <Image
            fit="cover"
            src="https://www.minecraft.net/content/dam/archive/56d7f29938a00fe870956948f91d5d43-Castle2.jpg"
        />
    </Box>);
}
