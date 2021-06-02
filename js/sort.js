function getData (){
    array = []
    var valor = document.getElementById("data").value;
    array.push(valor)
    console.log(array)
    return array
}

function toStr(){
    array = getData()
    a = array.toString();
    arr = []
    var arra = a.split(",");
    arra.forEach(a => {
        x = parseInt(a);
        arr.push(x);
    });

    console.log(arr)
    return arr
}

//Sorts
function bubbleSort(){
    var start = Date.now();
    const bubbleSort = arr => { 
        for (let i = 0; i < arr.length; i++ ) {
            for (let j = 0; j < arr.length - 1 - i; j++ ) {
              if ( arr[ j ] > arr[ j + 1 ] ) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
              }
            }
        }
        return arr;
        };

    const arr = toStr();
    const result = bubbleSort(arr);
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function insertionSort(){
    var start = Date.now();
    const insertionSort = arr => {
        const l = arr.length;
        let j, temp;
      
        for ( let i = 1; i < l; i++ ) {
          j = i;
          temp = arr[ i ];
          while ( j > 0 && arr[ j - 1 ] > temp ) {
            arr[ j ] = arr[ j - 1 ];
            j--;
          }
          arr[ j ] = temp;
        }
        return arr;
      };
      
    const arr = toStr();
    const result = insertionSort(arr);
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function selectionSort(){
    var start = Date.now();
    const selectionSort = arr => {
        for ( let j = 0; j < arr.length; ++j ) {
            let i = iMin = j;
            for ( ++i; i < arr.length; ++i ) {
                ( arr[ i ] < arr[ iMin ] ) && ( iMin = i );
            }
            [ arr[ j ], arr[ iMin ] ] = [ arr[ iMin ], arr[ j ] ];
        }
        return arr;
    }
    const arr = toStr();
    const result = selectionSort(arr);
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function quickSort(){
    var start = Date.now();
    const quickSort = ( [ x = [], ...xs ] ) => {
        return ( x.length === 0 ) ? [] : [ ...quickSort( xs.filter( y => y <= x ) ), x, ...quickSort( xs.filter( y => y > x ) )];
    }
    const arr = toStr();
    const result = quickSort(arr); 
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function mergeSort(){
    var start = Date.now();
    const mergeSort = arr => {
        if (arr.length < 2) {
          return arr;
        }
        const middle = parseInt(arr.length / 2) | 0;
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        const merge = (left, right) => {
            const result = [];
            let il = ir = 0;
            while (il < left.length && ir < right.length) {
                result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
            }
            return [...result, ...left.slice(il), ...right.slice(ir)];
        }
        return merge(mergeSort(left), mergeSort(right));
    }
      
    const arr = toStr(getData());
    const result = mergeSort(arr);
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function shellSort(){
    var start = Date.now();
    const shellSort = arr => {
        const gaps = [5, 3, 1];
        for ( let g = 0; g < gaps.length; ++g ) {
          for ( let i = gaps[ g ]; i < arr.length; ++i ) {
            const temp = arr[ i ];
            let j = i;
            for ( ; j >= gaps[ g ] && arr[j-gaps[ g ] ] > temp; j -= gaps[ g ] ) {
                    arr[ j ] = arr[ j - gaps[ g ] ];
                }
                arr[ j ] = temp;
            }
        }
        return arr;
    }

    const arr = toStr();
    const result = shellSort(arr);
    mostrar(result)
    var end = Date.now();
    console.log(end - start);
    window.alert((end - start)+'   milisegundos');
}

function mostrar(result){
    document.getElementById("ordenado").innerHTML = "";
    var tabla = document.getElementById("ordenado");
    val = ""
    for(let j=0; j<result.length; j++){
        val=""+ result
    }
    tabla.append(val)
}

function mostrar2(result){
    var tabla = document.getElementById("data");
    val = ""
    for(let j=0; j<result.length; j++){
        val=""+ result
    }
    tabla.append(val)
}

//Randomico
function rand(){
    var cant = prompt("Cantidad de datos a generar: ");
    var min = prompt("Limite inferior: ");
    var max = prompt("Limite superior: ");
    arr = []
    for (let index = 0; index < cant; index++) {
        arr[index] = parseInt((Math.random() * (max - min) + min))
    }
    mostrar2(arr)
}

//Guardar
function save(){
    const array = toStr();
    filename=prompt("Ingrese el nombre del archivo: ");
    let file=new Blob([JSON.stringify(array)],{type:"aplication/.json"});
    let a=document.createElement("a");
    a.href= URL.createObjectURL(file);
    a.download= filename+'.txt';
    a.click();
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
        mostrar2(gf)
   }
   lector.readAsText(archivo);
}
  
document.getElementById('import').addEventListener('change', leerArchivo, false);

//Limpiar
function Limpiar() {
    location.reload();
}
