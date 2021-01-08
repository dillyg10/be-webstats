import React, { ReactElement } from "react";

import styles from "../assets/styles/loader.less";

const LoaderWrapper= ({
                                                         children,
                                                     }) => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </div>
    );
};

export const SpinLoader = () => (
    <LoaderWrapper>
        <div className={styles.spinner}>
            <div className={styles.cube1} />
            <div className={styles.cube2} />
        </div>
    </LoaderWrapper>
);
