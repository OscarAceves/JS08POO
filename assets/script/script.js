/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

        Clase: Plantillas parar crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias(materialización) de estet tipo de objetos


*/

// //Mostrar un objeto similar a este
// let Felipe = {
//     nombre : "Felipe",
//     apellido : "Maqueda",
//     edad : 31,
//     email : "example@mail.com",
//     telefono : "3315744876",
// }


//Creando primera clase

class persona {

    // 1. Propiedades o atributos de la clase en forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    // 3. Definir un constructor que tomará los atributos como "material" para la instancia o creación del objeto
    //EL constructor es una función especial, cuya función es la de construir o instanciar objetos
    //Al pasar los atributos como parametros, es importante cuidar el orden como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }



    // 2. Metodos o comportamientos (funciones)
    //Para definir los metodos del objeto, ya no se utiliza la palabra "function" (porque estan dentro de una clase)
    hablar(){
        console.log("Hola, estoy hablando...");
    }//Cierre de método hablar

    dormir(){
        console.log("Zzzzzzzz...");
    }//Cierre de método dormir

    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
    }//cierre de método mostrarInfo

}//Cierre de clase persona


/*Instancia de objetos del tipo persona

Sintaxis básica de una instancia

variable nombreObjeto = palabra reservada new nombreClase(parametros o atributos)
*/

let persona1 = new persona("Oscar", "Aceves", 31, "example@mail.com", "3315744876");
let persona2 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");
let persona3 = new persona("Fatima", "Fernandez", 25, "fatimaexample@mail.com", "12345678890");

//Imprimir objeto completo
console.log(persona1);

//imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido, persona1.edad);

//Invocar el método del objeto
persona1.dormir();
persona2.mostrarInfo()



/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones al código

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción
*/

//Crear una nueva clase para aplicar la herencia (extends)

class paciente extends persona{

    // 1. Definición de atributos o propiedades
    assignedDoctor = ""; //nombre del doctor que atiende
    medicalHistory = ""; //si o no el historial
    alergies = ""; //alergias existentes


    // 3. Generación de constructor
    constructor (nombre, apellido, edad, email, telefono, assignedDoctor, medicalHistory, alergies){
        super (nombre, apellido, edad, email, telefono); //super indica que trae información de la clase superior
        this.assignedDoctor = assignedDoctor;
        this.medicalHistory = medicalHistory;
        this.alergies = alergies;
    }

    // 2. Metodos
    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.assignedDoctor);
        console.log("Historial médico: " , this.medicalHistory);
        console.log("Alergias: " , this.alergies);
    }

}

//Instancia de un paciente
let paciente1 = new paciente("Eduardo", "Lopez", 31, "example@mail.com", "3315744876", "Dr. Simi", "No", "Penicilina");


//Imprimir objeto paciente
console.log(paciente1);

//Uso del método
paciente1.mostrarInfo();




//Diferencias entre un objeto literal (normal), y un objeto tipo JSON


//Todas las claves y los valores van dentro de comillas "" en un objeto JSON
//Envío de información a servidores
let objetoJSON ={
    "nombre": "Eduardo", 
    "apellido": "Lopez", 
    "edad": 31, 
    "email": "example@mail.com", 
    "telefono": "3315744876", 
    "assignedDoctor": "Dr. Simi", 
    "medicalHistory": "No", 
    "alergies": "Penicilina"
}

//Tratar la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Eduardo", 
    apellido: "Lopez", 
    edad: 31, 
    email: "example@mail.com", 
    telefono: "3315744876", 
    assignedDoctor: "Dr. Simi", 
    medicalHistory: "No", 
    alergies: "Penicilina"
}




/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
        - nombre
        - nota

    Métodos:
        - Constructor
        - Metodo evaluación (Aprueba o no)
        - Metodo imprimirInfo(nombre y nota)

    Lógica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, está reprobado)
        - Recuperación de la información por medio de un prompt
        - Generar 3 instancias para probar el código (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)
*/

// Creación de la clase (3 pasos)

class alumno {

    // 1. Atributos o propiedades
    nombre;
    nota;

    // 3. Constructor donde se le da identidad al objeto (this)
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }


    // 2. Métodos
    // Metodo general, un método que no requiere personalización porque aplica para cualquier objeto
    evaluacion(nota){
        //Condicion para saber si está aprobado o reprobado
        if(nota >= 6){
            console.log("Aprobado")
        }else{
            console.log("Reprobado")
        }

    }

    imprimirInfo(){
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);

    }
}



//Instancias de alumno
let alumno1 = new alumno ("Felipe", 4);
let alumno2 = new alumno ("Ale", 8);
let alumno3 = new alumno ("Oscar", 6);


//Invocación de metodos
alumno1.evaluacion(alumno1.nota);
alumno2.evaluacion(alumno2.nota);
alumno3.evaluacion(alumno3.nota);
