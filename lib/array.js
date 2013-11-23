/*
 * THIS FILE IS AUTO GENERATED from 'lib/array.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var copy, push, pop, shift, unshift, splice, reverse;
    var concat = Function.prototype.call.bind(Array.prototype.concat);
    var slice = Function.prototype.call.bind(Array.prototype.slice);
    var reduce = Function.prototype.call.bind(Array.prototype.reduce);
    (copy = (function(arr) {
        var arr = arr,
            length = arr["length"];
        var out = [];
        for (var i = 0;
            (i < length);
            (i = (i + 1)))(out[i] = arr[i]);
        return out;
    }));
    (push = (function(arr) {
        var args = arguments;
        return concat(arr, slice(args, 1));
    }));
    (pop = (function(arr) {
        var arr = arr,
            length = arr["length"];
        return slice(arr, 0, (length - 1));
    }));
    (unshift = (function(arr) {
        var args = arguments;
        return concat(slice(args, 1), arr);
    }));
    (shift = (function(arr) {
        return slice(arr, 1);
    }));
    (splice = (function(arr, index, howMany) {
        var arr = arr,
            length = arr["length"],
            args = arguments;
        return (function() {
            {
                var i = ((index < 0) ? (length + index) : index);
                return slice(arr, 0, i)
                    .concat(slice(args, 3), slice(arr, (i + Math.max(howMany, 0))));
            }
        })();
    }));
    (reverse = (function(arr) {
        var arr = arr,
            length = arr["length"];
        return ((length > 0) ? reduce(slice(arr, 1), unshift, [arr[0]]) : arr);
    }));
    (exports.copy = copy);
    (exports.push = push);
    (exports.pop = pop);
    (exports.shift = shift);
    (exports.unshift = unshift);
    (exports.splice = splice);
    (exports.reverse = reverse);
}))