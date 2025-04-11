import React from "react";

const StateContext = React.createContext<any>(null);


export function useProvidedState<T>(){
    const context = React.useContext<T>(StateContext);
    if (!context) {
        throw new Error('useProvidedState must be used within a StateProvider');
    }
    return context;
}


export function StateProvider<T extends any>({ children, ...rest }: { children: React.ReactNode } & T) {
    const [state, setState] = React.useState<T>(rest as any);

    React.useEffect(() => {
        setState(rest as any);
    }, [rest]);

    return <StateContext.Provider value={state}>
        {children}
    </StateContext.Provider>
}