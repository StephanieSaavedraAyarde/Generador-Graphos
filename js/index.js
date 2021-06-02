//Graphos
var nodeIdCounter = 0;
var edgesIdCounter = 0;

var nodes = new vis.DataSet([]);

var edges = new vis.DataSet([]);

var container = document.getElementById("mynetwork");

var data = {
    nodes: nodes,
    edges: edges,
};

var options = {
  width: "100%",
  height: "400px",
  manipulation: {
    addNode: function (nodeData, callback) {
        añadirNodo(nodeData, callback)
    },

    editNode: function (nodeData, callback){
      editarNodo(nodeData, callback)
    },
    addEdge: function (edgeData, callback) {
      añadirEnlace(edgeData, callback)
    },
    editEdge: function (edgeData, callback){
      editarEnlace(edgeData, callback)
    },
    "initiallyActive": true
  },

  nodes: {
    color: "#014680",
    "shape": "box",
    font: {
      color: "white",
      size: 18,
    },
  },

  edges: {
    color: {
      color: "#014680",
      highlight: "#014680",
      hover: "#014680",
    },

    arrows: {
      to: {
        enabled: true,
        type: "triangle",
      },
    },

    font: {
      color: "#014680",
      size: 15,
      align: "horizontal",
      background: "none",
      strokeWidth: 0,
      align: "top",
    },

    "smooth": {
      "type": "vertical",
      "roundness": 0
    }
  },

  "interaction": {
    "navigationButtons":true,
    "hover": true,
  },

  "physics": {
    "enabled": false
  }
};

const añadirNodo = (nodeData, callback) => {
    if (nodes.length === 0) {
        nodeIdCounter = 0;
    }
    var label = prompt("Nombre del nodo:");
    
    nodeData.id = nodeIdCounter++;
    nodeData.label = label;
    nodeData.title = "Nodo " + label;
    callback(nodeData);
}

const editarNodo = (nodeData, callback) => {
  var label = prompt("Nuevo nombre del nodo:");
  nodeData.label = label;
  nodeData.title = "Nodo " + label;
  callback(nodeData);
}

const añadirEnlace = (edgeData, callback) => {
    if (edges.length === 0) {
        edgesIdCounter = 0;
    }

    if (edgeData.from === edgeData.to) {
        var r = confirm("Esta seguro de querer unir el mismo nodo");
        if (r === true) {
            var label = prompt("Ingrese el valor del atributo: ");
            edgeData.id = edgesIdCounter++;
            edgeData.label = label;
            callback(edgeData);
        }
    } 
    else {
        var label = prompt("Ingrese el valor del atributo: ");
        edgeData.id = edgesIdCounter++;
        edgeData.label = label;
        callback(edgeData);
    }
}

const editarEnlace = (edgeData, callback) => {
    var label = prompt("Ingrese el nuevo valor del atributo: ");
    edgeData.label = label;
    callback(edgeData);
}

//Matriz de relacion

function MostrarMatriz () {
    var arrayNodos = [];
    var arrayEnlaces = [];
    let aux = 0;

    if (edges.length !== null) {
        while (aux < edges.length) {
          const nodes = edges.get(aux).from.toString() + "-" + edges.get(aux).to.toString(); //Obtiene el id del nodo origen y destino
          const values = edges.get(aux).label; //Obtiene el valor entre dos nodos
          console.log("Nodos");
          console.log(nodes);
          console.log("Valores");
          console.log(values);
          arrayNodos.push(nodes);
          arrayEnlaces.push(values);
          aux++;
        }

      aux = 0;
      var matrix = Array(nodes.length).fill(0).map(() => Array(nodes.length).fill(0)); //Construccion bruta de la matriz
      while (aux < arrayNodos.length) {
        var split = arrayNodos[aux].split("-");
        matrix[parseInt(split[1])][parseInt(split[0])] = arrayEnlaces[aux];
        aux++;        
      }

      var Filas = [];
      var Columnas = [];

      // Suma de filas y columnas
      for (let i = 0; i < matrix.length; i++) {
          var sumaFilas = 0;
          var sumaColumnas = 0;
          for (let j = 0; j < matrix.length; j++) {
              sumaFilas += parseFloat(matrix[i][j]);
              sumaColumnas += parseFloat(matrix[j][i]);
          }
          Filas.push(sumaColumnas);
          Columnas.push(sumaFilas);
      }

      var matriz = ",";
      aux = 0;
      while (aux < nodes.length) {
        matriz += nodes.get(aux).label + ",";
        aux++;
      }
      matriz += "|";

    // Construir la matriz e insertar resultantes de la sumatoria
      
      for (let i = 0; i < matrix.length; i++) {
        matriz += nodes.get(i).label + ",";
        for (let j = 0; j < matrix.length; j++) {
          matriz += matrix[j][i] + ",";
          
        }
        matriz += Filas[i] + "|";
      }

      aux = 0;
      matriz += ",";
      while (aux < Columnas.length) {
        matriz += Columnas[aux] + ",";
        aux++;
        
      }
    }
    console.log(matriz);
    toMatrix(matriz);
}

const toMatrix = (matriz) => {
  let aux = Array(nodes.length +2).fill(0).map(() => Array(nodes.length +2).fill(0));

  let filas = matriz.split("|");

  for(let i=0; i<filas.length; i++){
    let columnas = filas[i].split(",");
    console.log(columnas);

    for(let j=0; j<columnas.length; j++){
      aux[i][j] = columnas[j];
    }
    aux[0][columnas.length-1] = "SUMATORIA";
  }
  aux[filas.length-1][0] = "SUMATORIA";
  aux[0][0] = "NODOS";
  

  tablx(aux);
}

const tablx = (datos) =>{
  var tabla = document.getElementById("matrizFinal");

  var cuerpo = document.createElement("tbody");

  tabla.innerText = "";

  datos.forEach(function(datosFilas){
      var fila = document.createElement("tr");
    
    datosFilas.forEach(function(data){

      var celda = document.createElement("th");
  
      celda.appendChild(document.createTextNode(data));
      fila.appendChild(celda);
      
    });
    cuerpo.appendChild(fila);
  })
  
  tabla.appendChild(cuerpo);
}

//Guardar archivo
function Arraydenodos() {
  var array1=[];
  var array2=[];
  const s = nodes.forEach((nodo) => {
    array1.push({id:nodo.id, label: nodo.label});
  });
  const n = edges.forEach((linea) => {
     array2.push({from: linea.from, to:linea.to, id:linea.id, label: linea.label});
 });
 var data1={
   node:array1,
   edge:array2,

 };

  return(data1);
} 

function descarga(){
  filename=prompt("Ingrese el nombre del archivo: ");

  let file=new Blob([JSON.stringify(Arraydenodos())],{type:"aplication/.json"});
  let a=document.createElement("a");
  a.href= URL.createObjectURL(file);
  a.download= filename+'.json';
  a.click();
}

//Recuperar
var network2=null;

function cargar(dn,de){
  nodeIdCounter ==dn[dn.length-1]["id"];
  nodeIdCounter ++;
  nodes= new vis.DataSet(dn);
  edges=new vis.DataSet(de);
  edgesIdCounter=de[de.length-1]["id"];
  edgesIdCounter++;
  data={
    nodes: nodes,
    edges: edges,
  };
network2= new vis.Network(container,data,options);
}

if(network2!=null){
  network=network2;
}

function leerArchivo(e){
  var archivo= e.target.files[0];
  if(!archivo){
    return;
  }
 var lector= new FileReader();
 lector.onload= function(e){
   var contenido= e.target.result;
    gf=JSON.parse(contenido);
   cargar(gf["node"],gf["edge"]);
 }
 lector.readAsText(archivo);
}

function mostrar(contenido){
  var gf
  gf=JSON.parse(contenido);
  console.log(gf["node"]);
}

document.getElementById('import').addEventListener('change', leerArchivo, false);

//Limpiar area
function Limpiar() {
  location.reload();
}

var network = new vis.Network(container, data, options);
