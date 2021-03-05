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

  "interaction": {
    "navigationButtons":true,
    "hover": true,
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
  },
};

var network = new vis.Network(container, data, options);

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

function MostrarMatriz () {
    var arrayNodos = [];
    var arrayEnlaces = [];
    let aux = 0;

    if (edges.length !== null) {
        while (aux < edges.length) {
          const nodes = edges.get(aux).from.toString() + "-" + edges.get(aux).to.toString();
          const values = edges.get(aux).label;
          arrayNodos.push(nodes);
          arrayEnlaces.push(values);
          aux++;
        }

      aux = 0;
      var matrix = Array(nodes.length).fill(0).map(() => Array(nodes.length).fill(0));
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

function limpiar() {
  location.reload();
}
