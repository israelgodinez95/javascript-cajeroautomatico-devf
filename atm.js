///////////////////////////////ATM Javascript DevF. Israel Godinez Bravo

//Arreglo 'cuentas' con 3 elementos de tipo objeto literal que a su vez cuentan con 3 variables
var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

//Obteniendo el contenido HTML 
const botonInicio = document.getElementById('botonInicio');
const personaList = document.querySelectorAll('#menu1 .persona');
const operacionList = document.querySelectorAll('#menu2 .ops');

//addEventListener en el boton de Inicio para activar el menu 1
botonInicio.addEventListener('click', function () {
    botonInicio.style.display = 'none';
    menu1.style.display = 'flex';
    menu2.style.display = 'none';

});

//una vez activo el menu 1
//forEach + addEventListener en cualquier persona (cuenta) para activar el menu 2 (operaciones)
personaList.forEach(function (clickDos) {

    clickDos.addEventListener('click', function () {

        let cuenta = 0;
        if (clickDos == document.getElementById("mali")) { cuenta = 1; }
        if (clickDos == document.getElementById("gera")) { cuenta = 2; }
        if (clickDos == document.getElementById("maui")) { cuenta = 3; }

        // flagCuenta modifica la etiqueta p del menu 2 en el documento HTML para dejar un valor de la cuenta que se eligio inicialmente
        let flagCuenta = document.getElementById("cuenta2");
        flagCuenta.innerHTML = (cuenta);

        //la variable password para pedir una contraseña al usuario por el teclado, no avanza hasta que la contraseña sea correcta
        var password = prompt("Bienvenid@ " + cuentas[cuenta - 1].nombre + ". Ingresa tu contraseña:");

        if (password == cuentas[cuenta - 1].password) {
            alert("Contraseña correcta!. Ingreso exitoso a la cuenta de " + cuentas[cuenta - 1].nombre + ".");
        } else {
            do {
                password = prompt("Contraseña incorrecta. Ingresa nuevamente la contraseña:");
            } while (password != cuentas[cuenta - 1].password);
            alert("Contraseña correcta!. Ingreso exitoso a la cuenta de " + cuentas[cuenta - 1].nombre + ".");
        }

        //para mostrar solamente el menu 2
        botonInicio.style.display = 'none';
        menu1.style.display = 'none';
        menu2.style.display = 'flex';
        
        //para desplegar el nombre despues de seleccionar e ingresar la cuenta correctamente
        let nombreCuenta=document.getElementById("nombreCuenta");
        nombreCuenta.style.display='flex';
        nombreCuenta.innerHTML="Bienvenid@ "+cuentas[cuenta-1].nombre;

    });

});

//una vez activo el menu2
//forEach + addEventListener en cualquier persona (cuenta) para acceder a las operaciones de saldo, ingresar y retirar
operacionList.forEach(function (operacion) {

        operacion.addEventListener('click', function () {

            //crea la variable movimiento para al hacer click, saber que operacion hacer
            let movimiento = 0;
            if (operacion == document.getElementById("saldo")) { movimiento = 1;}
            if (operacion == document.getElementById("ingresar")) { movimiento = 2;}
            if (operacion == document.getElementById("retirar")) { movimiento = 3;}
            
            //extraigo de la etiqueta cuenta2 de HTML el numero de cuenta, para tenerlo en la variable cuenta
            let cuenta = document.getElementById("cuenta2");
            cuenta = cuenta.textContent;

            
            

            //movimiento 1 de consultar saldo
            if (movimiento == 1) {
                alert("Su saldo es de " + cuentas[cuenta - 1].saldo);
                
            //movimiento 2 de ingresar $
            } else if (movimiento == 2) {
                var ingreso = prompt("Que catidad desea ingresar?");
                ingreso = Number(ingreso);
                let nuevoSaldo=cuentas[cuenta - 1].saldo+ingreso;
                
                //restringimos el limite superior a 990$
                if(nuevoSaldo>990){
                    alert("Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10, el monto maximo que puede ingresar es de:" + (990-cuentas[cuenta - 1].saldo));
                    
                } else {
                    cuentas[cuenta - 1].saldo += ingreso;
                    alert("El monto a ingresar es de " + ingreso + ". Su nuevo saldo es: " + cuentas[cuenta - 1].saldo);
                }
    
                
            //movimiento 3 de ingresar $
            } else if (movimiento == 3) {
                var retiro = prompt("Que catidad desea ingresar?");
                retiro = Number(retiro);
                let nuevoSaldo2=cuentas[cuenta - 1].saldo-retiro;
                
                //restringimos el limite inferior a 10$
                if(nuevoSaldo2<10){
                    alert("Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10, el monto maximo que puede retirar es de:" + (cuentas[cuenta - 1].saldo - 10));
                } else {
                    cuentas[cuenta - 1].saldo -= retiro;
                    alert("El monto a ingresar es de " + ingreso + ". Su nuevo saldo es: " + cuentas[cuenta - 1].saldo);
                }

                
               
            }

        });
    
});

    