import React, { Suspense } from "react";

import { SpinLoader } from "./loader";

// base renderer for player avatars
export const BaseRenderWrapper = ({ children }) => {
    return <Suspense fallback={<SpinLoader />}>{children}</Suspense>;
};
