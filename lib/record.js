/**
 * 
 */
define(['amulet/object'],
function(amulet_object){
"use strict";

var makeConstructor = function(keys) {
    var len = keys.length;
    return function(/*...*/) {
        for (var i = 0; i < len; ++i) 
            this[keys[i]] = arguments[i];
    };
};

var propertyCase = function(name) {
    return name
        .match(/\w\S*/g)
        .map(function(x) { return x[0].toUpperCase() + x.slice(1); })
        .join('');
};


var concatArgs = (function(){
    var map = function(x) { return x; };
    
    return function(arr, args) {
        return arr.concat([].map.call(args, map));
    };
}());


/*
 ******************************************************************************/
/**
 * Define a new record style object
 * 
 * Records are objects with a set of properties defined on them. Custom setters
 * functions are created on the object that return a new object with the given
 * property is changed. This does not modify the original. Properties may be read
 * using direct dot access.
 * 
 * An additional create method is defined on the constructor object to create
 * a record instance without using new.
 * 
 * @param proto Prototype of the record instances. May be null.
 * @param keys Ordered set of names for properties on the record.
 * @param [ctor] Optional custom constructor to use. Default constructor 
 *    binds every key in `keys` to the argument at that index.
 */
var declare = (function(){
    var makeSetter = function(key) {
        return function(x) {
            return amulet_object.defineProperty(this, key, {
                'value': x,
                'enumerable': Object.prototype.propertyIsEnumerable.call(this, key)
            });
        };
    };
    
    return function(proto, keys, ctor) {
        var construct = (ctor || makeConstructor(keys));
        construct.prototype = (proto || new Object);
        
        for (var i = 0, len = keys.length; i < len; ++i) {
            var key = keys[i];
            construct.prototype['set' + propertyCase(key)] = makeSetter(key);
        }
        
        construct.create = function(/*...*/) {
            return new (construct.bind.apply(construct, concatArgs([null], arguments)));
        };
        
        return construct;
    };
}());

/**
 * Define a new record style object
 * 
 * Records are objects with a set of properties defined on them. Custom setters
 * functions are created on the object that return a new object with the given
 * property is changed. This does not modify the original. Properties may be read
 * using direct dot access.
 * 
 * An additional create method is defined on the constructor object to create
 * a record instance without using new. 
 * 
 * @param proto Prototype of the record instances. May be null.
 * @param keys Ordered set of names for properties on the record.
 * @param [ctor] Optional custom constructor to use. Default constructor 
 *    binds every key in `keys` to the argument at that index.
 * 
 */
var declare = (function() {
    var makeSetter = function(key) {
        return function(x) {
            return amulet_object.defineProperty(this, key, {
                'value': x,
                'enumerable': Object.prototype.propertyIsEnumerable.call(this, key)
            });
        };
    };
    
    var makeCtorSetter = function(key) {
        return Function.prototype.call.bind(makeSetter(key));
    };
    
    return function(proto, keys, ctor) {
        var construct = (ctor || makeConstructor(keys));
        construct.prototype = (proto || new Object);
        construct.prototype.constructor = construct;
        
        for (var i = 0, len = keys.length; i < len; ++i) {
            var key = keys[i],
                setterName = 'set' + propertyCase(key);
            
            construct[setterName] = makeCtorSetter(key);
            construct.prototype[setterName] = makeSetter(key);
        }
        
        construct.create = function(/*...*/) {
            return new (construct.bind.apply(construct, concatArgs([null], arguments)));
        };
        
        return construct;
    };
}());

/* Export
 ******************************************************************************/
return {
    'declare': declare
};

});