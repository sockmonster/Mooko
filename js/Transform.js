// Qu/  could many Transform objects cause efficiency issues?
// Qu/  is there an easier way of "including" a .js file than writing js 
//      to embed into html doc?

var Transform  = function() {
    var AT = [];
    
    this.scale = function(lamda)
    {
        var S = [lamda,0,0,0, 0,lamda,0,0, 0,0,lamda,0, 0,0,0,lamda]
        Matrix.multiply4x4(AT, S);
    }
    
    this.translate = function(x, y)
    {
        var T = Matrix.toIdentity();
        R[3]  = x;
        R[7]  = y;
        Matrix.multiply4x4(AT, T);
    }
    
    this.rotate = function(theta)
    {
        // Assume clockwise rotation about origin
        var c = Math.cos(theta);
        var s = Math.sin(theta);
        
        var R = Matrix.toIdentity();
        R[0] = c;
        R[1] = s;
        R[4] = -s;
        R[5] = c;
        
        AT = Matrix.multiply4x4(AT, R);
    }
}