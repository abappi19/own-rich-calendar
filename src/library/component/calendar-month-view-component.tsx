import React from "react";
import EfStyleSheet from "../../utils/style-helper";
import { useMonthCalendarState } from "../providers/state/month-calendar-state-provider";


type CalendarDaysContainerProps = {
    View: React.FC<{ style?: React.CSSProperties, children: React.ReactNode, handleClick?: () => void }>,
    Text: React.FC<{ style?: React.CSSProperties, children: React.ReactNode }>,
    date: Date,
    startDayIndex: number;
    daysInMonth: number,
    startOffset: number,
    endOffset: number,
    disabledDays?: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>
}

const CalendarMonthViewComponent = React.memo(({ View, Text, date, startDayIndex, daysInMonth, endOffset, startOffset, disabledDays }: CalendarDaysContainerProps) => {

    return <>
        <Text>days: {daysInMonth} weeks: {Math.ceil(daysInMonth / 7)} startDayIndex: {startDayIndex} startoffset: {startOffset} endOffset: {endOffset}</Text>

        <View style={styles.calendarContainer}>
            {
                Array.from({ length: daysInMonth + startOffset + endOffset }).map((_, index) => {

                    const day = (index + 1) - startOffset;
                    const currentDate = new Date(date.getFullYear(), date.getMonth(), day);

                    const dimmed = day < 1 || day > daysInMonth || disabledDays?.includes(currentDate.getDay() as any);

                    return <View style={{ ...styles.item, ...(dimmed ? styles.itemDimmed : {}) }} key={index}>
                        <Text style={{ fontWeight: 'normal' }}>{currentDate.getDate()}</Text>
                    </View>
                })
            }
        </View>
    </>
});

export const CalendarMonthView = React.memo(() => {

    const { Text, View, date, daysInMonth, endOffset, startDayIndex, startOffset, disabledDays } = useMonthCalendarState();

    return <CalendarMonthViewComponent
        View={View}
        Text={Text}
        date={date}
        daysInMonth={daysInMonth}
        endOffset={endOffset}
        startDayIndex={startDayIndex}
        startOffset={startOffset}
        disabledDays={disabledDays}
    />
});





const styles = EfStyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    calendarContainer: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gap: 2
    },
    item: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    itemDimmed: {
        opacity: 0.3,
        pointerEvents: 'none'
    }
})
