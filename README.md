# Bes

## About
Bes is a small library for working with objects without mutation in Javascript.
Replacement for the builtin mutating array and object operations are provided,
along with a record api for easily creating transformable immutable objects.

## Modules ##
### lib/array - 'bes::array'
Replacements for `push` `pop` `shift` `unshift` `splice` and `reverse` that return
arrays and do not mutate the input array.

    // bes.array.push
    var a = [1, 2, 3];
    var a1 = bes.array.push(a, 4);
    
    a1; // [1, 2, 3, 4]
    a; // [1, 2, 3];

### lib/object - 'bes::object'
Setting and deleting properties on an object. Operations return a copy of the object
and do not mutate the original.

    var o = {x: 3, y: {z: 4}};
    var o1 = bes.object.deleteProperty(
        bes.object.setProperty(o, 'w', 3, true),
        'x');
    
    o1; // {'y': {'z': 4}, 'w': 3}
    o; // {'x': 3, 'y': {'z': 4}});

### lib/record - 'bes/record'
Interface for defining an immutable object with transform setters that return
copies of the original without mutation.

    // Declare record with no prototype and three properties
    var R = bes.record.declare(null, ['a', 'b', 'c']);
    
    // crate instance of record
    var x = R.create("g", [43], null); // same as new R("g", [43], null)
    
    x instanceof R; // true
    x.a; // "g"
    x.b; // [43]
    x.c; // null
    
    // Using transform setters
    var x1 = x.setA("n").setC(100);
    x1.a; // "n"
    x1.b; // [43]
    x1.c; // 100
    
    x.a; // "g"
    x.b; // [43]
    x.c; // null

Records can subclass and be subclassed by normal objects and extended to create
new records:

    var S = bes.record.extend(R, ['d']);
    
    var y = S.create(1, 2, 3, 4).setC(100);
    y.a; // 1
    y.b; // 2
    y.c; // 100
    y.d; // 4
    
