export function toFormattedDateString(s) {
    return (s.getMonth() + 1).toString().padStart(2, '0') + '.' + 
            s.getDate().toString() + '.' + 
            s.getFullYear().toString();
}