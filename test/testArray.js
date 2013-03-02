define(['amulet/array'],
function(array){
    "use strict";
    
    return {
        'module': "Array Tests",
        'tests': [
            ["Basic Push",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.push(a, 4), [1, 2, 3, 4]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            ["Mutliple Push",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.push(a, 4, 5), [1, 2, 3, 4, 5]);
                assert.deepEqual(a, [1, 2, 3]);
                
                assert.deepEqual(array.push(a), [1, 2, 3]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            
            
            ["Basic Pop",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.pop(a), [1, 2]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            ["Empty Pop",
            function(){
                var a = [];
                
                assert.deepEqual(array.pop(a), []);
                assert.deepEqual(a, []);
            }],
            
            ["Basic Unshift",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.unshift(a, 4), [4, 1, 2, 3]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            ["Mutliple Unshift",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.unshift(a, 4, 5), [4, 5, 1, 2, 3]);
                assert.deepEqual(a, [1, 2, 3]);
                
                assert.deepEqual(array.unshift(a), [1, 2, 3]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            
            ["Basic Shift",
            function(){
                var a = [1, 2, 3];
                
                assert.deepEqual(array.shift(a), [2, 3]);
                assert.deepEqual(a, [1, 2, 3]);
            }],
            ["Empty shift",
            function(){
                var a = [];
                
                assert.deepEqual(array.shift(a), []);
                assert.deepEqual(a, []);
            }],
            
             
            ["Basic Splice",
            function(){
                var a = [1, 2, 3, 4];
                
                assert.deepEqual(array.splice(a, 1, 1, 5, 6), [1, 5, 6, 3, 4]);
                assert.deepEqual(a, [1, 2, 3, 4]);
            }],
            ["Negative Splice index",
            function(){
                var a = [1, 2, 3, 4];
                
                assert.deepEqual(array.splice(a, -1, 1, 5, 6), [1, 2, 3, 5, 6]);
                assert.deepEqual(a, [1, 2, 3, 4]);
            }],
            ["Zero remove Splice",
            function(){
                var a = [1, 2, 3, 4];
                
                assert.deepEqual(array.splice(a, 1, -1, 5, 6), [1, 5, 6, 2, 3, 4]);
                assert.deepEqual(a, [1, 2, 3, 4]);
            }],
            
        ],
    };
});
