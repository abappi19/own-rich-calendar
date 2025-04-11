export function getDaysInMonth(date: Date) {
    const mDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return mDate.getDate();
}


const MONTH_LIST = [
    {
        month: 0,
        label: "January",
        sortLabel: "Jan",
        tinyLabel: "J",
    }, {
        month: 1,
        label: "February",
        sortLabel: "Feb",
        tinyLabel: "F",
    },
    {
        month: 2,
        label: "March",
        sortLabel: "Mar",
        tinyLabel: "M",
    },
    {
        month: 3,
        label: "April",
        sortLabel: "Apr",
        tinyLabel: "A",
    },
    {
        month: 4,
        label: "May",
        sortLabel: "May",
        tinyLabel: "M",
    },
    {
        month: 5,
        label: "June",
        sortLabel: "Jun",
        tinyLabel: "J",
    },
    {
        month: 6,
        label: "July",
        sortLabel: "Jul",
        tinyLabel: "J",
    },
    {
        month: 7,
        label: "August",
        sortLabel: "Aug",
        tinyLabel: "A",
    },
    {
        month: 8,
        label: "September",
        sortLabel: "Sep",
        tinyLabel: "S",
    },
    {
        month: 9,
        label: "October",
        sortLabel: "Oct",
        tinyLabel: "O",
    },
    {
        month: 10,
        label: "November",
        sortLabel: "Nov",
        tinyLabel: "N",
    },
    {
        month: 11,
        label: "December",
        sortLabel: "Dec",
        tinyLabel: "D",
    },
]

export function getMonthName(date: Date): { month: number, label: string, sortLabel: string, tinyLabel: string } {
    return MONTH_LIST[date.getMonth()];
}
