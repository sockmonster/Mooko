var Vector = {
    add: function(A, B) {
        return [A[0] + B[0], A[1] + B[1], 0, 1];
    },
    
    subtract: function(A, B) {
        return [A[0] - B[0], A[1] - B[1], 0, 1];
    },
    
    scalarMultiply: function(A, s) {
        return [A[0]*s, A[1]*s, 0, 1];
    },
    
    scalarDivide: function(A, s) {
        return [A[0]/s, A[1]/s, 0, 1];
    },
    
    dotProduct: function(A, B) {
        return A[0]*B[0] + A[1]*B[1];
    },
    
    negate: function(A) {
        return [-A[0], -A[1], 0, 1];
    },
    
    lengthSquared: function(A) {
        return A[0]*A[0] + A[1]*A[1];
    },
    
    length: function(A) {
        return Math.sqrt(this.lengthSquared(A));
    },
    
    normalised: function(A) {
        return this.scalarDivide(A, length(A));
    },
    
    distance: function(A, B) {
        return this.length(this.subtract(A, B));
    }
};