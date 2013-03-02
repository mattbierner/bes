define(['amulet/object'],
function(object){
    "use strict";
    
    return {
        'module': "Object Tests",
        'tests': [
            ["Define Basic Property",
            function(){
                var a = Object.freeze({x: 3, y: {z: 4}});
                
                assert.deepEqual(object.defineProperty(a, 'w', {'value': 3, 'enumerable': true}), {'x': 3, 'y': {z: 4}, 'w': 3});
                assert.deepEqual(a, {x: 3, y: {z: 4}});
            }],
            
            ["Freeze",
            function(){
                var a = {x: 3, y: {z: 4}};
                
                var r = object.freeze(a);
                assert.deepEqual(r, {x: 3, y: {z: 4}});
                assert.deepEqual(a, {x: 3, y: {z: 4}});
                assert.equal(Object.isFrozen(a), false);
                assert.equal(Object.isFrozen(r), true);
            }],
            
            ["Seal",
            function(){
                var a = {x: 3, y: {z: 4}};
                
                var r = object.seal(a);
                assert.deepEqual(r, {x: 3, y: {z: 4}});
                assert.deepEqual(a, {x: 3, y: {z: 4}});
                assert.equal(Object.isSealed(a), false);
                assert.equal(Object.isSealed(r), true);
            }],
            
            ["Prevent Extensions",
            function(){
                var a = {x: 3, y: {z: 4}};
                
                var r = object.preventExtensions(a);
                assert.deepEqual(r, {x: 3, y: {z: 4}});
                assert.deepEqual(a, {x: 3, y: {z: 4}});
                assert.equal(Object.isExtensible(a), true);
                assert.equal(Object.isExtensible(r), false);
            }],
        ],
    };
});
