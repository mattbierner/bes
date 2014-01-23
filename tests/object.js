var object = require('../index').object;


exports.setBasicProperty = function(test) {
    var a = Object.freeze({x: 3, y: {z: 4}});
    
    test.deepEqual(object.setProperty(a, 'w', 3, true), {'x': 3, 'y': {z: 4}, 'w': 3});
    test.deepEqual(a, {x: 3, y: {z: 4}});
    test.done();
};

exports.setKeepsEnumerability = function(test) {
    var a = Object.create(null, {
        x: {'value': 3, 'enumerable': true},
        y: {'value': {z: 4}, 'enumerable': false}});
    
    var r = object.setProperty(a, 'w', 5, true);
    test.deepEqual(r.x, 3);
    test.deepEqual(r.y, {'z': 4});
    test.deepEqual(r.w, 5);

    test.equal(Object.getOwnPropertyDescriptor(r, 'x').enumerable, true);
    test.equal(Object.getOwnPropertyDescriptor(r, 'y').enumerable, false);
    test.equal(Object.getOwnPropertyDescriptor(r, 'w').enumerable, true);

    test.deepEqual(a.x, 3);
    test.deepEqual(a.y, {'z': 4});
    test.deepEqual(a.w, undefined);
test.done();
};

exports.configNonConfigProperty = function(test) {
    var a = Object.freeze(Object.create(Object.prototype, {
        'x': {
            'value': 3,
            'writable': false,
            'configurable': false,
            'enumerable': true
        }
    }));
    
    test.deepEqual(object.setProperty(a, 'x', 7, true), {'x': 7});
    test.deepEqual(a, {x: 3});
    test.done();
};

exports.deleteProperty = function(test) {
    var a = Object.create(Object.prototype, {
        'x': {
            'value': 3,
            'configurable': true,
            'enumerable': true
        },
        'y': {'value': 4, 'enumerable': true}
    });
    
    test.deepEqual(object.deleteProperty(a, 'x'), {y: 4});
    test.deepEqual(a, {x: 3, y: 4});
    test.done();
};
