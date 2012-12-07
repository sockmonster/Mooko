var Renderer = function() 
{    
    var m_rendererTransform = new Transform();
    /**
     * @param: a game object node
     */
    this.render = function(gameobject)
    {
        //alert("this.render was passed: " + gameobject.Name + ", Nchildren = " + gameobject.Children.length);
        m_rendererTransform.mul(gameobject.getLocalTransform());
        gameobject.getWorldTransform().setTo(m_rendererTransform);
        
        for(var i=0; i < gameobject.Children.length; i++)
            this.render(gameobject.Children[i]);
        
        //gameobject.Children.forEach(this.render);
    };
};