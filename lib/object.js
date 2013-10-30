/*
 * THIS FILE IS AUTO GENERATED from 'lib/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var setProperty, setProperties, deleteProperty;
    var copy = (function(obj) {
        var out = new(Object.getPrototypeOf(obj).constructor)();
        Object.getOwnPropertyNames(obj).forEach((function(i) {
            (out[i] = obj[i]);
        }));
        return out;
    });
    (setProperty = (function(obj, prop, value, enumerable) {
        return Object.defineProperty(copy(obj), prop, ({
            "value": value,
            "enumerable": ((enumerable === undefined) ? Object.prototype.propertyIsEnumerable.call(obj, prop) : enumerable)
        }));
    }));
    (setProperties = (function(obj, properties) {
        return Object.keys(properties).reduce((function(p, c) {
            return setProperty(p, c, properties[c].value, properties[c].enumerable);
        }), obj);
    }));
    (deleteProperty = (function(obj, name) {
        var out = new(Object.getPrototypeOf(obj).constructor)();
        Object.getOwnPropertyNames(obj).forEach((function(i) {
            if ((i !== name))(out[i] = obj[i]);

        }));
        return out;
    }));
    (exports.setProperty = setProperty);
    (exports.setProperties = setProperties);
    (exports.deleteProperty = deleteProperty);
}))