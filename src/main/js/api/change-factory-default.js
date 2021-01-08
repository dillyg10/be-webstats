import { ComponentType } from "react";

/*
This was made because for some reason the React team wants to enforce default exports on the provided factory result.
See: https://github.com/reactjs/rfcs/pull/64#issuecomment-431507924
Original workaround from: https://github.com/reactjs/rfcs/pull/64#discussion_r226683684

This file primarily exists because we are enforcing a no default export rule in our projects. So working with libraries
that interface with default exports requires some hacking.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function changeFactoryDefault(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    factory,
    newDefaultProperty,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    if (newDefaultProperty) {
        return async () => {
            return { default: (await factory())[newDefaultProperty] };
        };
    }
    return factory;
}
