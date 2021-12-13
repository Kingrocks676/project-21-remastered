class Ground
{
    constructor(x,y,w,h)
    {
        let options = 
        {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(World, this.body);
    }
    show()
    {
        var pos = this.position;
        push();
        rectMode(CENTER);
        stroke(225);
        fill(127)
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}