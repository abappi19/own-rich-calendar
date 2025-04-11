import * as React from 'react';
import { StateProvider, useProvidedState } from "./state-provider";


export type MonthCalendarStateContextType = {
    View: React.FC<{ style?: React.CSSProperties, children: React.ReactNode, handleClick?: () => void }>,
    Text: React.FC<{ style?: React.CSSProperties, children: React.ReactNode }>,
    startDay?: number,
    disabledDays?: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>,
    date: Date,
    setDate: (date: Date) => void,
    startDayIndex: number,
    daysInMonth: number,
    startOffset: number,
    endOffset: number
}

export const useMonthCalendarState = () => useProvidedState<MonthCalendarStateContextType>();

export const MonthCalendarStateProvider = (props: { children: React.ReactNode } & MonthCalendarStateContextType) => {
    return <StateProvider {...props} />
}
