import React, { Suspense } from "react";

import { SpinLoader } from "./loader";

export const BaseRenderWrapper = ({ children }) => {
    return <Suspense fallback={<SpinLoader />}>{children}</Suspense>;
};
