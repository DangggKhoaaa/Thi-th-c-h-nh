class Animal{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return console.log(`Tên: ${this.name} có cân nặng: ${this.weight}`);
    }
    
}
// let animals = new Animal("dog", "10")

// animals.setName = ("pig");
// console.log(animals.getName());
// animals.setWeight = ("50");
// console.log(animals.getWeight());

// animals.toString = ("pig" + "50");



let objAnimal1 = {
    name: "Elephant",
    weight: 45.6
}

objAnimal1.toString();

let objAnimal2 = {}



console.log(objAnimal2.name);






