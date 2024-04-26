export function dateFormat(timestamp: Date) {
    const date = new Date(timestamp);
    const formatDate = Intl.DateTimeFormat('pl-PL', {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'Europe/Warsaw'
    }).format(date)
    return (formatDate)
}