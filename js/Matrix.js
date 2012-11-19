/**
 * Matrix3 & Matrix4
 * 
 * > We create variables to attach our handler functions. 
 * > 3x3 and 4x4 have separate implementations. Treated like 'static' classes.
 * > All matrices stored as flattened arrays.
 * > For efficiency, all functions are entirely mathematical. No safety checking 
 *   is done inside functions. The responsibility is on the programmer to pass 
 *   mathematically sensible parameter values, correctly arranged and formatted.
 *   e.g. invert() asumes the passed matrix is invertible.
 */
/* ***************************** MATRIX 3x3 ******************************** */
var Matrix3 = {}; 
/* ********************* *
 *   FACTORY FUNCTIONS   *
 * ********************* */
Matrix3.toIdentity = function() {
    return [1,0,0, 0,1,0, 0,0,1];
};  
Matrix3.toZero = function() {
    return [0,0,0, 0,0,0, 0,0,0];
};
Matrix3.toOnes = function() {
   return [1,1,1, 1,1,1, 1,1,1];
};

/* ************** *
 *   OPERATIONS   *
 * ************** */
Matrix3.add = function(A, B) {
    for(var i=0 ; i < 9; i++)
        A[i] += B[i];
    return A;
};
Matrix3.sub = function(A, B) {
    for(var i=0 ; i < 9; i++)
        A[i] -= B[i];
    return A;
};
Matrix3.scalarMul = function(A, lamda) {
    for(var i=0 ; i < 9; i++)
        A[i] *= lamda;
    return A;
};
Matrix3.mul = function(A, B) {
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
Matrix3.det = function(A) {
    return  ( A[0] * (A[4]*A[8] - A[5]*A[7]) ) - 
            ( A[1] * (A[3]*A[8] - A[5]*A[6]) ) +
            ( A[2] * (A[3]*A[7] - A[4]*A[6]) );
};
Matrix3.transpose = function(A) {
    var mtmp = [];
    mtmp[0] = A[0];
    mtmp[1] = A[3];
    mtmp[2] = A[6];
    mtmp[3] = A[1];
    mtmp[4] = A[4];
    mtmp[5] = A[7];
    mtmp[6] = A[2];
    mtmp[7] = A[5];
    mtmp[8] = A[8];
    return mtmp;
};
Matrix3.adjugate = function(A) {
    /* adjugate matrix is transpose of cofactor matrix */
    var mcf = []; // matrix of cofactors
    mcf[0] = +1 * ( (A[4]*A[8]) - (A[5]*A[7]) );
    mcf[1] = -1 * ( (A[3]*A[8]) - (A[5]*A[6]) );
    mcf[2] = +1 * ( (A[3]*A[7]) - (A[4]*A[6]) );
    mcf[3] = -1 * ( (A[1]*A[8]) - (A[2]*A[7]) );
    mcf[4] = +1 * ( (A[0]*A[8]) - (A[2]*A[6]) );
    mcf[5] = -1 * ( (A[0]*A[7]) - (A[1]*A[6]) );    
    mcf[6] = +1 * ( (A[1]*A[5]) - (A[2]*A[4]) );
    mcf[7] = -1 * ( (A[0]*A[5]) - (A[2]*A[3]) );
    mcf[8] = +1 * ( (A[0]*A[4]) - (A[1]*A[3]) );
    return Matrix3.transpose(mcf);  
};
Matrix3.invert = function(A) {
    var aj = Matrix3.adjugate(A);
    var det = Matrix3.det(A);
    return Matrix3.scalarMul(aj, 1 / det);
};

/* ***************************** MATRIX 4x4 ******************************** */
var Matrix4 = {}; 
/* ********************* *
 *   FACTORY FUNCTIONS   *
 * ********************* */
Matrix4.toIdentity = function() {
    return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
};  
Matrix4.toZero = function() {
    return [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
};
Matrix4.toOnes = function() {
   return [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1];
};

/* ************** *
 *   OPERATIONS   *
 * ************** */
Matrix4.add = function(A, B) {
    for(var i=0 ; i < 16; i++)
        A[i] += B[i];
    return A;
};
Matrix4.sub = function(A, B) {
    for(var i=0 ; i < 16; i++)
        A[i] -= B[i];
    return A;
};
Matrix4.scalarMul = function(A, lamda) {
    for(var i=0 ; i < 16; i++)
        A[i] *= lamda;
    return A;
};
Matrix4.mul = function(A, B) {
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
Matrix4.det = function(A) {  
    var minor0 = Matrix3.det( [ A[5],A[6],A[7], A[9],A[10],A[11], A[13],A[14],A[15] ] );
    var minor1 = Matrix3.det( [ A[4],A[6],A[7], A[8],A[10],A[11], A[12],A[14],A[15] ] );
    var minor2 = Matrix3.det( [ A[4],A[5],A[7], A[8],A[9],A[11],  A[12],A[13],A[15] ] );
    var minor3 = Matrix3.det( [ A[4],A[5],A[6], A[8],A[9],A[10],  A[12],A[13],A[14] ] );
    return ( (A[0]*minor0) - (A[1]*minor1) + (A[2]*minor2) - (A[3]*minor3) );
};
Matrix4.transpose = function(A) {
    var mtmp = [];
    mtmp[0] = A[0];
    mtmp[1] = A[4];
    mtmp[2] = A[8];
    mtmp[3] = A[12];
    mtmp[4] = A[1];
    mtmp[5] = A[5];
    mtmp[6] = A[9];
    mtmp[7] = A[13];
    mtmp[8] = A[2];
    mtmp[9] = A[6];
    mtmp[10] = A[10];
    mtmp[11] = A[14];
    mtmp[12] = A[3];
    mtmp[13] = A[7];
    mtmp[14] = A[11];
    mtmp[15] = A[15];
    return mtmp;
};
Matrix4.adjugate = function(A) {
    /* adjugate matrix is transpose of cofactor matrix */
    var mcf = []; // matrix of cofactors  
    mcf[0] = +1 * Matrix3.det([A[5],A[6],A[7],A[9],A[10],A[11],A[13],A[14],A[15]]);
    mcf[1] = -1 * Matrix3.det([A[4],A[6],A[7],A[8],A[10],A[11],A[12],A[14],A[15]]);
    mcf[2] = +1 * Matrix3.det([A[4],A[5],A[7],A[8],A[9],A[11],A[12],A[13],A[15]]);
    mcf[3] = -1 * Matrix3.det([A[4],A[5],A[6],A[8],A[9],A[10],A[12],A[13],A[14]]);  
    mcf[4] = -1 * Matrix3.det([A[1],A[2],A[3],A[9],A[10],A[11],A[13],A[14],A[15]]);
    mcf[5] = +1 * Matrix3.det([A[0],A[2],A[3],A[8],A[10],A[11],A[12],A[14],A[15]]);
    mcf[6] = -1 * Matrix3.det([A[0],A[1],A[3],A[8],A[9],A[11],A[12],A[13],A[15]]);
    mcf[7] = +1 * Matrix3.det([A[0],A[1],A[2],A[8],A[9],A[10],A[12],A[13],A[14]]);   
    mcf[8]  = +1 * Matrix3.det([A[1],A[2],A[3],A[5],A[6],A[7],A[13],A[14],A[15]]);
    mcf[9]  = -1 * Matrix3.det([A[0],A[2],A[3],A[4],A[6],A[7],A[12],A[14],A[15]]);
    mcf[10] = +1 * Matrix3.det([A[0],A[1],A[3],A[4],A[5],A[7],A[12],A[13],A[15]]);
    mcf[11] = -1 * Matrix3.det([A[0],A[1],A[2],A[4],A[5],A[6],A[12],A[13],A[14]]);   
    mcf[12] = -1 * Matrix3.det([A[1],A[2],A[3],A[5],A[6],A[7],A[9],A[10],A[11]]);
    mcf[13] = +1 * Matrix3.det([A[0],A[2],A[3],A[4],A[6],A[7],A[8],A[10],A[11]]);
    mcf[14] = -1 * Matrix3.det([A[0],A[1],A[3],A[4],A[5],A[7],A[8],A[9],A[11]]);
    mcf[15] = +1 * Matrix3.det([A[0],A[1],A[2],A[4],A[5],A[6],A[8],A[9],A[10]]);
    return Matrix4.transpose(mcf);  
};
Matrix4.invert = function(A) {
    var aj = Matrix4.adjugate(A);
    var det = Matrix4.det(A);
    return Matrix4.scalarMul(aj, 1 / det);
};

/* ********************* GENERAL HELPER FUNCTIONS ************************** */
var Matrix = {};
/** 
 * Matrix.embed
 * @param {Matrix3} A3x3 expects 3x3 matrix in flattened array 
 * @return {Matrix4} the 3x3 matrix embeded in top L corner of a 4x4 identity 
 */
Matrix.embed = function(A3x3) {
    var A4x4 = Matrix4.toIdentity();
    A4x4[0] = A3x3[0];  A4x4[1] = A3x3[1];  A4x4[2]  = A3x3[2]; 
    A4x4[4] = A3x3[3];  A4x4[5] = A3x3[4];  A4x4[6]  = A3x3[5];
    A4x4[8] = A3x3[6];  A4x4[9] = A3x3[7];  A4x4[10] = A3x3[8];
    return A4x4;
};
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

