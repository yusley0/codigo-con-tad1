
 class Queue{
    cola: any []=[]
    elementos: null | undefined;
     Nodo: any;
     static elementos: null;
     static Nodo: any;

     crearPCola(){
        this.cola =[]
        console.log("\nLa pila"+this.cola+ "se ha creado con exito")
        return opciones
}
  imprimirCola(): void{
    if(elementos==null)
    console.log("Hey inicializala pila primero");
    else
    console.log( +elementos.toString());
}
 peekCola(){
     if(this.elementos==null)
     console.log("Hey inicializala pila primero");
     else{
        console.log("Peek a la pila"+ elementos.peekBack());
        console.log("Sacaste un elemento.");
     }
     return elementos;
   }
    popCola(){ 
        this.cola= [] 
            if(this.Nodo.elementos.length>0){
                console.log("\nLa pila"+elementos+ "ha sido eliminado con exito")
                    return elementos.pop();
                   ;
                }else{
                    return null
                }
                }
salir(){
    if(this.elementos==null)
    console.log("Hey inicializala pila primero");
     else{     
        if(elementos.isEmpty())
        elementos==null;
}
return this.elementos;

} 

}