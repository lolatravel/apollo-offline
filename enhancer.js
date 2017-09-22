"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_offline_1 = require("redux-offline");
var constants_1 = require("./constants");
var reducer_1 = require("./reducer");
exports.default = function (networkInterface, rehydratedKey) {
    if (rehydratedKey === void 0) { rehydratedKey = 'rehydrated'; }
    return function (config) { return function (createStore) { return function (reducer, preloadedState, enhancer) {
        if (enhancer === void 0) { enhancer = function (x) { return x; }; }
        var persistCallback = config.persistCallback, persistOptions = config.persistOptions;
        var blacklist = persistOptions && persistOptions.blacklist ?
            persistOptions.blacklist
            : [];
        blacklist.push(rehydratedKey);
        var store = createStore(function (state, action) {
            if (state === void 0) { state = {}; }
            var _a = rehydratedKey, rehydrated = state[_a], rest = __rest(state, [typeof _a === "symbol" ? _a : _a + ""]);
            return __assign({}, reducer(rest, action), (_b = {}, _b[rehydratedKey] = reducer_1.default(rehydrated, action), _b));
            var _b;
        }, preloadedState, redux_1.compose(enhancer, redux_offline_1.offline(__assign({}, config, { effect: function (effect, action) {
                if (action.type === constants_1.APOLLO_OFFLINE_QUEUE) {
                    return networkInterface.networkInterface.query(effect.request)
                        .then(function (data) {
                        var callback = effect.callback;
                        if (typeof callback === 'function')
                            callback(data);
                        return data;
                    });
                }
                return config && config.effect ?
                    config.effect(effect, action)
                    : Promise.reject('Unhandled offline effect');
            }, persistCallback: function () {
                if (persistCallback)
                    persistCallback();
                store.dispatch({ type: constants_1.REHYDRATE_STORE });
            }, persistOptions: __assign({}, persistOptions, { blacklist: blacklist }) }))));
        networkInterface.store = store;
        return store;
    }; }; };
};
//# sourceMappingURL=enhancer.js.map