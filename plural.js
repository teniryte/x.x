"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function plural(count, ...words) {
    let cases = [2, 0, 1, 1, 1, 2], titles = (0, lodash_1.flatten)(words);
    return titles[count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]];
}
exports.default = plural;
//# sourceMappingURL=plural.js.map