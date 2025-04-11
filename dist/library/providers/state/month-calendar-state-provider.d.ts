import * as React from 'react';
export declare type MonthCalendarStateContextType = {
    View: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
        handleClick?: () => void;
    }>;
    Text: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
    }>;
    startDay?: number;
    disabledDays?: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>;
    date: Date;
    setDate: (date: Date) => void;
    startDayIndex: number;
    daysInMonth: number;
    startOffset: number;
    endOffset: number;
};
export declare const useMonthCalendarState: () => MonthCalendarStateContextType;
export declare const MonthCalendarStateProvider: (props: {
    children: React.ReactNode;
} & MonthCalendarStateContextType) => React.JSX.Element;
