import * as React from 'react';
interface Props {
    renderView: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
        handleClick?: () => void;
    }>;
    renderText: React.FC<{
        style?: React.CSSProperties;
        children: React.ReactNode;
    }>;
    startDay?: number;
    disabledDays?: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>;
}
export declare const MonthCalendar: React.MemoExoticComponent<({ renderView, startDay, renderText }: Props) => React.JSX.Element>;
export {};
