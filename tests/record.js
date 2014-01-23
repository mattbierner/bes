var record = require('../index').record;

exports.basic = function(test) {
    var r = record.declare(null, ['a', 'b', 'c']);
    
    var x = r.create(1, 2, 3);
    var y = r.create("g", [43], null);
    
    test.ok(x instanceof r);
    test.ok(y instanceof r);
    
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);

    test.deepEqual(y.a, 'g');
    test.deepEqual(y.b, [43]);
    test.deepEqual(y.c, null);
    
    test.done();
};

exports.newCreation = function(test) {
    var r = record.declare(null, ['a', 'b', 'c']);
    
    var x = new r(1, 2, 3);
    var y = new r("g", [43], null);
    
    test.ok(x instanceof r);
    test.ok(y instanceof r);
    test.deepEqual(Object.keys(x), ['a', 'b', 'c']);

    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);

    test.deepEqual(y.a, 'g');
    test.deepEqual(y.b, [43]);
    test.deepEqual(y.c, null);
    
    test.done();
};

exports.set = function(test) {
    var r = record.declare(null, ['a', 'b', 'c']);
    
    var x = r.create(1, 2, 3);
    var y = x.setA(100).setC(4);
    
    
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.c, 4);
    
    test.done();
};

exports.setUsingCtor = function(test) {
    var r = record.declare(null, ['a', 'b', 'c']);
    
    var x = r.create(1, 2, 3);
    var y = r.setA(r.setC(x, 4), 100);
    
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.c, 4);
    
    test.done();
};

exports.customCtor = function(test) {
    var r = record.declare(null, ['a', 'b', 'c'], function(a, b, c) {
        this.a = a * 1;
        this.b = b * 2;
        this.c = c * 3;
        this.d = this.a + this.b + this.c;
    });
    
    var x = r.create(1, 2, 3);
    var y = r.setA(r.setC(x, 4), 100);
    
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 4);
    test.deepEqual(x.c, 9);
    test.deepEqual(x.d, 14);

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 4);
    test.deepEqual(y.c, 4);
    test.deepEqual(y.d, 14);
    
    test.done();
};

exports.inherit = function(test) {
    var base = function() { };
    base.prototype.bla = "bla";
    base.prototype.a = "343";

    var r = record.declare(new base, ['a', 'b', 'c']);
    
    var x = r.create(1, 2, 3);
    var y = x.setA(100).setC(4);
    
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);
    test.deepEqual(x.bla, "bla");

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.c, 4);
    test.deepEqual(y.bla, "bla");
    
    test.done();
};

exports.protoNotModified = function(test) {
    var proto = {'a': 10, 'bla': 7};
    var r = record.declare(proto, ['a', 'b', 'c']);
    
    var x = r.create(1, 2, 3);
    var y = x.setA(100).setC(4);

    test.deepEqual(proto.a, 10);
    test.deepEqual(proto.bla, 7);
    test.deepEqual(Object.keys(proto), ['a', 'bla']);

    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.c, 3);
    test.deepEqual(x.bla, 7);

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.c, 4);
    test.deepEqual(y.bla, 7);
    
    test.done();
};
   
exports.extend = function(test) {
    var r = record.declare(null, ['a', 'b']);
    var r2 = record.extend(r, ['x', 'y']);

    var x = r2.create(1, 2, 3, 4);
    var y = x.setA(100).setY(55);
    
    test.ok(x instanceof r);
    test.ok(x instanceof r2);
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.x, 3);
    test.deepEqual(x.y, 4);

    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.x, 3);
    test.deepEqual(y.y, 55);
    
    test.done();
};

exports.extendWithCustomCtor = function(test) {
    var r = record.declare(null, ['a', 'b']);
    var r2 = record.extend(r, ['x', 'y'], function(a,b, x, y) {
        this.a = a * 2;
        this.b = b * 3;
        this.x = x * 4;
        this.y = y * 5;
    });

    var x = r2.create(1, 2, 3, 4);
    test.deepEqual(x.a, 2);
    test.deepEqual(x.b, 6);
    test.deepEqual(x.x, 12);
    test.deepEqual(x.y, 20);
    
    test.done();
};

exports.extendOnCustomCtor = function(test) {
    var r = record.declare(null, ['a', 'b'], function(a, b) {
        this.a = a * 2;
        this.b = b * 3;
    });
    var r2 = record.extend(r, ['x', 'y']);

    var x = r2.create(1, 2, 3, 4);
    var y = x.setA(100).setY(55);
    
    test.ok(x instanceof r);
    test.ok(x instanceof r2);
    test.deepEqual(x.a, 1);
    test.deepEqual(x.b, 2);
    test.deepEqual(x.x, 3);
    test.deepEqual(x.y, 4);

    test.ok(y instanceof r);
    test.ok(y instanceof r2);
    test.deepEqual(y.a, 100);
    test.deepEqual(y.b, 2);
    test.deepEqual(y.x, 3);
    test.deepEqual(y.y, 55);
    
    test.done();
};

exports.extendOnCustomCtorWithNewCtor = function(test) {
    var r = record.declare(null, ['a', 'b'],  function(a, b) {
        this.a = a * 2;
        this.b = b * 3;
    });
    var r2 = record.extend(r, ['x', 'y'], function(a, b, x, y) {
        r.call(this, a, b);
        this.x = x * 4;
        this.y = y * 5;
    });

    var x = r2.create(1, 2, 3, 4);
    test.ok(x instanceof r);
    test.ok(x instanceof r2);
    test.deepEqual(x.a, 2);
    test.deepEqual(x.b, 6);
    test.deepEqual(x.x, 12);
    test.deepEqual(x.y, 20);
    
    test.done();
};

exports.extendNothing = function(test) {
    var r = record.declare(null, ['a', 'b'], function(a, b) {
        this.a = a * 2;
        this.b = b * 3;
    });
    
    var r2 = record.extend(r);

    var x = r2.create(1, 2);
    
    test.ok(x instanceof r);
    test.ok(x instanceof r2);
    test.deepEqual(x.a, 2);
    test.deepEqual(x.b, 6);
    
    test.done();
};

exports.extendNothingReplaceCtor = function(test) {
    var r = record.declare(null, ['a', 'b'],  function(a, b) {
        this.a = a * 2;
        this.b = b * 3;
    });
    var r2 = record.extend(r, [], function(a, b) {
        this.a = a * 5;
        this.b = b * 6;
    });

    var x = r2.create(1, 2);
    test.equal(x.a, 5);
    test.equal(x.b, 12);
    
    test.done();
};
