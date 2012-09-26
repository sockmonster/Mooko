/* ******** ******** ******** */
/*      PRIVATE SECTION       */
/* ******** ******** ******** */
// empty!

/* ******** ******** ******** */
/*       PUBLIC SECTION       */
/* ******** ******** ******** */
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
    
    this.ajugate = function() {
        var mT = this.transpose();
        var mcftmp = [];
        mcftmp[0] = (mT.m[4] * mT.m[8]) - (mT.m[5] * mT.m[7]);
        mcftmp[1] = (mT.m[3] * mT.m[8]) - (mT.m[5] * mT.m[6]);
        mcftmp[2] = (mT.m[3] * mT.m[7]) - (mT.m[4] * mT.m[6]);
        mcftmp[3] = (mT.m[1] * mT.m[8]) - (mT.m[2] * mT.m[7]);
        mcftmp[4] = (mT.m[0] * mT.m[8]) - (mT.m[2] * mT.m[6]);
        mcftmp[5] = (mT.m[0] * mT.m[7]) - (mT.m[1] * mT.m[6]);    
        mcftmp[6] = (mT.m[1] * mT.m[5]) - (mT.m[2] * mT.m[4]);
        mcftmp[7] = (mT.m[0] * mT.m[5]) - (mT.m[2] * mT.m[3]);
        mcftmp[8] = (mT.m[0] * mT.m[4]) - (mT.m[1] * mT.m[3]);
        var cofactorMatrix = new Matrix3( { m : mcftmp } );
        var mask = new Matrix3( { m : [+1, -1, +1, -1, +1, -1, +1, -1, +1] } );
        return cofactorMatrix.multiply(mask);
    };
    
    this.invert = function() {
        var aj = this.ajugate();
        return aj.scalarMultiply(1 / this.determinant());
    };

    this.toOpenGL = function() {
        var mtmp = [];
        mtmp[0] = this.m[0];
        mtmp[1] = this.m[1];
        mtmp[2] = this.m[2];
        mtmp[3] = 0;   
        mtmp[4] = this.m[3];
        mtmp[5] = this.m[4];
        mtmp[6] = this.m[5];
        mtmp[7] = 0;
        mtmp[8] = this.m[6];
        mtmp[9] = this.m[7];
        mtmp[10] = this.m[8];
        mtmp[11] = 0;
        mtmp[12] = 0;
        mtmp[13] = 0;
        mtmp[14] = 0;
        mtmp[15] = 1;
        return mtmp;
    }
    
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





