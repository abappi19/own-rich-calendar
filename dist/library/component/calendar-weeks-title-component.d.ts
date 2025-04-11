import React from "react";
export declare type CalendarWeeksTitleContainerProps = {
    View: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
        handleClick?: () => void;
    }>;
    Text: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
    }>;
    startDayIndex: number;
    date: Date;
};
export declare const CalendarWeeksTitleContainer: React.MemoExoticComponent<({ View, Text, startDayIndex }: CalendarWeeksTitleContainerProps) => React.JSX.Element>;
