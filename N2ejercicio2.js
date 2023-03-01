/*Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


/*
var getSalary = (employe)=> {var sal = salaries.find(ob => ob.id == employe.id);    
                                        return sal.name }
 
function test (employe) {var sal = salaries.find(ob => ob.id == employe.id )
console.log(`el salario de ${employe.name} es de ${sal.salary}`)  }                                                 

function test (employe) {var sal = salaries.find(ob => ob.id == employe.id )
                            return sal.salary  }   
*/

//function test (employe) {return salaries.find(ob => ob.id == employe.id ).salary  }

var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                             resolve(salaries.find(ob => ob.id == employe.id ).salary)}) 

getSalary (employees[0]).then(msg => console.log(msg))
