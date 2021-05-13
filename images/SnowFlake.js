class snowflake{
	constructor(x,y,)
	{
		var options={
			
			restitution :0.1,
            friction :0.01,
            density : 0.4,
			}
		this.snowflake = Bodies.circle(x,y,5,options);
		this.radius = 5;
		this.img = addImage("snowflakeImg");
		World.add(world, this.snowflake);
}

updateSnowflake(){
	if(this.snowflake.position.y>height){
		Matter.Body.setPosition(this.snowflake,{x:random(1400,displayWidth),y:random(0,800)});

	}
}

snowfall(){
	imageMode(CENTER);
	image(this.img,this.snowflake.position.x,this.snowflake.position.y,this.radius+30,this.radius+30);
}
}

