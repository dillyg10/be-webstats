import React, {
    Fragment,
    useEffect,
    useRef,
} from "react";
import { useCurrentRoute } from "react-navi";
import { Box, Grid, Grommet, ResponsiveContext } from "grommet";
import { ParallaxProvider } from "react-scroll-parallax";

import { Header } from "./header";
import { Footer } from "./footer";
import { theme } from "../assets/styles/theme/theme";

// fundemental layout object
export const Layout = ({
                                                               children,
                                                               navLinks,
                                                           }) => {
    // const loadingRoute = useLoadingRoute();
    const currentRoute = useCurrentRoute();
    const hideLayout = currentRoute?.data?.hideLayout;
    const layoutRef = useRef(null);

    // Scroll to top of page on navigation change
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        layoutRef.current.scroll(0, 0);
    }, [currentRoute.url.href]);

    const displayInLayout = (
        <Grommet
            full
            background="light-1"
            theme={theme}
            style={{
                overflowX: "hidden",
            }}
        >
            <Grid fill rows={["auto", "flex"]}>
                <Header />
                <Box
                    direction="column"
                    overflow={{
                        vertical: "scroll",
                        horizontal: "hidden",
                    }}
                    ref={layoutRef}
                    align="center"
                >
                    <ParallaxProvider scrollContainer={layoutRef.current}>
                        {/*<ResponsiveContext.Consumer>*/}
                        {/*    {(size) => {*/}
                        {/*        return size !== "xlarge" ? <SearchWidget /> : null;*/}
                        {/*    }}*/}
                        {/*</ResponsiveContext.Consumer>*/}
                        <Box
                            flex="grow"
                            style={{
                                minHeight: 750,
                                width: "100%",
                            }}
                        >
                            {children}
                        </Box>
                        <Footer />
                    </ParallaxProvider>
                </Box>
            </Grid>
        </Grommet>
    );

    return (
        <Fragment>
            {/*<BusyIndicator show={!!loadingRoute} />*/}
            {hideLayout ? children : displayInLayout}
        </Fragment>
    );
};
