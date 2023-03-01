/*Donats els objectes employees i salaries, crea una arrow function 
getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.*/

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


const getemployees = (id)=> {return new Promise((resolve,reject)=>{
                                   if  (employees.findIndex(index=> index.id == id) != -1){
                                        var employee  = employees.find(obj => obj.id == id)
                                        var esalary = salaries.find(obj => obj.id == id)
                                        resolve (`nombre: ${employee.name} ,                                                salario:${esalary.salary}`)
                                    
                                   } else {reject("el id no se encuentra en la base") }
                                            })}



const getemployees = (id)=> {return new Promise((resolve,reject)=>{
                                   if  (employees.findIndex(index=> index.id == id) != -1){var employee  = employees.find(obj => obj.id == id)                                    
                                        resolve (id)
                                    
                                   } else {reject("el id no se encuentra en la base") }
                                            })}

*/

const getemployees = (id)=> {return new Promise((resolve,reject)=>{
    if  (employees.findIndex(index=> index.id == id) != -1){
        var employee  = employees.find(obj => obj.id == id)                                    
         resolve (employee)
     
    } else {reject("el id no se encuentra en la base") }
             })}

