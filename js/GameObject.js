/** Notes : check w/ Oli
 * 
 * Set parent null for root node.
 * 
 */

var GameObject = function(name, parent) 
{
    this.Name = name;
    this.Parent = parent;   // a GameObject (node)
    this.Children = [];     // a list of GameObjects
    this.LocalTransform = new Transform();
    this.WorldTransform = new Transform(); 
    if(this.Parent !== null)
        this.Parent.addChild(this);
    
    this.getLocalTransform = function(){
        return this.LocalTransform;
    };
    this.getWorldTransform = function(){
        return this.WorldTransform;  
    };
    this.setParent = function(parent) {
        this.Parent = parent; 
    };
    
    this.setChildren = function(children) {
        this.Children = children;
    };
    
    this.addChild = function(child) {
        // TODO: check 'child' is not any of ancestors
        if(child != this && child != this.Parent)
            this.Children[this.Children.length] = child;
    };
    
    this.hasChild = function() {
        return ( this.Children.length > 0 );
    };
    
    this.hasParent = function() {
        return ( this.Parent !== null );
    };
    
    /** findAncestorByName(name) : searches recursively up through tree until named node found */  
    this.findAncestorByName = function(name) {
        if( this.hasParent() ) {
            if( this.Parent.Name === name )
                return this.Parent;
            else
                this.Parent.findAncestor(name);
        }
    };
    
    this.findChildByName = function(name) {
        // TODO: implement findChildByName
    };
    
};

