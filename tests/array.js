var array = require('../index').array;

exports.singlePush = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.push(a, 4), [1, 2, 3, 4]);
    test.deepEqual(a, [1, 2, 3]);
    
    test.done();
};

exports.multiplePush = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.push(a, 4, 5), [1, 2, 3, 4, 5]);
    test.deepEqual(a, [1, 2, 3]);
    
    test.deepEqual(array.push(a), [1, 2, 3]);
    test.deepEqual(a, [1, 2, 3]);
    test.done();
};


exports.pop = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.pop(a), [1, 2]);
    test.deepEqual(a, [1, 2, 3]);
    test.done();
};

exports.emptyPop = function(test) {
    var a = [];
    
    test.deepEqual(array.pop(a), []);
    test.deepEqual(a, []);
    test.done();
};

exports.unshift = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.unshift(a, 4), [4, 1, 2, 3]);
    test.deepEqual(a, [1, 2, 3]);
    test.done();
};

exports.multiUnshift = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.unshift(a, 4, 5), [4, 5, 1, 2, 3]);
    test.deepEqual(a, [1, 2, 3]);
    
    test.deepEqual(array.unshift(a), [1, 2, 3]);
    test.deepEqual(a, [1, 2, 3]);
    test.done();
};

exports.shift = function(test) {
    var a = [1, 2, 3];
    
    test.deepEqual(array.shift(a), [2, 3]);
    test.deepEqual(a, [1, 2, 3]);
    test.done();
};
exports.emptyShift = function(test) {
    var a = [];
    
    test.deepEqual(array.shift(a), []);
    test.deepEqual(a, []);
    test.done();
};

 
exports.splice = function(test) {
    var a = [1, 2, 3, 4];
    
    test.deepEqual(array.splice(a, 1, 1, 5, 6), [1, 5, 6, 3, 4]);
    test.deepEqual(a, [1, 2, 3, 4]);
    test.done();
};

exports.negativeSpliceIndex = function(test) {
    var a = [1, 2, 3, 4];
    
    test.deepEqual(array.splice(a, -1, 1, 5, 6), [1, 2, 3, 5, 6]);
    test.deepEqual(a, [1, 2, 3, 4]);
    test.done();
};

exports.zeroRemoveSplice = function(test) {
    var a = [1, 2, 3, 4];
    
    test.deepEqual(array.splice(a, 1, -1, 5, 6), [1, 5, 6, 2, 3, 4]);
    test.deepEqual(a, [1, 2, 3, 4]);
    test.done();
};

