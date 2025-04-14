import React from "react";
import EfStyleSheet from "../../utils/style-helper";
import { Days } from "../enum-lists/calendar.enum-list";
import { Day } from "../enums/calendar.enum";

export type CalendarWeeksTitleContainerProps = {
    View: React.FC<{ style?: React.CSSProperties, children: React.ReactNode, handleClick?: () => void }>,
    Text: React.FC<{ style?: React.CSSProperties, children: React.ReactNode }>,
    startDayIndex: number,
    date: Date,
    renderWeekDayTitle?: React.FC<{
        style: React.CSSProperties, day: {
            label: string;
            sortLabel: string;
            tinyLabel: string;
            index: Day;
        };
        isDisabled: boolean;
    }>
}

export const CalendarWeeksTitleContainer = React.memo(({ View, Text, startDayIndex, renderWeekDayTitle }: CalendarWeeksTitleContainerProps) => {
    const WeekDayComponent = React.useMemo(() => renderWeekDayTitle, [renderWeekDayTitle]);
    return <View style={styles.calendarContainer}>
        {
            Array.from({ length: 7 }).map((_, index) => {
                const dayIndex = (startDayIndex + index) % 7;
                return !!WeekDayComponent
                    ? <WeekDayComponent
                        style={styles.item}
                        day={Days[dayIndex]}
                        isDisabled={false}
                    />
                    : <View style={styles.item} key={index + 'day'}>
                        <Text style={{ fontWeight: 'bold' }}>{Days[dayIndex].sortLabel}</Text>
                    </View>
            })
        }
    </View>
})



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
