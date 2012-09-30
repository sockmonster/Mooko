/*******************************************************************************
 * Vector.js
 * 
 * This class holds 'static' functions that operate on Vectors.
 * Vectors are assumed to be 4D, although users will only use the first 2.
 * Vectors are assumed to be flattened arrays.
 * ****************************************************************************/
var Vector = {};

/* ************************ *
 * FACTORY FUNCTIONS        *
 * ************************ */
Vector.create = function(x, y) {
    return [x, y, 0, 1];  
};

Vector.zeros = function() {
    return [0, 0, 0, 1];
};

Vector.ones = function() {
    return [1, 1, 0, 1];
};

/* ************************ *
 * OPERATORS                *
 * ************************ */
Vector.add = function(A, B) {
    return [A[0] + B[0], A[1] + B[1], 0, 1];
};

Vector.subtract = function(A, B) {
    return [A[0] - B[0], A[1] - B[1], 0, 1];
};
    
Vector.scalarMultiply = function(A, s) {
    return [A[0]*s, A[1]*s, 0, 1];
};
    
Vector.scalarDivide = function(A, s) {
    return [A[0]/s, A[1]/s, 0, 1];
};
    
Vector.dotProduct = function(A, B) {
    return A[0]*B[0] + A[1]*B[1];
};
    
Vector.negate = function(A) {
    return [-A[0], -A[1], 0, 1];
};
    
Vector.lengthSquared = function(A) {
    return A[0]*A[0] + A[1]*A[1];
};
    
Vector.length = function(A) {
    return Math.sqrt(this.lengthSquared(A));
};
    
Vector.normalised = function(A) {
    return this.scalarDivide(A, length(A));
};
    
Vector.distance = function(A, B) {
    return this.length(this.subtract(A, B));
};
    
/* ************************ *
 * GENERAL HELPER FUNCTIONS *
 * ************************ */
Vector.equals = function(A, B) {
    return A[0] == B[0] && A[1] == B[1];   
};

Vector.toString = function(A) {
    return "[" + A[0] + ", " + A[1] + "]";
};