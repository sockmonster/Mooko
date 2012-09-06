/* 
TODO: implement standard Matrix 3D functions + operations
TODO: implement relevant rotation functions - ASK OLI
TODO: function to convert AffTrnsfrm to a format compatible w/ OpenGL
*/

/*--- CONSTRUCTOR ---*/ 
function Matrix(a11, a12, a13, a21, a22, a23, a31, a32, a33)
{
    // reusable vars
    var i = -1;
    var j = -1;
    
    this.m = [ a11, a12, a13, 
               a21, a22, a23, 
               a31, a32, a33];
    
    this.set = function(a11, a12, a13, a21, a22, a23, a31, a32, a33)
    {
        this.m = [a11,a12,a13,  a21,a22,a23,  a31,a32,a33];
        return "set(): what shall i return?";
    };
    
    this.toIdentity = function()
    {
        this.m = [1,0,0, 0,1,0, 0,0,1];
        return "toIdentity(): what shall i return?";
    };
    
    this.toZero = function()
    {
        this.m = [0,0,0, 0,0,0, 0,0,0];
        return "toZero(): what shall i return?";
    };
    
    this.toOnes = function()
    {
        this.m = [1,1,1, 1,1,1, 1,1,1];
        return "toOnes(): what shall i return?";
    };
    
    this.add = function()
    {
        if(arguments.length == 9)
        {
            for(i=0 ; i < arguments.length; i++)
                this.m[i] += arguments[i];
            return this.m;
        }
        else
            return false;

    };
    
    this.subtr = function()
    {
        if(arguments.length === 9)
        {
            for(i=0 ; i < arguments.length; i++)
                this.m[i] -= arguments[i];
            return this.m;
        }
        else
            return false;
    };
    
    this.mult = function()
    {
        return false;
    };

    this.vectormult = function()
    {
        return false;
    };

    this.scalarmult = function()
    {
        return false;
    };

    this.div = function()
    {
        return false;
    };

    this. transpose = function()
    {
        return false;
    };
    
    this.det = function()
    {
        return false;
    };
    
    this.invert = function()
    {
        return false;
    };

    this.equals = function()
    {
        var valid = (arguments.length === 9);
        i = 0;
        while(valid === true && i < 9)
        {
            valid &= (this.m[i] === arguments[i]);
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





