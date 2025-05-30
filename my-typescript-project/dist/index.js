"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./utils/helpers");
const main = () => {
    const date = new Date();
    console.log(`Current date: ${(0, helpers_1.formatDate)(date, 'YYYY-MM-DD')}`);
    const sum = (0, helpers_1.calculateSum)(5, 10, []);
    console.log(`Sum of 5 and 10: ${sum}`);
};
main();
