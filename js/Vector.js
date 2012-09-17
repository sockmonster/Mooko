function Vector2(vec) {
    /* ******** ******** ******** */
    /*      PRIVATE SECTION       */
    /* ******** ******** ******** */
    // empty!
    
    /* ******** ******** ******** */
    /*       PUBLIC SECTION       */
    /* ******** ******** ******** */
    this.x = typeof vec === 'undefined' ? 0 : vec.x;
    this.y = typeof vec === 'undefined' ? 0 : vec.y;
    
    Vector2.prototype.setTo = function(vec) {
        this.x = vec.x;
        this.y = vec.y;
    };
        
    Vector2.prototype.add = function(vec) {
        return new Vector2({
            x: this.x + vec.x, 
            y: this.y + vec.y
        });
    };
        
    Vector2.prototype.subtract = function(vec) {
        return new Vector2({
            x: this.x - vec.x,
            y: this.y - vec.y
        });
    };
        
    Vector2.prototype.multiply = function(vec) {
        return new Vector2({
            x: this.x*vec.x,
            y: this.y*vec.y
        });
    };
        
    Vector2.prototype.divide = function(vec) {
        return new Vector2({
            x: this.x/vec.x,
            y: this.y/vec.y
        });
    };
        
    Vector2.prototype.dotProduct = function(vec) {
        return this.x*vec.x + this.y*vec.y;
    };
        
    Vector2.prototype.distanceTo = function(vec) {
        var xDist = vec.x - this.x;
        var yDist = vec.y - this.y;
        
        return Math.sqrt(xDist*xDist + yDist*yDist);
    };
        
    Vector2.prototype.normalised = function() {
        var length = this.length();
        return this.div(length, length);
    };
        
    Vector2.prototype.length = function() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    };
        
    Vector2.prototype.lengthSquared = function() {
        return this.x*this.x + this.y*this.y;
    };
        
    Vector2.prototype.lerp = function(delta) {
        // TODO: implement this!
    };
        
    Vector2.prototype.toString = function() {
        return "[" + this.x + ", " + this.y +"]";
    };
}