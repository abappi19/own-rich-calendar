import React from "react";

const StateContext = React.createContext<any>(null);


export function useProvidedState<T>() {
    const context = React.useContext<T>(StateContext);
    if (!context) {
        throw new Error('useProvidedState must be used within a StateProvider');
    }
    return context;
}


export function StateProvider<T extends object>({ children, ...rest }: { children: React.ReactNode } & T) {

    return <StateContext.Provider value={rest}>
        {children}
    </StateContext.Provider>
}