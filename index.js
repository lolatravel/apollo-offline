"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enhancer_1 = require("./enhancer");
var transport_1 = require("./transport");
exports.default = function (networkInterface, rehydratedKey) {
    var offlineNetworkInterface = new transport_1.default(networkInterface);
    return {
        enhancer: enhancer_1.default(offlineNetworkInterface, rehydratedKey),
        networkInterface: offlineNetworkInterface,
    };
};
//# sourceMappingURL=index.js.map