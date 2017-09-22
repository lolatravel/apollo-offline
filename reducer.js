"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = function (state, action) {
    if (state === void 0) { state = false; }
    if (action.type === constants_1.REHYDRATE_STORE)
        return true;
    return state;
};
//# sourceMappingURL=reducer.js.map