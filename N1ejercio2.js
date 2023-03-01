/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi 
a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

const verificador =  (id,base , callback) => {
                        if (base.includes(id)){
                            callback("autorizado")
                        }else callback("no autorizado")}


                                


const idBase = [1,2,3,4,5]

verificador(10,idBase , msg=>console.log(msg))
                             