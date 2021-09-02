"use strict";
var elementos = [];
var opciones = 0;
do {
    opciones = Number(prompt("\n" +
        "\n 1.- Crear la cola" +
        "\n 2.- Ingresar elemento(enqueue)" +
        "\n 3.- Sacar elemento (dequeue)" +
        "\n 4.- Cuantos elementos hay en la cola: " +
        "\n 5.- Imprimir toda la cola" +
        "\n 6.- Salir \n"));
    switch (opciones) {
        case 1: //Crear
            var nombreCola = prompt("\nIngrese el nombre de la Cola: ");
            console.log("se creo la  " + nombreCola);
            console.log("se creo con exito");
            if (nombreCola) {
                opciones;
            }
            else {
                opciones;
            }
            break;
        case 2: //enqueue
            var nuevo = prompt("Ingrese un elemento a la Cola");
            elementos.push(nuevo);
            console.log("se ingreso: " + elementos);
            if (elementos) {
                opciones;
            }
            else {
                opciones;
            }
            break;
        case 3: //dequeue
            var elim = elementos.shift();
            console.log("se elimino el elemento: " + elim);
            if (elementos) {
                opciones;
            }
            else {
                opciones;
            }
            break;
        case 4: //PEEK
            console.log(elementos.length);
            if (opciones) {
                opciones;
            }
            else {
                opciones;
            }
            break;
        case 5: //Imprimir
            console.log(elementos);
            if (elementos == null)
                console.log("Hey inicializala Cola primero");
            else
                console.log(elementos.toString());
            break;
        case 6:
            var b = prompt("seguro que quieres salir ..?? SI o NO \n" + "\n 1. Si" + "\n 2. NO");
            this.elementos.push(b);
            break;
    }
} while (opciones != 6);
console.log("Gracias por usar el programa");
var Queue = /** @class */ (function () {
    function Queue() {
        this.cola = [];
    }
    Queue.prototype.crearPCola = function () {
        this.cola = [];
        console.log("\nLa pila" + this.cola + "se ha creado con exito");
        return opciones;
    };
    Queue.prototype.imprimirCola = function () {
        if (elementos == null)
            console.log("Hey inicializala pila primero");
        else
            console.log(+elementos.toString());
    };
    Queue.prototype.peekCola = function () {
        if (this.elementos == null)
            console.log("Hey inicializala pila primero");
        else {
            console.log("Peek a la pila" + elementos.peekBack());
            console.log("Sacaste un elemento.");
        }
        return elementos;
    };
    Queue.prototype.popCola = function () {
        this.cola = [];
        if (this.Nodo.elementos.length > 0) {
            console.log("\nLa pila" + elementos + "ha sido eliminado con exito");
            return elementos.pop();
            ;
        }
        else {
            return null;
        }
    };
    Queue.prototype.salir = function () {
        if (this.elementos == null)
            console.log("Hey inicializala pila primero");
        else {
            if (elementos.isEmpty())
                elementos == null;
        }
        return this.elementos;
    };
    return Queue;
}());
