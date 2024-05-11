/* Funcion labda aqui se lo nombra con "CONS"*/

const sumar = (idNum1, idNum2) => {
  console.log("SUMAR");
  console.log(idNum1);

  var num1 = parseInt(document.getElementById(idNum1).value);
  var num2 = parseInt(document.getElementById(idNum2).value);

  var total = num1 + num2;
  console.log(total);
  document.getElementById("idResultado").innerText = total;
};
/* ********************************** */
const restar = (idNum1, idNum2) => {
  console.log("RESTAR");

  var num1 = parseInt(document.getElementById(idNum1).value);
  var num2 = parseInt(document.getElementById(idNum2).value);

  var total = num1 - num2;
  console.log(total);
  document.getElementById("idResultado").innerText = total;
};

/* ********************************** */
const multiplicar = (idNum1, idNum2) => {
  console.log("MULTIPLICAR");
  console.log(idNum1);

  var num1 = parseInt(document.getElementById(idNum1).value);
  var num2 = parseInt(document.getElementById(idNum2).value);

  var total = num1 * num2;
  console.log(total);
  document.getElementById("idResultado").innerText = total;
};

/* ********************************** */
const dividir = (idNum1, idNum2) => {
  console.log("DIVIDIR");
  console.log(idNum1);

  var num1 = parseInt(document.getElementById(idNum1).value);
  var num2 = parseInt(document.getElementById(idNum2).value);

  var total = num1 / num2;
  console.log(total);
  document.getElementById("idResultado").innerText = total;
};

/* ********************************** */
function agregarElemento() {
  document.getElementById("idDivision").innerHTML = "<button>NUEVO</button>";
}
function quitarElemento() {
  document.getElementById("idDivision").innerHTML = "";
}

/* ********************************* */
function conceptosJS() {
  /* TIPOS DE DATOS EN JAVASCRIPT
    let, var, cons  ----> Todos son para almacenar tipos de datos
    cons : Para valores los cuales NO van a ser modificados*/

  const IVA = 12;
  console.log(IVA);
  /*
    IVA=15
    console.log(IVA)
    Nose puede sobre escribir su valor
    */

  /* var esta quedando en desuso porque let esta mejor optimizado en memoria */
  var nombre = "Diego";
  console.log(nombre);

  nombre = "Alexander";
  console.log(nombre);

  /*let esta mejor en rendimiento que var */
  let apellido = "Rivas";
  console.log(apellido);

  nombre = "Haro";
  console.log(apellido);

  /* ********************************* */
  /* DECLARACION DE ARREGLOS*/
  const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  console.log(diasSemana);
  console.log(diasSemana[0]);
  console.log(diasSemana[1]);
  console.log(diasSemana[5]);

  diasSemana[5] = "sabado";

  console.log(diasSemana[5]);

  diasSemana.push("domingo");

  /*unshift --- > GUARDA MI ELEMENTO A LINICIO */
  diasSemana.unshift("dias");

  console.log(diasSemana);

  /*
    Lo que existe cuando no existe un ELEMENTO existe el """" UNDIFINDEND"
    */

  /* ************************************************
   ***********EJEMPLO 2  ************ */
  const numerosPares = [2, 4, 5, 6, 8, 10];
  console.log(numerosPares);

  const numerosImpares = [1, 3, 5, 7, 9];

  const numerosCompletos = numerosPares.concat(numerosImpares);
  console.log(numerosCompletos);

  /*  USO DE  RECORRER MIS ARREGLOS */
  for (const dia of diasSemana) {
    console.log(dia);

    if (dia == "Viernes") {
      console.log("VAMO.. A MIMIR YA ES FIN DE SEMANA");
    }
  }

  if (diasSemana[8] === undefined) {
    console.log("Es infedinido: NO EXISTE");
  } else {
    console.log("Si tiene un valor");
  }

  /* DECLARACION DE OBJETOS */

  const estudiante = {
    nombre: "Diego",
    apellido: "Rivas",
    edad: 27,
    genero: "M",
    ciudadNa: "Quito",
    fechaNa: "1997-01-08",
  };

  console.log(estudiante);
  console.log(estudiante.apellido);

  estudiante.nombre = "Alexander";
  console.log(estudiante);

  /******************************************** */
  /* EJEMPLO 2 DE ONBJETOS */
  const profesor = {
    nombre: "Jaime",
    apellido: "Salvador",
    edad: 47,
    genero: "M",
    ciudadNa: "Quito",
    fechaNa: "1967-07-18",

    direccion: {
      callePrincipal: "Av America",
      calleSecundaria: "La Gasca",
      numeracion: "Oe3-27",
      barrio: "Sin Nombre",
    },
  };

  /* Imprime mi objeto */
  console.log(profesor);

  /* Acceso a los valores internos de direeccion */
  console.log("direccion " + profesor.direccion.numeracion);

  /* *************************************************** */
  /*ARREGLO DE OBJETOS  */
  const estu1 = {
    nombre: "Dennisse",
    apellido: "Andrade",
  };

  const estu2 = {
    nombre: "Anahi",
    apellido: "Marin",
  };

  const estu3 = {
    nombre: "Danna",
    apellido: "Haro",
  };

  const estu4 = {
    nombre: "Fatima",
    apellido: "Rivas",
  };

  const estudiantes = [estu1, estu2, estu3, estu4];
  console.log(estudiantes);
  console.table(estudiantes);

  /* Para acceder a un estudiante en especifico e IMPRIO EL OBJETO */
  console.log(estudiantes[1]);
  console.log(estudiantes[1].apellido);

  estudiantes[1].apellido = "Cambio APELLIDO";

  console.table(estudiantes);

  /* *****************************************************************
    ARREGLO DE PROFESORES con atributos Complejos: */

  const profesores = [
    { nombre: "Pablo", edad: 26 },
    { nombre: "Kevin", edad: 27 },
  ];
  console.table(profesores);

  /* ********************************************************************
   **********METODO POP: ELIMINA UN ELEMENTO DE LA LISTA */
  console.log("POP: SACA EL ULTIMO ELEMENTO DEL ARREGLO");
  var prof = profesores.pop();
  console.log(prof);
  console.table(profesores);

  /*   Desestructuracion de ARREGLOS */
  const diasSemanaDesustructurar = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
  ];
  const [dia1, dia2, dia3, dia4, dia5] = diasSemanaDesustructurar;
  console.log(dia2);

  console.table(diasSemanaDesustructurar);

  /* ********************************* */
  // Aqui van directamente por la POSICION
  const [d1, d2, d3, d4, d5] = [
    "Lunes - 1",
    "Martes - 2",
    "Miercoles - 3",
    "Jueves - 4",
    "Viernes - 5",
  ];
  console.log(d2);
  console.log(d5);

  /* *************************************************************************** */
  /* DESESTRUCTURACION DE OBJETOS */
  /* ************************************************************************* */
  const vehiculo = {
    marca: "Mazda",
    modelo: "BT-50",
    anio: "2014",
  };

  //CUIANDO voy a desestructurar Objetos uso llaves. {}
  // {} Aqui van lo que quiero desestructurar con sus nombres propios
  //No IMPORTA LA POSICION, sino se rige por el NOMBRE.

  const { marca, anio } = vehiculo;
  console.log(marca);
  console.log(anio);

  const { modelo } = {
    marca: "Toyota",
    modelo: "Prime",
    anio: "2022",
  };

  console.log(modelo);

  /*  DESESTRUCTURACION DE UN OBJETO, QUE TENGA UN ATRIBUTO COMPUESTO */
  const profesorDes = {
    nombreP: "Tamilo",
    apellidoP: "Carillo",
    edad: 54,
    generoP: "M",
    ciudadNa: "Ambato",
    fechaNa: "1971-09-28",

    direccionP: {
      callePrincipalP: "Av America",
      calleSecundariaP: "La Gasca",
      numeracionP: "Oe3-27",
      barrioP: "GASQUICA",
    },
  };

  /* IMPRESION DE DATOS */
  
  const { nombreP, apellidoP } = profesorDes;
  console.log(nombreP);
  console.log(apellidoP);
  

  /*DATOS INTERNOS */
  /*
  const{callePrincipal , barrio} = direccionP;
  console.log(barrio);

  */
 const {generoP,direccionP:{calleSecundariaP,barrioP}}=profesorDes;
console.log(barrioP);



  /* FIN */
}

/*REPASAR ARREGLOS CON ATRIBUTOS COMPLEJOS */
