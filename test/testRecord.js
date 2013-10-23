define(['amulet/record'],
function(record){
    "use strict";
    
    return {
        'module': "Record",
        'tests': [
            ["Basic Record",
            function(){
                var r = record.declare(null, ['a', 'b', 'c']);
                
                var x = r.create(1, 2, 3);
                var y = r.create("g", [43], null);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);

                assert.deepEqual(y.a, 'g');
                assert.deepEqual(y.b, [43]);
                assert.deepEqual(y.c, null);
            }],
            ["new Record",
            function(){
                var r = record.declare(null, ['a', 'b', 'c']);
                
                var x = new r(1, 2, 3);
                var y = new r("g", [43], null);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);

                assert.deepEqual(y.a, 'g');
                assert.deepEqual(y.b, [43]);
                assert.deepEqual(y.c, null);
            }],
            ["Record set",
            function(){
                var r = record.declare(null, ['a', 'b', 'c']);
                
                var x = r.create(1, 2, 3);
                var y = x.setA(100).setC(4);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 2);
                assert.deepEqual(y.c, 4);
            }],
            ["Record set using ctor",
            function(){
                var r = record.declare(null, ['a', 'b', 'c']);
                
                var x = r.create(1, 2, 3);
                var y = r.setA(r.setC(x, 4), 100);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 2);
                assert.deepEqual(y.c, 4);
            }],
            ["Record inherit",
            function(){
                var base = function() { };
                base.prototype.bla = "bla";
                base.prototype.a = "343";

                var r = record.declare(new base, ['a', 'b', 'c']);
                
                var x = r.create(1, 2, 3);
                var y = x.setA(100).setC(4);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);
                assert.deepEqual(x.bla, "bla");

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 2);
                assert.deepEqual(y.c, 4);
                assert.deepEqual(y.bla, "bla");
            }],
        ],
    };
});
