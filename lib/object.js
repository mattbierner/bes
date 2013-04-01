/**
 * 
 */
define(function(){
"use strict";

/* 
 ******************************************************************************/
/**
 * 
 */
var copy = function(obj) {
    return Object.keys(obj).reduce(function(p, c) {
        p[c] = obj[c];
        return p;
    }, obj.constructor());
};

/*
 ******************************************************************************/
/**
 * Create a new copy of 'obj' with a property 'prop' with descriptor 'descriptor'.
 */
var defineProperty = function(obj, prop, descriptor) {
    var d = Object.getOwnPropertyDescriptor(obj, prop);
    if (d && !d.configurable) {
        throw new TypeError();
    }
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
 * Create a new copy of 'obj' with property 'prop' deleted.
 */
var deleteProperty = function(obj, prop) {
    return defineProperty(obj, prop, {
        'value': undefined,
        'enumerable': false,
        'configurable': true,
        'writable': true
    });
};

/**
 * Create a shallow copy of 'obj' that cannot be extended.
 * 
 * @return Inextensible copy of 'obj'.
 */
var preventExtensions = function(obj) {
    return Object.preventExtensions(copy(obj));
};

/**
 * Create a shallow copy of 'obj' that is frozen.
 * 
 * @return Frozen copy of 'obj'.
 */
var freeze = function(obj) {
    return Object.freeze(copy(obj));
};

/**
 * Create a shallow copy of 'obj' that is sealed.
 * 
 * @return sealed copy of 'obj'.
 */
var seal = function(obj) {
    return Object.seal(copy(obj));
};


/* Export
 ******************************************************************************/
return {
    'defineProperty': defineProperty,
    'defineProperties': defineProperties,
    'deleteProperty': deleteProperty,
    
    'preventExtensions': preventExtensions,
    'freeze': freeze,
    'seal': seal
};

});