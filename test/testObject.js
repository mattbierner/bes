define(['amulet/object'],
function(object){
    "use strict";
    
    return {
        'module': "Object Tests",
        'tests': [
            ["Set Basic Property",
            function(){
                var a = Object.freeze({x: 3, y: {z: 4}});
                
                assert.deepEqual(object.setProperty(a, 'w', 3, true), {'x': 3, 'y': {z: 4}, 'w': 3});
                assert.deepEqual(a, {x: 3, y: {z: 4}});
            }],
            ["Set keeps enumerability",
            function(){
                var a = Object.create(null, {
                    x: {'value': 3, 'enumerable': true},
                    y: {'value': {z: 4}, 'enumerable': false}});
                
                var r = object.setProperty(a, 'w', 5, true);
                assert.deepEqual(r.x, 3);
                assert.deepEqual(r.y, {'z': 4});
                assert.deepEqual(r.w, 5);

                assert.equal(Object.getOwnPropertyDescriptor(r, 'x').enumerable, true);
                assert.equal(Object.getOwnPropertyDescriptor(r, 'y').enumerable, false);
                assert.equal(Object.getOwnPropertyDescriptor(r, 'w').enumerable, true);

                assert.deepEqual(a.x, 3);
                assert.deepEqual(a.y, {'z': 4});
                assert.deepEqual(a.w, undefined);

            }],
            
            ["Config non config Property",
            function(){
                var a = Object.freeze(Object.create(Object.prototype, {
                    'x': {
                        'value': 3,
                        'writable': false,
                        'configurable': false,
                        'enumerable': true
                    }
                }));
                
                assert.deepEqual(object.setProperty(a, 'x', 7, true), {'x': 7});
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
        ],
    };
});
