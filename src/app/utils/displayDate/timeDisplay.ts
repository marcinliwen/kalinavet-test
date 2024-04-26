export function timeFormat(timestamp: string) {
    const newTime = timestamp.split(':').reduce((acc,time) => (60 * acc) + time);
    console.log()
    const time = new Date(timestamp);
    const formatDate = Intl.DateTimeFormat('pl-PL', {
        hour: "numeric",
        minute: "numeric",
    }).format(time)
    return (formatDate)
}