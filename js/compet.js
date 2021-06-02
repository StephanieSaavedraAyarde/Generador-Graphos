var arrayX = []
var arrayY = []

function compet(){
    x = document.querySelectorAll(".xx");
    x.forEach((cantidad) => {
        arrayX.push(Number(cantidad.value));
    });

    y = document.querySelectorAll(".yy");
    y.forEach((cantidad) => {
        arrayY.push(Number(cantidad.value));
    });

    console.log(arrayX, arrayY)
    let totalx = arrayX.reduce((a, b) => a + b, 0);
    let totaly = arrayY.reduce((a, b) => a + b, 0);

    console.log(totalx, totaly)
    var xx = totalx/arrayX.length;
    var yy = totaly/arrayY.length;

    console.log(xx, yy)

    alert("El resultado del algoritmo del compet es: \nValor de X :"+xx+"\nValor de Y :"+yy);
}

//Limpiar Area
function Limpiar() {
    location.reload();
  }
  


