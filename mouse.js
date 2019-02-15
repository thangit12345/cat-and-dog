function Mouse(name){
	this.name = name;
	this.dead = flase;
}
Mouse.prototype.die = function(){
	this.dead = true;
}
module.export = Mouse;