import { formatDate, calculateSum } from './utils/helpers';

const main = () => {
    const date = new Date();
    console.log(`Current date: ${formatDate(date, 'YYYY-MM-DD')}`);

    const sum = calculateSum(5, 10, []);
    console.log(`Sum of 5 and 10: ${sum}`);
};

main();