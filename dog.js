var chalk = require('chalk');
function dog(name){
	this.name = name;
	this.stomach = [];
	dog.prototype.eat = function(cat){
		this.stomach.pust(cat);	}
	dog.prototype.sayHi = function(){
		console.log('hello bạn'+chalk.red(this.name));

	}
}
module.exports = dog;