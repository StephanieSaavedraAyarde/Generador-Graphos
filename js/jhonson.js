function array() {
    var nodoA = [];
    var valoresA = [];
    var auxs=[];
    let c = 0;
    
    if (c < edges.length) {
      const n = edges.forEach((element) => {
        const nodes = element.from.toString() + "-" + element.to.toString();
        const values = parseInt(element.label);
        auxs.push(nodes);
        nodoA.push(nodes);
        valoresA.push(values); 
      });
      
    }

    c = 0;
    var matrix = Array(nodes.length).fill(0).map(() => Array(nodes.length).fill(0));
      
    console.log(matrix);
    while (c <nodoA.length) {
      var split =nodoA[c].split("-");
      matrix[parseInt(split[1])][parseInt(split[0])] = valoresA[c];
      Johnson(matrix);
      c++;        
    }
}
  
function Jhonson () {
    Arrayen=[];
    ArrayAppi = [];
    ArrayAtpf = [];
  
    punt=[];
    p=0;

    edges.forEach((enlace)=>{
      if (enlace.from == p) {
        dato = new llenarAppi(enlace.from,enlace.from);
        ArrayAppi.push(dato);
        
        punt=[enlace.to,enlace.label];
        appiant=parseFloat(enlace.from);
        a=parseFloat(enlace.label);
        appi = appiant + a;
        dato = new llenarAppi(enlace.to,appi);
        ArrayAppi.push(dato);
        antt=enlace.to;
        p=-1;
      }else{
        if(antt != enlace.to && punt[0] == enlace.from){
            appiant=parseFloat(punt[1]);
            a=parseFloat(enlace.label);
            appi = appiant + a;
            dato = new llenarAppi(enlace.to,appi);
            ArrayAppi.push(dato);
            antt=enlace.to;
        }else{
          if (antt != enlace.to && punt[0] != enlace.from) {
             for (let app of ArrayAppi){
                if (app.id==enlace.from) {
                  appiant=parseFloat(app.appi);
                  a=parseFloat(enlace.label);
                  appi = appiant + a;
                  dato = new llenarAppi(enlace.to,appi);
                  ArrayAppi.push(dato);
                  break;
                }
              }
                  antt=enlace.to;
                  punt=[enlace.from,appi];
          }else{
                for (let app of ArrayAppi){
                  if (app.id==enlace.from) {
                    appiant=parseFloat(app.appi);
                    a=parseFloat(enlace.label);
                    appi = appiant + a;
                    if (appi > parseFloat(punt[1])) {
                      change=false;
                      for (let ap of ArrayAppi){
                        if (ap.id==enlace.to) {
                          ap.appi=appi;
                          change=true;
                          break;
                        }
                      }
                      if(change==false){
                          dato = new llenarAppi(enlace.to,appi);
                          console.log(dato);
                          ArrayAppi.push(dato);
                          break;
                        
                      }
                      punt=[enlace.to,appi];antt=enlace.to;
                      break;
                    }else{
                      
                      punt=[enlace.to,punt[1]];antt=enlace.to;
                      break;
                    }
  
                  }
              }
          }
          
        }
        
      }
    });
  
    edges.forEach((enlace)=>{
      dato = new llenarAen(enlace.from,enlace.to,enlace.label);
      Arrayen.push(dato);
    });
  
    antf=0;
    j =ArrayAppi.length - 1;
    p =ArrayAppi[j].id;

    for (var i = Arrayen.length - 1; i >= 0; i--) {
      if (Arrayen[i].to == p) {
          dato = new llenarAtpf(Arrayen[i].to,ArrayAppi[j].appi);
          ArrayAtpf.push(dato);
          atpfant=parseFloat(ArrayAppi[j].appi);
          a=parseFloat(Arrayen[i].label);
          atpf = atpfant - a;
          dato = new llenarAtpf(Arrayen[i].from,atpf);
          ArrayAtpf.push(dato);
          antf=Arrayen[i].from;
          punt=[Arrayen[i].from,atpf];
          p=-1;
      }else{

        if (antf != Arrayen[i].from && punt[0] == Arrayen[i].to) {
          ex=false;aux=0;
          for (let atp of ArrayAtpf) {
            if(Arrayen[i].from==atp.id){
              atpfant=parseFloat(punt[1]);
              a=parseFloat(Arrayen[i].label);
              atpfA = atpfant - a;aux=atp.atpf;ex=true;break;
            }
          }

          if (ex) {
            if (atpfA<aux) {
              for (let atp of ArrayAtpf) {
                if(Arrayen[i].from==atp.id){
                  atp.atpf=atpfA;break;
                }
              }
            }
          }else{
            atpfant=parseFloat(punt[1]);
            a=parseFloat(Arrayen[i].label);
            atpf = atpfant - a;
            dato = new llenarAtpf(Arrayen[i].from,atpf);
            //console.log(dato);
            ArrayAtpf.push(dato);
          }
          
          anft=Arrayen[i].from;
        }else{
          
          if (Arrayen[i].to != punt[0] &&  antf != Arrayen[i].from) {
            for (let atp of ArrayAtpf) {
              if (Arrayen[i].to==atp.id) {
                atpfant=parseFloat(atp.atpf);
                a=parseFloat(Arrayen[i].label);
  
                atpf = atpfant - a;
                dato = new llenarAtpf(Arrayen[i].from,atpf);
                ArrayAtpf.push(dato);
                antf=Arrayen[i].from;
                punt=[Arrayen[i].from,atpf];
                break;
              }
            }        
            
          }else{
            for (let atp of ArrayAtpf) {
              if (Arrayen[i].to==atp.id) {
                atpfant=parseFloat(atp.atpf);
                a=parseFloat(Arrayen[i].label);
                atpf = atpfant - a;
                if (atpf < parseFloat(punt[1])) {
                  change=false;
                      
                  for (let at of ArrayAtpf) {
                    if(at.id == punt[0]){
                      at.atpf = atpf;
                      break;
                    }
                  }
                  antf=Arrayen[i].from;
                  punt=[Arrayen[i].from,atpf];
                }else{
                  antf=Arrayen[i].from;
                  punt=[Arrayen[i].from,punt[1]];
                  break;
                }
              }
            }
          }
        }
      }
    }
  
    AddElement(ArrayAppi,ArrayAtpf);
    rutaCritica(ArrayAppi,ArrayAtpf);
}
  
function llenarAen(from,to,label){
    this.from=from;
    this.to=to;
    this.label=label;
}
  
function llenarAppi(id,appi){
    this.id=id;
    this.appi=appi;
}
  
function llenarAtpf(id,atpf){
    this.id=id;
    this.atpf=atpf;
}
  
const AddElement=(ArrayAppi,ArrayAtpf) => {
    aux = ArrayAtpf.reverse();

    for (var i = 0; i <= ArrayAppi.length - 1; i++) {
      if (ArrayAppi[i].id == aux[i].id) {
        nodes.forEach((nodo)=>{
          if (nodo.id == aux[i].id) {
            t=String('appi:'+ArrayAppi[i].appi+' | atpf:'+aux[i].atpf);
            nodes.update({id: nodo.id, title:t});
          }
        });
      }
    }
  
}
  
const rutaCritica=(ArrayAppi,ArrayAtpf)=>{
    Nodo = [];
    for (var i = 0; i <= ArrayAppi.length - 1; i++) {  
      if (ArrayAppi[i].id == ArrayAtpf[i].id) {
        dato = new llenarNodo(ArrayAppi[i].id, ArrayAppi[i].appi, ArrayAtpf[i].atpf);
        Nodo.push(dato);
      }
    }
    edges.forEach((enlace)=>{
      for (var i = 0; i <= Nodo.length - 1; i++) {  
        if (enlace.from == Nodo[i].id) {
          ap=Nodo[i].appi;
        }else{
          if (enlace.to == Nodo[i].id) {
            at=Nodo[i].atpf;
          }
        }
      }

      h = at - ap - parseFloat(enlace.label);
      edges.update({id: enlace.id, title:"Holgura: "+h});
      
      if (h==0) {
        edges.update({id: enlace.id, color:"red", title:"Holgura: "+h});
      }
      
    });
}
  
function llenarNodo(id,appi,atpf){
    this.id=id;
    this.appi=appi;
    this.atpf=atpf;
}