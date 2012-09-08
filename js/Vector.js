function Vector2(vec) {
    this.x = vec.x
    this.y = vec.y
    
    this.add = function(vec) {
        this.x += vec.x
        this.y += vec.y
        
        return this
    }
    
    this.sub = function(vec) {
        this.x -= vec.x
        this.y -= vec.y
        
        return this
    }
    
    this.toString = function() {
        return "[" + this.x + ", " + this.y + "]"
    }
}