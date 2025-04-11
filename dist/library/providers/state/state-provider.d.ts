import React from "react";
export declare function useProvidedState<T>(): T;
export declare function StateProvider<T extends object>({ children, ...rest }: {
    children: React.ReactNode;
} & T): React.JSX.Element;
