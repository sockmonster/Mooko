/* 
TODO: implement standard Matrix 3D functions + operations
TODO: implement relevant rotation functions - ASK OLI
TODO: function = convert AffTrnsfrm to a format compatible w/ OpenGL
      Matrix3 to Matrix4 (embed Mat3 into top L corner of Mat4 identity matrix) 
TODO: filter/map function (for fun!)
TODO: look up List Comprehensions JavaScript
TODO: map function and pass these operations in as function
*/
function Matrix3(mat) 
{   
    this.m = mat.m;
    this.EPSILON = 1E-5;
    
    this.setTo = function(mat) {
        this.m = mat.m;
        return this;
    };
    
    this.toIdentity = function() {
        this.m = [1,0,0, 0,1,0, 0,0,1];
        return this;
    };
    
    this.toZero = function() {
        this.m = [0,0,0, 0,0,0, 0,0,0];
        return this;
    };
    
    this.toOnes = function() {
         this.m = [1,1,1, 1,1,1, 1,1,1];
         return this;
    };
    
    this.multiply = function(mat) {
        var mtmp = [];
        
        mtmp[0] = this.m[0]*mat.m[0] + this.m[1]*mat.m[3] + this.m[2]*mat.m[6];
        mtmp[1] = this.m[0]*mat.m[1] + this.m[1]*mat.m[4] + this.m[2]*mat.m[7];
        mtmp[2] = this.m[0]*mat.m[2] + this.m[1]*mat.m[5] + this.m[2]*mat.m[8];    
        
        mtmp[3] = this.m[3]*mat.m[0] + this.m[4]*mat.m[3] + this.m[5]*mat.m[6];
        mtmp[4] = this.m[3]*mat.m[1] + this.m[4]*mat.m[4] + this.m[5]*mat.m[7];
        mtmp[5] = this.m[3]*mat.m[2] + this.m[4]*mat.m[5] + this.m[5]*mat.m[8];
        
        mtmp[6] = this.m[6]*mat.m[0] + this.m[7]*mat.m[3] + this.m[8]*mat.m[6];
        mtmp[7] = this.m[6]*mat.m[1] + this.m[7]*mat.m[4] + this.m[8]*mat.m[7];
        mtmp[8] = this.m[6]*mat.m[2] + this.m[7]*mat.m[5] + this.m[8]*mat.m[8];
        
        return new Matrix3( { m : mtmp } );
    };

    this.scalarMultiply = function(lamda) {
        var mtmp = this.m;
        for(var i=0 ; i < 9; i++)
            mtmp[i] *= lamda;
        return new Matrix3( { m : mtmp } );
    };

    this.add = function(mat) {
        var mtmp = this.m;
        for(var i=0 ; i < 9; i++)
            mtmp[i] += mat.m[i];
        return new Matrix3( { m : mtmp } );
    };
    
    this.subtract = function(mat) {
        var mtmp = this.m;
        for(var i=0 ; i < 9; i++)
            mtmp[i] -= mat.m[i];
        return new Matrix3( { m : mtmp } );
    };

    this.transpose = function() {
        var mtmp = this.m;
        
        mtmp[1] = this.m[3];
        mtmp[3] = this.m[1];
        mtmp[2] = this.m[6];
        mtmp[6] = this.m[2];    
        mtmp[5] = this.m[7];
        mtmp[7] = this.m[5];
        
        return new Matrix3( { m : mtmp } );
    };
    
    this.determinant = function() {
        return  ( this.m[0] * (this.m[4]*this.m[8] - this.m[5]*this.m[7]) ) - 
                ( this.m[1] * (this.m[3]*this.m[8] - this.m[5]*this.m[6]) ) +
                ( this.m[2] * (this.m[3]*this.m[7] - this.m[4]*this.m[6]) );
    };
    
    this.invert = function() {
        return false;
    };

    this.equals = function(mat) {
        var valid = true;
        var i = 0;
        while(valid === true && i < 9) {
            valid = ( Math.abs(this.m[i] - mat.m[i]) < this.EPSILON );
            i++;
        }
        return valid;
    };
    
    this.toString = function(sep) {
        sep = typeof sep === 'undefined' ? '</br>' : sep;
        var ms = "";
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++)
                ms += this.m[i * 3 + j];
            ms += sep;
        }
        return ms;
    };
}





