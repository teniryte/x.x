"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unflatten = exports.flattenArray = exports.flatten = void 0;
const set_1 = __importDefault(require("lodash/set"));
const keys_1 = __importDefault(require("lodash/keys"));
exports.default = flatten;
function flatten(obj, skipArrays = true, parentName = null, maxLevel = Infinity) {
    const data = {};
    if (Array.isArray(obj))
        return flattenArray(obj);
    if (!obj || typeof obj !== 'object')
        return obj;
    parentName = parentName || '';
    Object.keys(obj).forEach(name => {
        const val = obj[name];
        name = parentName ? parentName + '.' + name : name;
        if (!val ||
            typeof val !== 'object' ||
            (skipArrays && Array.isArray(val)) ||
            name.split('.').length >= maxLevel) {
            data[name] = val;
            return;
        }
        Object.assign(data, flatten(val, skipArrays, name, maxLevel));
    });
    return data;
}
exports.flatten = flatten;
function flattenArray(arr) {
    let items = [];
    Array.from(arr, item => {
        if (!item || typeof item !== 'object') {
            return items.push(item);
        }
        if (item.length !== undefined) {
            item = Array.from(item);
        }
        items = items.concat(flattenArray(item));
    });
    return items;
}
exports.flattenArray = flattenArray;
function unflatten(obj) {
    if (Array.isArray(obj))
        return obj;
    const data = {};
    (0, keys_1.default)(obj).forEach(name => {
        (0, set_1.default)(data, name, obj[name]);
    });
    return data;
}
exports.unflatten = unflatten;
//# sourceMappingURL=flatten.js.map