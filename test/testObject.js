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
            ["Congigure non config Property",
            function(){
                var a = Object.freeze(Object.create(Object.prototype, {
                    'x': {
                        'value': 3,
                        'configurable': false,
                        'enumerable': true
                    }
                }));
                
                assert.throws(object.defineProperty.bind(undefined, a, 'x', {'value': 7, 'enumerable': true}));
                assert.deepEqual(a, {x: 3});
            }],
            
            ["Delete Property",
            function(){
                var a = Object.create(Object.prototype, {
                    'x': {
                        'value': 3,
                        'configurable': true,
                        'enumerable': true
                    },
                    'y': {'value': 4, 'enumerable': true}
                });
                
                assert.deepEqual(object.deleteProperty(a, 'x'), {y: 4});
                assert.deepEqual(a, {x: 3, y: 4});
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
