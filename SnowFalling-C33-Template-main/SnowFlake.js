class SnowFlake{
	constructor(x,y,)
	{
		var options={
			
			restitution :0.1,
            //friction :0.01,
            //density : 0.4,
			}
		
		this.radius = 5;
		this.image = loadImage("snow4.webp");
		this.body = Bodies.circle(x,y,5,options);
		World.add(world, this.body);
}

//updateSnowflake(){
	//if(this.snowflake.position.y>height){
	//	Matter.Body.setPosition(this.snowflake,{x:random(1400,displayWidth),y:random(0,800)});

	//}
//}

//snowfall(){
	//imageMode(CENTER);
	//image(this.img,this.snowflake.position.x,this.snowflake.position.y,this.radius+30,this.radius+30);
//}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
strokeWeight(4);
stroke("white");
image(this.image,0,0,90,90);
pop();
}
}

