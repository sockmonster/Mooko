// Useful lecture notes from a Uni course on 3D graphics/OpenGL/Linear Algebra 
// http://people.cs.clemson.edu/~dhouse/courses/401/notes/affines-matrices.pdf

// TODO: Rearrange AT to be OpenGL compliant - see notes!
// TODO: CHECK mul!
// TODO: CHECK applyVec!
// TODO: CHECK applyInverseVec!
var Transform  = function() 
{
    var AT = Matrix4.toIdentity(); // 4x4
    
    this.pos = [0,0];
    this.rot = 0;
    this.scale = 0;
    
    this.scaleTo = function(lamda) {
        this.scale = lamda;
        this.updateScaleRot();
    };
    this.scaleBy = function(lamda) {
        this.scale *= lamda;
        this.updateScaleRot();
    };
    
    this.translateTo = function(x, y) {
        AT[3] = x;
        AT[7] = y; 
    };
    this.translateBy = function(x, y) {
        AT[3] += x;
        AT[7] += y; 
    };
        
    this.rotateTo = function(theta) {
        this.rot = theta;
        this.updateScaleRot();
    };
    this.rotateBy = function(theta) {
        this.rot += theta;
        this.updateScaleRot();
    };
    
    /** this.updateScaleRot : updates the scale-rotation submatrix in Affine Transform */
    this.updateScaleRot = function() {
        AT[0] = this.scale * Math.cos(this.rot);
        AT[1] = -Math.sin(this.rot);
        AT[4] = Math.sin(this.rot);
        AT[5] = this.scale * Math.cos(this.rot);
    };
    
    /** this.mul : muliplies this object's Affine Transform by the passed Transform object's Affine Transform */  
    this.Mul = function(trnsfrm) {
        return Matrix4.mul(this.AT, trnsfrm.AT);
    };
    
    this.toWebGL = function(A) {
        return Matrix4.transpose(this.AT);
    };
    
};