"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSum = exports.formatDate = void 0;
function formatDate(date, format) {
    const options = {};
    if (format.includes('YYYY'))
        options.year = 'numeric';
    if (format.includes('MM'))
        options.month = '2-digit';
    if (format.includes('DD'))
        options.day = '2-digit';
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
exports.formatDate = formatDate;
function calculateSum(p0, p1, numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
exports.calculateSum = calculateSum;
