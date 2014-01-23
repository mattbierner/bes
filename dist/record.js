/*
 * THIS FILE IS AUTO GENERATED from 'lib/record.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/object"], (function(require, exports, __o) {
    "use strict";
    var setProperty = __o["setProperty"],
        declare, extend, concat = Function.prototype.call.bind(Array.prototype.concat),
        map = Function.prototype.call.bind(Array.prototype.map),
        propertyCase = (function(name) {
            return name.match(/\w\S*/g)
                .map((function(str) {
                    var first = str[0];
                    return (first.toUpperCase() + str.slice(1));
                }))
                .join("");
        }),
        wrapConstructor = (function(ctor) {
            return (function() {
                var self = this,
                    args = arguments;
                return ctor.apply(self, args);
            });
        }),
        defaultConstructor = (function(keys) {
            var length = keys["length"];
            return (function() {
                var self = this,
                    args = arguments;
                for (var i = 0;
                    (i < length);
                    (i = (i + 1)))(self[keys[i]] = args[i]);
            });
        }),
        makeSetter = (function(key) {
            return (function(x) {
                var self = this;
                return setProperty(self, key, x);
            });
        }),
        makeCtorSetter = (function(key) {
            return Function.prototype.call.bind(makeSetter(key));
        });
    (declare = (function(proto, keys, ctor) {
        var construct = (ctor || defaultConstructor(keys));
        (construct.__keys = keys);
        (construct.prototype = Object.create((proto || new(Object)())));
        (construct.prototype.constructor = construct);
        keys.forEach((function(key) {
            var setterName = ("set" + propertyCase((key + "")));
            (construct[setterName] = makeCtorSetter(key));
            (construct.prototype[setterName] = makeSetter(key));
        }));
        var Fwd = (function(args) {
            var self = this;
            return construct.apply(self, args);
        });
        (Fwd.prototype = construct.prototype);
        (construct.create = (function() {
            var args = arguments;
            return new(Fwd)(args);
        }));
        return construct;
    }));
    (extend = (function(base, keys, ctor) {
        return ((keys && keys.length) ? declare(new(base)(), concat(base.__keys, keys), ctor) : declare(
            new(base)(), base.__keys, (ctor || wrapConstructor(base))));
    }));
    (exports.declare = declare);
    (exports.extend = extend);
}));