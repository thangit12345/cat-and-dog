function Cat(){
	this.stomach = [];
	this.prototype.eat = function(mouse){
		this.stomach.pust(mouse);
	}
}
module.export = Cat;