"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.parse = void 0;
const flatten_1 = require("./flatten");
function query(arg, splitter = '&') {
    if (!arg)
        return '';
    if (typeof arg === 'string')
        return parse(arg, splitter);
    if (typeof arg === 'object')
        return stringify(arg, splitter);
    return '';
}
exports.default = query;
function parse(s, spl = '&') {
    const str = s.split('?').pop(), pairs = str.split(spl).map((s) => s.trim().split('=')), data = {};
    if (!s)
        return {};
    pairs.forEach((pair) => {
        const n = pair[0], name = n.endsWith('[]') ? n.slice(0, -2) : n;
        let val = pair[1];
        if (data[name] && !Array.isArray(data[name])) {
            data[name] = [data[name]];
        }
        if (Array.isArray(data[name]) && n.endsWith('[]')) {
            return data[name].push(JSON.parse(decodeURIComponent(val)));
        }
        val = decodeURIComponent(val);
        try {
            val = JSON.parse(val);
        }
        catch (err) { }
        data[name] = val;
    });
    return (0, flatten_1.unflatten)(data);
}
exports.parse = parse;
function stringify(d, spl = '&') {
    const data = (0, flatten_1.flatten)(d, true);
    return Object.keys(data)
        .sort()
        .map(key => {
        const val = data[key];
        if (Array.isArray(val)) {
            return val.map(v => `${key}[]=${encodeURIComponent(v)}`).join(spl);
        }
        return `${key}=${encodeURIComponent(val)}`;
    })
        .join(spl);
}
exports.stringify = stringify;
//# sourceMappingURL=query.js.map