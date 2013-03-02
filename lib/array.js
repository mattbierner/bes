/**
 * 
 */
define(function(){
"use strict";

/*
 ******************************************************************************/
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var reduce = Array.prototype.reduce;

/* Array Operations
 ******************************************************************************/
/**
 * Create a new array with zero or more 'elements' appended onto  'arr'.
 * 
 * @param arr Array like object
 * @param ...elements Items to push onto 'arr'.
 * 
 * @return New array of 'elements' appended onto 'arr'.
 */
var push = function(arr /*, ...elements*/) {
    return concat.call(arr, slice.call(arguments, 1));
};

/**
 * Create a new array from 'arr' with last element removed.
 * 
 * @param arr Array like object.
 * 
 * @return New array with last element removed or empty array if 'arr' was empty.
 */
var pop = function(arr) {
    return slice.call(arr, 0, arr.length - 1);
};

/**
 * Create a new array with zero or more 'elements' prepended onto 'arr'.
 * 
 * @param arr Array like object
 * @param ...elements Items to unshift onto 'arr'.
 * 
 * @return New array of 'elements' pushed onto end of 'arr'.
 */
var unshift = function(arr /*, ...elements*/) {
    return concat.call(slice.call(arguments, 1), arr)
};

/**
 * Create a new array from 'arr' with first element removed/
 * 
 * @param arr Array like object.
 * 
 * @return New array from 'arr' with first element removed.
 */
var shift = function(arr) {
    return slice.call(arr, 1);
};

/**
 * Create a new array from 'arr' with 'howMany' elements removed at 'index' and
 * zero or more 'elements' inserted.
 * 
 * @param arr Array like object.
 * @param {number} index Index where to insert and remove elements. If negative,
 *     use as offset from end of array.
 * @param {number} howMany Number of elements to remove.
 * @param ...elements Items to insert at index.
 * 
 * @return New array from 'arr' with 'howMany' removed at 'index' and
 *    zero or more 'elements' inserted.
 */
var splice  = function(arr, index, howMany /*, ...elements*/) {
    var i = (index < 0 ? arr.length + index : index);
    return slice.call(arr, 0, i)
        .concat(slice.call(arguments, 3), slice.call(arr, i + Math.max(howMany, 0)));
};

/**
 * Create a new array from reversing 'arr'.
 * 
 * @param arr Array like object.
 * 
 * @return New array of reversed 'arr'.
 */
var reverse = function(arr) {
    return (arr.length > 0 ?
        reduce.call(slice.call(arr, 1), unshift, [arr[0]]) :
        arr);
};

var sort = function(arr, f) {};
    
    
/* Export
 ******************************************************************************/
return {
    'push': push,
    'pop': pop,
    'shift': shift,
    'unshift': unshift,
    'splice': splice,
    'reverse': reverse
};

});