/******************************************************************************
 * MATRIX CONVENTIONS TO POSSIBLY DOCUMENT
 * 
 * We create one variable 'Matrix' to attach all our handler functions. 
 * It is treated like a 'static class'.
 * All matrices assumed to be 4D i.e. a 3D matrix embedded in a 4x4 identity.
 * All matrices stored in flattened array form.
 ******************************************************************************/
var Matrix = {}; 

/***********************
 *  FACTORY FUNCTIONS  *
 ***********************/
Matrix.setTo = function(A) {
    return A;
};

Matrix.toIdentity = function() {
    return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
};
    
Matrix.toZero = function() {
    return [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
};

Matrix.toOnes = function() {
   return [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1];
};

Matrix.embed = function(A3x3) {
    // Embed a 3x3 matrix in top L corner of a 4x4 identity matrix.
    var A4x4 = Matrix.toIdentity();
    A4x4[0] = A3x3[0];  A4x4[1] = A3x3[1];  A4x4[2]  = A3x3[2]; 
    A4x4[4] = A3x3[3];  A4x4[5] = A3x3[4];  A4x4[6]  = A3x3[5];
    A4x4[8] = A3x3[6];  A4x4[9] = A3x3[7];  A4x4[10] = A3x3[8];
    return A4x4;
};

Matrix.toWebGL = function(A) {
    // TO DO
};

/****************
 *  OPERATIONS  *
 ****************/
Matrix.add3x3 = function(A, B) {
    for(var i=0 ; i < 9; i++)
        A[i] += B[i];
    return A;
};

Matrix.add4x4 = function(A, B) {
    for(var i=0 ; i < 16; i++)
        A[i] += B[i];
    return A;
};

Matrix.subtract3x3 = function(A, B) {
    for(var i=0 ; i < 9; i++)
        A[i] -= B[i];
    return A;
};

Matrix.subtract4x4 = function(A, B) {
    for(var i=0 ; i < 16; i++)
        A[i] -= B[i];
    return A;
};

Matrix.scalarMultiply = function(A, lamda) {
    for(var i=0 ; i < 9; i++)
        A[i] *= lamda;
    return A;
};

Matrix.multiply3x3 = function(A, B) {
    var mtmp = [];
    mtmp[0] = A[0]*B[0] + A[1]*B[3] + A[2]*B[6];
    mtmp[1] = A[0]*B[1] + A[1]*B[4] + A[2]*B[7];
    mtmp[2] = A[0]*B[2] + A[1]*B[5] + A[2]*B[8];  
    
    mtmp[3] = A[3]*B[0] + A[4]*B[3] + A[5]*B[6];
    mtmp[4] = A[3]*B[1] + A[4]*B[4] + A[5]*B[7];
    mtmp[5] = A[3]*B[2] + A[4]*B[5] + A[5]*B[8];
    
    mtmp[6] = A[6]*B[0] + A[7]*B[3] + A[8]*B[6];
    mtmp[7] = A[6]*B[1] + A[7]*B[4] + A[8]*B[7];
    mtmp[8] = A[6]*B[2] + A[7]*B[5] + A[8]*B[8];
    return mtmp;
};

Matrix.multiply4x4 = function(A, B) {
    var mtmp = [];
    mtmp[0]  = A[0]*B[0]  + A[1]*B[4]  + A[2]*B[8]   + A[3]*B[12];
    mtmp[1]  = A[0]*B[1]  + A[1]*B[5]  + A[2]*B[9]   + A[3]*B[13];
    mtmp[2]  = A[0]*B[2]  + A[1]*B[6]  + A[2]*B[10]  + A[3]*B[14];
    mtmp[3]  = A[0]*B[3]  + A[1]*B[7]  + A[2]*B[11]  + A[3]*B[15];
    
    mtmp[4]  = A[4]*B[0]  + A[5]*B[4]  + A[6]*B[8]   + A[7]*B[12];
    mtmp[5]  = A[4]*B[1]  + A[5]*B[5]  + A[6]*B[9]   + A[7]*B[13];
    mtmp[6]  = A[4]*B[2]  + A[5]*B[6]  + A[6]*B[10]  + A[7]*B[14];
    mtmp[7]  = A[4]*B[3]  + A[5]*B[7]  + A[6]*B[11]  + A[7]*B[15];
    
    mtmp[8]  = A[8]*B[0]  + A[9]*B[4]  + A[10]*B[8]  + A[11]*B[12];
    mtmp[9]  = A[8]*B[1]  + A[9]*B[5]  + A[10]*B[9]  + A[11]*B[13];
    mtmp[10] = A[8]*B[2]  + A[9]*B[6]  + A[10]*B[10] + A[11]*B[14];
    mtmp[11] = A[8]*B[3]  + A[9]*B[7]  + A[10]*B[11] + A[11]*B[15];
    
    mtmp[12] = A[12]*B[0] + A[13]*B[4] + A[14]*B[8]  + A[15]*B[12];
    mtmp[13] = A[12]*B[1] + A[13]*B[5] + A[14]*B[9]  + A[15]*B[13];
    mtmp[14] = A[12]*B[2] + A[13]*B[6] + A[14]*B[10] + A[15]*B[14];
    mtmp[15] = A[12]*B[3] + A[13]*B[7] + A[14]*B[11] + A[15]*B[15];
    return mtmp;
};

Matrix.determinant3x3 = function(A) {
    return  ( A[0] * (A[4]*A[8] - A[5]*A[7]) ) - 
            ( A[1] * (A[3]*A[8] - A[5]*A[6]) ) +
            ( A[2] * (A[3]*A[7] - A[4]*A[6]) );
};

/* THE BELOW ARE ALL STILL 3X3 */
Matrix.transpose3x3 = function(A) {
    var mtmp = A;
    mtmp[1] = A[3];
    mtmp[3] = A[1];
    mtmp[2] = A[6];
    mtmp[6] = A[2];    
    mtmp[5] = A[7];
    mtmp[7] = A[5];
    return mtmp;
};

Matrix.ajugate = function(A) {
    var At = Matrix.transpose(A);
    var mcfA = []; // matrix of cofactors
    mcfA[0] = (At[4] * At[8]) - (At[5] * At[7]);
    mcfA[1] = (At[3] * At[8]) - (At[5] * At[6]);
    mcfA[2] = (At[3] * At[7]) - (At[4] * At[6]);
    mcfA[3] = (At[1] * At[8]) - (At[2] * At[7]);
    mcfA[4] = (At[0] * At[8]) - (At[2] * At[6]);
    mcfA[5] = (At[0] * At[7]) - (At[1] * At[6]);    
    mcfA[6] = (At[1] * At[5]) - (At[2] * At[4]);
    mcfA[7] = (At[0] * At[5]) - (At[2] * At[3]);
    mcfA[8] = (At[0] * At[4]) - (At[1] * At[3]);
    var mask = [+1, -1, +1, -1, +1, -1, +1, -1, +1];
    return Matrix.scalarMultiply(A, mask);
};

Matrix.invert = function(A) {
    var aj = Matrix.ajugate(A);
    var det = Matrix.determinant(A);
    return Matrix.scalarMultiply(aj, 1 / det);
};

/******************************
 *  GENERAL HELPER FUNCTIONS  *
 ******************************/
Matrix.equals = function(A, B) {
    var i = 0, EPS = 1E-5, N = A.length;
    var valid = B.length === N ? true : false; 
    while(valid === true && i < N) {
        valid = ( Math.abs(A[i] - B[i]) < EPS );
        i++;
    }
    return valid;
};

Matrix.print = function(A, sep) {
    var N = A.length == 16 ? 4 : 3;
    sep = typeof sep === 'undefined' ? '</br>' : sep;
    var ms = "";
    for(var i = 0; i < N; i++) {
        for(var j = 0; j < N; j++)
            ms += this.m[i * N + j];
        ms += sep;
    }
    return ms;
};

Matrix.toString = function(A) {
    // TO DO    - does it make sense to have a toString method anymore?
    //          - should I simply rename print?
};

