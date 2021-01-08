import React, { ReactElement, useEffect, useState } from "react";
import classnames from "classnames";

import { useIsMounted } from "../api/use-is-mounted";

import styles from "../assets/styles/suspense-fallback.less";

export const SuspenseFallback = () => {
    const isMounted = useIsMounted();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        let id;
        if (isMounted) {
            id = window.setTimeout(() => setVisible(true), 150);
        }
        return () => window.clearTimeout(id);
    }, [isMounted]);
    return (
        <div
            className={classnames(styles.loader, visible && styles.loaderVisible)}
        />
    );
};
