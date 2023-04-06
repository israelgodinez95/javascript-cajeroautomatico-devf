///////////////////////////////ATM Javascript DevF. Israel Godinez Bravo


var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

var continuar=1;

// console.log(cuentas[0]); despliega todo el objeto literal 
// que se encuentra en la posicion 0 del arreglo cuentas:  { nombre: "Mali", saldo: 200, password: 'helloworld' }
// console.log(cuentas[0].saldo); despliega: 200

console.log("1. Mali");
console.log("2. Gera");
console.log("3. Maui");

var cuenta=prompt("A que cuenta desea ingresar?");

function access(){
if(cuenta==1 || cuenta ==2 || cuenta==3){
    console.log("Biemvenid@ " + cuentas[cuenta-1].nombre + ".");
    var password=prompt("Ingrese la contraseña:");
    if(password==cuentas[cuenta-1].password){
        console.log("Contraseña correcta!");
        console.log("Ingresaste con exito a la cuenta de " + cuentas[cuenta-1].nombre + ".");
        return true;
    } else{
        do{
             console.log("Contraseña incorrecta. Intenta nuevamente");
             password=prompt("Ingrese la contraseña:");
        } while (password!=cuentas[cuenta-1].password);
        console.log("Contraseña correcta!");
        console.log("Ingresaste con exito a la cuenta de " + cuentas[cuenta-1].nombre + ".");
        
        return true;
    }
} else {
    console.log("Ingrese una cuenta valida.");
}
}
if(access()==true){


do{
    console.log("Que movimiento desea realizar?");
    console.log("1. Consultar saldo");
    console.log("2. Ingresar monto");
    console.log("3. Retirar monto");
    var operacion=prompt("Que movimiento desea realizar?");
    if(operacion==1){
        console.log("Su saldo es de " + cuentas[cuenta-1].saldo);
    } else if(operacion==2){
        var ingreso=prompt("Que catidad desea ingresar?");
        ingreso=Number(ingreso);
        cuentas[cuenta-1].saldo+=ingreso;
        console.log("El monto a ingresar es de " + ingreso +".Su nuevo saldo es: " + cuentas[cuenta-1].saldo);
    
    }
    continuar=prompt("Desea continuar? 1.si 2.no");
    continuar=Number(continuar);
}while (continuar==1)
}