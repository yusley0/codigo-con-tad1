var elementos = [];
var opciones = 0;
do {
    opciones = Number(prompt("\n" +
        "\n 1.- Crear la pila" +
        "\n 2.- Ingresar elemento(PUSH)" +
        "\n 3.- Sacar elemento (POP)" +
        "\n 4.- Metodo miron (PEEK)" +
        "\n 5.- Imprimir toda la pila" +
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
            var miron = elementos.peek(elementos.length - 1);
            console.log("el elemento en la cima: " + miron);
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
