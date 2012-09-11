function Vector2(vec) {
    this.x = typeof vec === 'undefined' ? 0 : vec.x
    this.y = typeof vec === 'undefined' ? 0 : vec.y
    
    this.setTo = function(vec) {
        this.x = vec.x
        this.y = vec.y
    }
    
    this.add = function(vec) {
        return new Vector2({
            x: this.x + vec.x, 
            y: this.y + vec.y
        })
    }
    
    this.sub = function(vec) {
        return new Vector2({
            x: this.x - vec.x,
            y: this.y - vec.y
        })
    }
    
    this.mul = function(vec) {
        return new Vector2({
            x: this.x*vec.x,
            y: this.y*vec.y
        })
    }
    
    this.div = function(vec) {
        return new Vector2({
            x: this.x/vec.x,
            y: this.y/vec.y
        })
    }
    
    this.dot = function(vec) {
        return this.x*vec.x + this.y*vec.y
    }
    
    this.dist = function(vec) {
        var xDist = vec.x - this.x
        var yDist = vec.y - this.y
        
        return Math.sqrt(xDist*xDist + yDist*yDist)
    }
    
    this.norm = function() {
        var length = this.length()
        return this.div(length, length)
    }
    
    this.length = function() {
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
    
    this.lengthSq = function() {
        return this.x*this.x + this.y*this.y
    }
    
    this.lerp = function() {
        // TODO: implement this!
    }
    
    this.toString = function() {
        return "[" + this.x + ", " + this.y + "]"
    }
}