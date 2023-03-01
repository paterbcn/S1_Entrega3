/*Crea una funció que retorni una Promise que invoqui la funció resolve() 
o reject() que rep. Invoca-la passant-li les dues funcions de manera que 
imprimeixin un missatge diferent depenent de si la Promise es resol o */




const valId = function (id,base) {return new Promise((resolve, reject)=>{
                                if (base.includes(id)){
                                    resolve(`id: ${id} aprobado`)
                                }else reject(`id: ${id} no aprobado`)})}
                                
                            
                            

 
 const idArrBase =[1,2,3,4,5]

 valId(5,idArrBase).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))







