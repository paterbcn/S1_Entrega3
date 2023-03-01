/*Invoca la primera función getEmployee() y después getSalary() anidando la ejecución de las dos 
promisas de forma que se devuelva por la consola el nombre del empleado/a y su salario.*/

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

const getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
        var employee  = employees.find(obj => obj.id == id)                                    
         resolve (employee)
     
    } else {reject("el id no se encuentra en la base") }
             })}

var getSalary = (employe)=> new Promise ((resolve , reject)=>{
                const name = employe.name
                const sal = salaries.find(ob => ob.id == employe.id ).salary
                resolve(`Nombre: ${name} , Salario: ${sal}`)})             

getemployees(2).then((obj)=>
                getSalary(obj))
                .then(msg => console.log(msg))
                .catch(msg => console.log(msg))
