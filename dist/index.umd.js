(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.index = global.index || {}, global.index.umd = global.index.umd || {}, global.index.umd.js = {}), global._));
})(this, (function (exports, _) { 'use strict';

    const sum = (a, b) => {
        return _.concat(a, b);
    };

    exports.sum = sum;

}));
