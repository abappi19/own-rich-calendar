import * as React from 'react'
import EfStyleSheet from '../utils/style-helper'
import { CalendarWeeksTitleContainer } from '../library/component/calendar-weeks-title-component';
import { CalendarMonthView } from '../library/component/calendar-month-view-component';
import { MonthCalendarStateProvider } from '../library/providers/state/month-calendar-state-provider';
import { getDaysInMonth, getMonthName } from '../utils/date-helper';
interface Props {
    renderView: React.FC<{ style?: React.CSSProperties, children: React.ReactNode, handleClick?: () => void }>,
    renderText: React.FC<{ style?: React.CSSProperties, children: React.ReactNode }>,
    startDay?: number,
    disabledDays?: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>
}

export const MonthCalendar = React.memo(({ renderView, startDay = 1, renderText }: Props) => {
    const [date, setDate] = React.useState(new Date());

    console.log(new Date().getDate() , " date")

    const startDayIndex = React.useMemo(() => startDay % 7, [startDay]);

    const { daysInMonth, startOffset, endOffset } = React.useMemo(() => {
        const daysInMonth = getDaysInMonth(date);

        const startOffset = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay() - startDayIndex;
        const endOffset = 7 - ((daysInMonth + startOffset) % 7);

        return { daysInMonth, startOffset, endOffset };

    }, [date]);

    const View = React.useMemo(() => renderView, [renderView]);
    const Text = React.useMemo(() => renderText, [renderText]);


    return (<MonthCalendarStateProvider
        View={View}
        Text={Text}
        startDay={startDay}
        date={date}
        setDate={setDate}
        startDayIndex={startDayIndex}
        daysInMonth={daysInMonth}
        startOffset={startOffset}
        endOffset={endOffset}
    >

        <View style={styles.container}>
            <View>
                <View>{getMonthName(date).label}, {date.getFullYear()}</View>
            </View>
            <CalendarWeeksTitleContainer View={View} Text={Text} startDayIndex={startDayIndex} date={date} />
            <CalendarMonthView  />
        </View >
    </MonthCalendarStateProvider >
    )
}, (prevProps, nextProps) => {
    let arePropsEqual = true;

    arePropsEqual = (prevProps.renderView === nextProps.renderView)
        && (prevProps.renderText === nextProps.renderText)
        && (prevProps.startDay === nextProps.startDay);

    return arePropsEqual;
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
    },
    item: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
