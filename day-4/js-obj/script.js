// empty person obj
const person = {

};
//add two properties to your obj
person.firstName = "Hilla";
person.lastName = "Meir";
// add another property that is a function which console log 
person["greet"] = function() { console.log("Hi, there!!"); };
console.log(`first name: ${person.firstName} last name: ${person.lastName}`);
person.greet();
person.adresses = { home: "67 Hahezel St.", work: "13 Hazerem St" };
console.log(person);
person.adresses.home = "1 Ehad Haham St";
//console.log(person);

//be create - nested object 
const dog = {
    type: "Buldog",
    owner: person,
    color: "Pink",
    age: 2,
    nickName: "Fufu",
    greet: function() { console.log("Wuf Wuf! 8-)") }
};

dog.vaccinationBook = [
    ["Kalevt", 2017],
    ["Zahavet", 2016]
];
dog.greet();
console.log(dog);

//individual exersice 1

//individual exersice 2

//individual exersice ext 1 

//individual exersice ext 2