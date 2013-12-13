/*
 * THIS FILE IS AUTO GENERATED from 'lib/record.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "amulet/object"], (function(require, exports, __o) {
    "use strict";
    var declare, extend;
    var __o = __o,
        setProperty = __o["setProperty"];
    var concat = Function.prototype.call.bind(Array.prototype.concat);
    var map = Function.prototype.call.bind(Array.prototype.map);
    var propertyCase = (function(name) {
        return name.match(/\w\S*/g)
            .map((function(str) {
                var first = str[0];
                return (first.toUpperCase() + str.slice(1));
            }))
            .join("");
    });
    var wrapConstructor = (function(ctor) {
        return (function() {
            var args = arguments;
            return ctor.apply(this, args);
        });
    });
    (declare = (function() {
            {
                var defaultConstructor = (function(keys) {
                    var keys = keys,
                        length = keys["length"];
                    return (function() {
                        var args = arguments;
                        for (var i = 0;
                            (i < length);
                            (i = (i + 1)))(this[keys[i]] = args[i]);
                    });
                }),
                    makeSetter = (function(key) {
                        return (function(x) {
                            return setProperty(this, key, x);
                        });
                    }),
                    makeCtorSetter = (function(key) {
                        return Function.prototype.call.bind(makeSetter(key));
                    });
                return (function(proto, keys, ctor) {
                    var construct = (ctor || defaultConstructor(keys));
                    (construct.__keys = keys);
                    (construct.prototype = Object.create((proto || new(Object)())));
                    (construct.prototype.constructor = construct);
                    keys.forEach((function(key) {
                        var setterName = ("set" + propertyCase(key));
                        (construct[setterName] = makeCtorSetter(key));
                        (construct.prototype[setterName] = makeSetter(key));
                    }));
                    var Fwd = (function(args) {
                        return construct.apply(this, args);
                    });
                    (Fwd.prototype = new(construct)());
                    (construct.create = (function() {
                        var args = arguments;
                        return new(Fwd)(args);
                    }));
                    return construct;
                });
            }
        })
        .call(this));
    (extend = (function(base, keys, ctor) {
        return ((keys && keys.length) ? declare(new(base)(), concat(base.__keys, keys), ctor) : declare(
            new(base)(), base.__keys, (ctor || wrapConstructor(base))));
    }));
    (exports.declare = declare);
    (exports.extend = extend);
}))