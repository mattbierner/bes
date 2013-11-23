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
            ["Record custom ctor",
            function(){
                var r = record.declare(null, ['a', 'b', 'c'], function(a, b, c) {
                    this.a = a * 1;
                    this.b = b * 2;
                    this.c = c * 3;
                    this.d = this.a + this.b + this.c;
                });
                
                var x = r.create(1, 2, 3);
                var y = r.setA(r.setC(x, 4), 100);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 4);
                assert.deepEqual(x.c, 9);
                assert.deepEqual(x.d, 14);

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 4);
                assert.deepEqual(y.c, 4);
                assert.deepEqual(y.d, 14);
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
            ["Record proto not modified ",
            function(){
                var proto = {'a': 10, 'bla': 7};
                var r = record.declare(proto, ['a', 'b', 'c']);
                
                var x = r.create(1, 2, 3);
                var y = x.setA(100).setC(4);

                assert.deepEqual(proto.a, 10);
                assert.deepEqual(proto.bla, 7);
                assert.deepEqual(Object.keys(proto), ['a', 'bla']);

                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.c, 3);
                assert.deepEqual(x.bla, 7);

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 2);
                assert.deepEqual(y.c, 4);
                assert.deepEqual(y.bla, 7);
            }],
           
            ["Record extend",
            function(){
                var r = record.declare(null, ['a', 'b']);
                var r2 = record.extend(r, ['x', 'y']);

                var x = r2.create(1, 2, 3, 4);
                var y = x.setA(100).setY(55);
                
                assert.deepEqual(x.a, 1);
                assert.deepEqual(x.b, 2);
                assert.deepEqual(x.x, 3);
                assert.deepEqual(x.y, 4);

                assert.deepEqual(y.a, 100);
                assert.deepEqual(y.b, 2);
                assert.deepEqual(y.x, 3);
                assert.deepEqual(y.y, 55);
            }],
            ["Record extend custom ctor",
            function(){
                var r = record.declare(null, ['a', 'b']);
                var r2 = record.extend(r, ['x', 'y'], function(a,b, x, y) {
                    this.a = a * 2;
                    this.b = b * 3;
                    this.x = x * 4;
                    this.y = y * 5;
                });

                var x = r2.create(1, 2, 3, 4);
                assert.deepEqual(x.a, 2);
                assert.deepEqual(x.b, 6);
                assert.deepEqual(x.x, 12);
                assert.deepEqual(x.y, 20);
            }],
           
        ],
    };
});
