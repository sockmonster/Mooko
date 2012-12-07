// Useful lecture notes from a Uni course on 3D graphics/OpenGL/Linear Algebra 
// http://people.cs.clemson.edu/~dhouse/courses/401/notes/affines-matrices.pdf

// TODO: Rearrange AT to be OpenGL compliant - see notes!
// TODO: CHECK mul!
// TODO: CHECK applyVec!
// TODO: CHECK applyInverseVec!
var Transform  = function() 
{
    //TODO: update all rot/scale calcs to be col-major!!
    
    var m_AT = Matrix4.toIdentity();
    
    this.Pos = [0,0];
    var m_rot = 0;
    var m_scale = 0;
    
    this.getAT = function() {
        return m_AT;
    };
    
    this.getPos = function() {
        return this.Pos;  
    };
    
    //TODO: getrot, getscale
    
    this.setTo = function(){
        // TODO: implement a function to set all of the properties that 
        // make up this transform. In a similar fashion to how we can set a vec      
    };
    this.scaleTo = function(lamda) {
        m_scale = lamda;
        this.updateScaleRot();
    };
    this.scaleBy = function(lamda) {
        m_scale *= lamda;
        this.updateScaleRot();
    };
    this.translateTo = function(x, y) {
        m_AT[12] = x;
        m_AT[13] = y; 
        this.Pos[0] = x;
        this.Pos[1] = y;
    };
    this.translateBy = function(x, y) {
        m_AT[12] += x;
        m_AT[13] += y; 
    };
    this.rotateTo = function(theta) {
        m_rot = theta;
        this.updateScaleRot();
    };
    this.rotateBy = function(theta) {
        m_rot += theta;
        this.updateScaleRot();
    };
    /** this.updateScaleRot : updates the scale-rotation submatrix in Affine Transform */
    this.updateScaleRot = function() {
        m_AT[0] = m_scale * Math.cos(m_rot);
        m_AT[1] = -Math.sin(m_rot);
        m_AT[4] = Math.sin(m_rot);
        m_AT[5] = m_scale * Math.cos(m_rot);
    };
    /** this.mul : muliplies this object's Affine Transform by the passed Transform object's Affine Transform */  
    this.mul = function(trnsfrm) {
        alert("lt = " + trnsfrm.getAT());
        
        m_AT = Matrix4.mul(m_AT, trnsfrm.getAT());
        
        alert("m_AT = " + m_AT);
        this.Pos[0] = m_AT[12];
        this.Pos[1] = m_AT[13];
        //TODO: need to also update rot/scale convenience vars!
    };
    this.toWebGL = function(A) {
        return Matrix4.transpose(m_AT);
    };
    
};