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
