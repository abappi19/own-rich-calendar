import * as React from 'react';
interface Props {
    renderView: React.FC<{
        style: React.CSSProperties;
        children: React.ReactNode;
    }>;
    renderText: React.FC<{
        style: React.CSSProperties;
        children: React.ReactNode;
    }>;
    startDay?: number;
}
export declare const MonthCalendar: React.MemoExoticComponent<({ renderView, startDay, renderText }: Props) => React.JSX.Element>;
export {};
