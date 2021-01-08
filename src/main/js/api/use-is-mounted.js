import { useEffect, useState } from "react";

/**
 * Simple hook that will return a boolean for if this component is mounted or not.
 * A very common use for this hook is to have a css transition after the very first render
 * of a component.
 */
export function useIsMounted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [setMounted]);
    return mounted;
}
