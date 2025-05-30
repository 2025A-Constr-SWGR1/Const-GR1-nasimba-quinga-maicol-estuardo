export function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = {};
    
    if (format.includes('YYYY')) options.year = 'numeric';
    if (format.includes('MM')) options.month = '2-digit';
    if (format.includes('DD')) options.day = '2-digit';

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function calculateSum(p0: number, p1: number, numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}