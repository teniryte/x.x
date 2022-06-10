"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProto = exports.getProto = void 0;
function proto(...objects) {
    if (objects.length === 1)
        return getProto(objects[0]);
    return setProto(...objects);
}
exports.default = proto;
function getProto(object) {
    return Object.getPrototypeOf(object);
}
exports.getProto = getProto;
function setProto(...chain) {
    chain.forEach((obj, i) => {
        const next = chain[i + 1] || null;
        if (!next)
            return;
        Object.setPrototypeOf(obj, next);
    });
    return chain[0];
}
exports.setProto = setProto;
//# sourceMappingURL=proto.js.map