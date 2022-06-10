"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("lodash/keys"));
const values_1 = __importDefault(require("lodash/values"));
function expression(code = '', locals = {}) {
    const args = (0, keys_1.default)(locals), vals = (0, values_1.default)(locals);
    try {
        return new Function(...args, `return ${code};`)(...vals);
    }
    catch (err) {
        return err;
    }
}
exports.default = expression;
//# sourceMappingURL=expression.js.map