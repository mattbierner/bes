/*
 * THIS FILE IS AUTO GENERATED from 'lib/object.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var setProperty, setProperties, deleteProperty, copyProps = (function(obj) {
            var names = Object.getOwnPropertyNames(obj),
                length = names["length"],
                props = ({});
            for (var i = 0;
                (i < length);
                (i = (i + 1))) {
                var key = names[i];
                (props[key] = Object.getOwnPropertyDescriptor(obj, key));
            }
            return props;
        });
    (setProperty = (function(obj, prop, value, enumerable) {
        var props = copyProps(obj),
            current = props[prop];
        (props[prop] = ({
            "value": value,
            "enumerable": ((!current || (enumerable !== undefined)) ? enumerable : current.enumerable)
        }));
        return Object.create(Object.getPrototypeOf(obj), props);
    }));
    (setProperties = (function(obj, properties) {
        var props = copyProps(obj),
            keys = Object.keys(obj);
        for (var i = 0, len = keys.length;
            (i < len);
            (i = (i + 1))) {
            var key = keys[i],
                current = props[key],
                value = properties[key].value,
                enumerable = properties[key].enumerable;
            (props[key] = ({
                "value": value,
                "enumerable": ((!current || (enumerable !== undefined)) ? enumerable : current.enumerable)
            }));
        }
        return Object.create(Object.getPrototypeOf(obj), props);
    }));
    (deleteProperty = (function(obj, name) {
        var props = copyProps(obj);
        delete props[name];
        return Object.create(Object.getPrototypeOf(obj), props);
    }));
    (exports.setProperty = setProperty);
    (exports.setProperties = setProperties);
    (exports.deleteProperty = deleteProperty);
}));