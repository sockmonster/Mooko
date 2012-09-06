/* 
TODO: implement standard Matrix 3D functions + operations
TODO: implement relevant rotation functions - ASK OLI
TODO: function to convert AffTrnsfrm to a format compatible w/ OpenGL
*/

/*--- CONSTRUCTOR ---*/ 
function Matrix(a11, a12, a13, a21, a22, a23, a31, a32, a33)
{
    this.m = [a11, a12, a13, 
              a21, a22, a23, 
              a31, a32, a33];
    
    this.set = function(a11, a12, a13, a21, a22, a23, a31, a32, a33)
    {
        this.m = [a11,a12,a13,  a21,a22,a23,  a31,a32,a33];
        return "set(): what shall i return?";
    }
    
    this.toIdentity = function()
    {
        this.m = [1,0,0, 0,1,0, 0,0,1];
        return "toIdentity(): what shall i return?";
    }
    
    this.toZero = function()
    {
        this.m = [0,0,0, 0,0,0, 0,0,0];
        return "toZero(): what shall i return?";
    }
    
    this.toOnes = function()
    {
        this.m = [1,1,1, 1,1,1, 1,1,1];
        return "toOnes(): what shall i return?";
    }
    
    this.toString = function() 
    {
        var ms = "";
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                ms += this.m[i * 3 + j];
            }
            ms += '</br>';
        }
        return ms;
    }
}

function add()
{
    
}

function subtract()
{
    // subtract the second matrix from the first
}

function mult()
{
    // mult by first matrix by the second
}

function vectormult()
{
    // mult matrix with a vector
}
function scalarmult()
{
    // mult matrix with a real-valued scalar  
}

function div()
{
    // divide matrix values by real-valued scalar
}

function transpose()
{
}

function det()
{
}

function invert()
{
}

function equals()
{
    // check if 2 matrices identical
}

function toString(M)
{
    
}




