"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flatten_1 = __importDefault(require("lodash/flatten"));
function plural(count, ...words) {
    let cases = [2, 0, 1, 1, 1, 2], titles = (0, flatten_1.default)(words);
    return titles[count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]];
}
exports.default = plural;
//# sourceMappingURL=plural.js.map