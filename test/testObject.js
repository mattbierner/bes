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
                
                assert.deepEqual(object.defineProperty(a, 'x', {'value': 7, 'enumerable': true}), {'x': 7});
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
