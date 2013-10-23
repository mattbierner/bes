/**
 * 
 */
define(function(){
"use strict";

var hasOwnProperty = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

var copy = function(obj) {
    var out = new (Object.getPrototypeOf(obj).constructor)();
    for (var i in obj)
        if (hasOwnProperty(obj, i))
            out[i] = obj[i];
    return out;
};

/*
 ******************************************************************************/
/**
 * Create a new copy of 'obj' with a property 'prop' with descriptor 'descriptor'.
 */
var defineProperty = function(obj, prop, descriptor) {
    return Object.defineProperty(copy(obj), prop, descriptor);
};

/**
 * Create a new copy of 'obj' with properties 'properties'.
 */
var defineProperties = function(obj, properties) {
    return Object.keys(obj).reduce(function(p, c) {
        return defineProperty(p, c, properties[c]);
    }, obj);
};

/**
 * Create a new copy of 'obj' with property 'name' deleted.
 */
var deleteProperty = function(obj, name) {
    var out = new (Object.getPrototypeOf(obj).constructor)();
    for (var i in obj)
        if (i !== name && hasOwnProperty(obj, i))
            out[i] = obj[i];
    return out;
};

/* Export
 ******************************************************************************/
return {
    'defineProperty': defineProperty,
    'defineProperties': defineProperties,
    'deleteProperty': deleteProperty
};

});