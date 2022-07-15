Function.prototype.inherits = function(parent) {
    let that = this;
    //that => Cat
    //parent => Animal

    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    that.prototype = new Surrogate();
    that.prototype.constructor = that;
}



function Animal (name) {
    this.name = name;
};

Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
};

function Cat(name) {
    this.name = name;
}

Cat.inherits(Animal);
Cat.prototype.meow = function () {
    console.log('Meow!');
};

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();