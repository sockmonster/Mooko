/* 
TODO: implement standard Matrix 3D functions + operations
TODO: implement relevant rotation functions - ASK OLI
TODO: function to convert AffTrnsfrm to a format compatible w/ OpenGL
*/

/*--- CONSTRUCTOR ---*/ 
function Matrix(mat)
{
    // reusable vars
    var i = -1, j = -1;
    
    this.m = mat.m;
    
    this.set = function(mat)
    {
        this.m = mat.m;
        return this;
    };
    
    this.toIdentity = function()
    {
        this.m = [1,0,0, 0,1,0, 0,0,1];
        return this;
    };
    
    this.toZero = function()
    {
        this.m = [0,0,0, 0,0,0, 0,0,0];
        return this;
    };
    
    this.toOnes = function()
    {
        this.m = [1,1,1, 1,1,1, 1,1,1];
        return this;
    };
    
    this.add = function(mat)
    {
        for(i=0 ; i < 9; i++)
            this.m[i] += mat.m[i];
        return this;
    };
    
    this.subtr = function()
    {
        for(i=0 ; i < 9; i++)
            this.m[i] -= mat.m[i];
        return this;
    };
    
    this.mult = function(mat)
    {
        var mtmp = [0,0,0, 0,0,0, 0,0,0];
        
        /*
        i = 0;
        while(i < 9)
        {
            mtmp[i + 0] = this.m[i]*mat.m[0] + this.m[i + 1]*mat.m[3] + this.m[i + 2]*mat.m[6];
            mtmp[i + 1] = this.m[i]*mat.m[1] + this.m[i + 1]*mat.m[4] + this.m[i + 2]*mat.m[7];
            mtmp[i + 2] = this.m[i]*mat.m[2] + this.m[i + 1]*mat.m[5] + this.m[i + 2]*mat.m[8];
            i += 3;
        }
        */
        mtmp[0] = this.m[0]*mat.m[0] + this.m[1]*mat.m[3] + this.m[2]*mat.m[6];
        mtmp[1] = this.m[0]*mat.m[1] + this.m[1]*mat.m[4] + this.m[2]*mat.m[7];
        mtmp[2] = this.m[0]*mat.m[2] + this.m[1]*mat.m[5] + this.m[2]*mat.m[8];
        
        mtmp[3] = this.m[3]*mat.m[0] + this.m[4]*mat.m[3] + this.m[5]*mat.m[6];
        mtmp[4] = this.m[3]*mat.m[1] + this.m[4]*mat.m[4] + this.m[5]*mat.m[7];
        mtmp[5] = this.m[3]*mat.m[2] + this.m[4]*mat.m[5] + this.m[5]*mat.m[8];
        
        mtmp[6] = this.m[6]*mat.m[0] + this.m[7]*mat.m[3] + this.m[8]*mat.m[6];
        mtmp[7] = this.m[6]*mat.m[1] + this.m[7]*mat.m[4] + this.m[8]*mat.m[7];
        mtmp[8] = this.m[6]*mat.m[2] + this.m[7]*mat.m[5] + this.m[8]*mat.m[8];
        
        this.m = mtmp;
        return this;
    };

    this.vector3mult = function(vec3)
    {
        /*
        var vtmp = [0,0,0];
        
        vtmp[0] = this.m[0]*vec3.x + this.m[1]*vec3.x + this.m[2]*vec3.x;
        vtmp[1] = this.m[3]*vec3.y + this.m[4]*vec3.y  + this.m[5]*vec3.y;
        vtmp[2] = this.m[6]*vec3.z + this.m[7]*vec3.z + this.m[8]*vec3.z;
        return new Vector3( { x:vtmp[0], y:vtmp[1], z:vtmp[2] } );
        */
    };

    this.scalarmult = function(lamda)
    {
        for(i=0 ; i < 9; i++)
            this.m[i] *= lamda;
        return this;
    };

    this.scalardiv = function(lamda)
    {
        if(lamda !== 0.0)
        {
            for(i=0 ; i < 9; i++)
                this.m[i] /= lamda;
            return this;
        }
    };

    this.transpose = function()
    {
        var tmp = this.m[1];
        this.m[1] = this.m[3];
        this.m[3] = tmp; 
        
        tmp = this.m[2];
        this.m[2] = this.m[6];
        this.m[6] = tmp; 
        
        tmp = this.m[5];
        this.m[5] = this.m[7];
        this.m[7] = tmp;
        
        return this;
    };
    
    this.det = function()
    {
        return  ( this.m[0] * (this.m[4]*this.m[8] - this.m[5]*this.m[7]) ) - 
                ( this.m[1] * (this.m[3]*this.m[8] - this.m[5]*this.m[6]) ) +
                ( this.m[2] * (this.m[3]*this.m[7] - this.m[4]*this.m[6]) );
    };
    
    this.invert = function()
    {
        return false;
    };

    this.equals = function(mat)
    {
        var valid = true;
        i = 0;
        while(valid === true && i < 9)
        {
            valid &= (this.m[i] === mat[i]);
            i++;
        }
        return valid;
    };
    
    this.toString = function() 
    {
        var ms = "";
        for(i = 0; i < 3; i++) {
            for(j = 0; j < 3; j++) {
                ms += this.m[i * 3 + j];
            }
            ms += '</br>';
        }
        return ms;
    };
}





