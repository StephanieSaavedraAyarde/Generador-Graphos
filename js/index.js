var _0x9c11=["\x6D\x79\x6E\x65\x74\x77\x6F\x72\x6B","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x31\x30\x30\x25","\x34\x30\x30\x70\x78","\x23\x30\x31\x34\x36\x38\x30","\x62\x6F\x78","\x77\x68\x69\x74\x65","\x74\x72\x69\x61\x6E\x67\x6C\x65","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C","\x6E\x6F\x6E\x65","\x74\x6F\x70","\x6C\x65\x6E\x67\x74\x68","\x4E\x6F\x6D\x62\x72\x65\x20\x64\x65\x6C\x20\x6E\x6F\x64\x6F\x3A","\x69\x64","\x6C\x61\x62\x65\x6C","\x74\x69\x74\x6C\x65","\x4E\x6F\x64\x6F\x20","\x4E\x75\x65\x76\x6F\x20\x6E\x6F\x6D\x62\x72\x65\x20\x64\x65\x6C\x20\x6E\x6F\x64\x6F\x3A","\x66\x72\x6F\x6D","\x74\x6F","\x45\x73\x74\x61\x20\x73\x65\x67\x75\x72\x6F\x20\x64\x65\x20\x71\x75\x65\x72\x65\x72\x20\x75\x6E\x69\x72\x20\x65\x6C\x20\x6D\x69\x73\x6D\x6F\x20\x6E\x6F\x64\x6F","\x49\x6E\x67\x72\x65\x73\x65\x20\x65\x6C\x20\x76\x61\x6C\x6F\x72\x20\x64\x65\x6C\x20\x61\x74\x72\x69\x62\x75\x74\x6F\x3A\x20","\x49\x6E\x67\x72\x65\x73\x65\x20\x65\x6C\x20\x6E\x75\x65\x76\x6F\x20\x76\x61\x6C\x6F\x72\x20\x64\x65\x6C\x20\x61\x74\x72\x69\x62\x75\x74\x6F\x3A\x20","\x67\x65\x74","\x2D","\x70\x75\x73\x68","\x66\x69\x6C\x6C","\x6D\x61\x70","\x73\x70\x6C\x69\x74","\x2C","\x7C","\x6C\x6F\x67","\x53\x55\x4D\x41\x54\x4F\x52\x49\x41","\x4E\x4F\x44\x4F\x53","\x6D\x61\x74\x72\x69\x7A\x46\x69\x6E\x61\x6C","\x74\x62\x6F\x64\x79","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","","\x74\x72","\x74\x68","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x66\x6F\x72\x45\x61\x63\x68","\x72\x65\x6C\x6F\x61\x64"];var nodeIdCounter=0;var edgesIdCounter=0;var nodes= new vis.DataSet([]);var edges= new vis.DataSet([]);var container=document[_0x9c11[1]](_0x9c11[0]);var data={nodes:nodes,edges:edges};var options={width:_0x9c11[2],height:_0x9c11[3],manipulation:{addNode:function(_0xcdfdx8,_0xcdfdx9){añadirNodo(_0xcdfdx8,_0xcdfdx9)},editNode:function(_0xcdfdx8,_0xcdfdx9){editarNodo(_0xcdfdx8,_0xcdfdx9)},addEdge:function(_0xcdfdxa,_0xcdfdx9){añadirEnlace(_0xcdfdxa,_0xcdfdx9)},editEdge:function(_0xcdfdxa,_0xcdfdx9){editarEnlace(_0xcdfdxa,_0xcdfdx9)},"\x69\x6E\x69\x74\x69\x61\x6C\x6C\x79\x41\x63\x74\x69\x76\x65":true},nodes:{color:_0x9c11[4],"\x73\x68\x61\x70\x65":_0x9c11[5],font:{color:_0x9c11[6],size:18}},"\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E":{"\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E\x42\x75\x74\x74\x6F\x6E\x73":true,"\x68\x6F\x76\x65\x72":true},edges:{color:{color:_0x9c11[4],highlight:_0x9c11[4],hover:_0x9c11[4]},arrows:{to:{enabled:true,type:_0x9c11[7]}},font:{color:_0x9c11[4],size:15,align:_0x9c11[8],background:_0x9c11[9],strokeWidth:0,align:_0x9c11[10]}}};var network= new vis.Network(container,data,options);const añadirNodo=(_0xcdfdx8,_0xcdfdx9)=>{if(nodes[_0x9c11[11]]=== 0){nodeIdCounter= 0};var _0xcdfdxd=prompt(_0x9c11[12]);_0xcdfdx8[_0x9c11[13]]= nodeIdCounter++;_0xcdfdx8[_0x9c11[14]]= _0xcdfdxd;_0xcdfdx8[_0x9c11[15]]= _0x9c11[16]+ _0xcdfdxd;_0xcdfdx9(_0xcdfdx8)};const editarNodo=(_0xcdfdx8,_0xcdfdx9)=>{var _0xcdfdxd=prompt(_0x9c11[17]);_0xcdfdx8[_0x9c11[14]]= _0xcdfdxd;_0xcdfdx8[_0x9c11[15]]= _0x9c11[16]+ _0xcdfdxd;_0xcdfdx9(_0xcdfdx8)};const añadirEnlace=(_0xcdfdxa,_0xcdfdx9)=>{if(edges[_0x9c11[11]]=== 0){edgesIdCounter= 0};if(_0xcdfdxa[_0x9c11[18]]=== _0xcdfdxa[_0x9c11[19]]){var _0xcdfdx10=confirm(_0x9c11[20]);if(_0xcdfdx10=== true){var _0xcdfdxd=prompt(_0x9c11[21]);_0xcdfdxa[_0x9c11[13]]= edgesIdCounter++;_0xcdfdxa[_0x9c11[14]]= _0xcdfdxd;_0xcdfdx9(_0xcdfdxa)}}else {var _0xcdfdxd=prompt(_0x9c11[21]);_0xcdfdxa[_0x9c11[13]]= edgesIdCounter++;_0xcdfdxa[_0x9c11[14]]= _0xcdfdxd;_0xcdfdx9(_0xcdfdxa)}};const editarEnlace=(_0xcdfdxa,_0xcdfdx9)=>{var _0xcdfdxd=prompt(_0x9c11[22]);_0xcdfdxa[_0x9c11[14]]= _0xcdfdxd;_0xcdfdx9(_0xcdfdxa)};function MostrarMatriz(){var _0xcdfdx13=[];var _0xcdfdx14=[];let _0xcdfdx15=0;if(edges[_0x9c11[11]]!== null){while(_0xcdfdx15< edges[_0x9c11[11]]){const nodes=edges[_0x9c11[23]](_0xcdfdx15)[_0x9c11[18]].toString()+ _0x9c11[24]+ edges[_0x9c11[23]](_0xcdfdx15)[_0x9c11[19]].toString();const _0xcdfdx16=edges[_0x9c11[23]](_0xcdfdx15)[_0x9c11[14]];_0xcdfdx13[_0x9c11[25]](nodes);_0xcdfdx14[_0x9c11[25]](_0xcdfdx16);_0xcdfdx15++};_0xcdfdx15= 0;var _0xcdfdx17=Array(nodes[_0x9c11[11]])[_0x9c11[26]](0)[_0x9c11[27]](()=>{return Array(nodes[_0x9c11[11]])[_0x9c11[26]](0)});while(_0xcdfdx15< _0xcdfdx13[_0x9c11[11]]){var _0xcdfdx18=_0xcdfdx13[_0xcdfdx15][_0x9c11[28]](_0x9c11[24]);_0xcdfdx17[parseInt(_0xcdfdx18[1])][parseInt(_0xcdfdx18[0])]= _0xcdfdx14[_0xcdfdx15];_0xcdfdx15++};var _0xcdfdx19=[];var _0xcdfdx1a=[];for(let _0xcdfdx1b=0;_0xcdfdx1b< _0xcdfdx17[_0x9c11[11]];_0xcdfdx1b++){var _0xcdfdx1c=0;var _0xcdfdx1d=0;for(let _0xcdfdx1e=0;_0xcdfdx1e< _0xcdfdx17[_0x9c11[11]];_0xcdfdx1e++){_0xcdfdx1c+= parseFloat(_0xcdfdx17[_0xcdfdx1b][_0xcdfdx1e]);_0xcdfdx1d+= parseFloat(_0xcdfdx17[_0xcdfdx1e][_0xcdfdx1b])};_0xcdfdx19[_0x9c11[25]](_0xcdfdx1d);_0xcdfdx1a[_0x9c11[25]](_0xcdfdx1c)};var _0xcdfdx1f=_0x9c11[29];_0xcdfdx15= 0;while(_0xcdfdx15< nodes[_0x9c11[11]]){_0xcdfdx1f+= nodes[_0x9c11[23]](_0xcdfdx15)[_0x9c11[14]]+ _0x9c11[29];_0xcdfdx15++};_0xcdfdx1f+= _0x9c11[30];for(let _0xcdfdx1b=0;_0xcdfdx1b< _0xcdfdx17[_0x9c11[11]];_0xcdfdx1b++){_0xcdfdx1f+= nodes[_0x9c11[23]](_0xcdfdx1b)[_0x9c11[14]]+ _0x9c11[29];for(let _0xcdfdx1e=0;_0xcdfdx1e< _0xcdfdx17[_0x9c11[11]];_0xcdfdx1e++){_0xcdfdx1f+= _0xcdfdx17[_0xcdfdx1e][_0xcdfdx1b]+ _0x9c11[29]};_0xcdfdx1f+= _0xcdfdx19[_0xcdfdx1b]+ _0x9c11[30]};_0xcdfdx15= 0;_0xcdfdx1f+= _0x9c11[29];while(_0xcdfdx15< _0xcdfdx1a[_0x9c11[11]]){_0xcdfdx1f+= _0xcdfdx1a[_0xcdfdx15]+ _0x9c11[29];_0xcdfdx15++}};console[_0x9c11[31]](_0xcdfdx1f);toMatrix(_0xcdfdx1f)}const toMatrix=(_0xcdfdx1f)=>{let _0xcdfdx15=Array(nodes[_0x9c11[11]]+ 2)[_0x9c11[26]](0)[_0x9c11[27]](()=>{return Array(nodes[_0x9c11[11]]+ 2)[_0x9c11[26]](0)});let _0xcdfdx21=_0xcdfdx1f[_0x9c11[28]](_0x9c11[30]);for(let _0xcdfdx1b=0;_0xcdfdx1b< _0xcdfdx21[_0x9c11[11]];_0xcdfdx1b++){let _0xcdfdx22=_0xcdfdx21[_0xcdfdx1b][_0x9c11[28]](_0x9c11[29]);console[_0x9c11[31]](_0xcdfdx22);for(let _0xcdfdx1e=0;_0xcdfdx1e< _0xcdfdx22[_0x9c11[11]];_0xcdfdx1e++){_0xcdfdx15[_0xcdfdx1b][_0xcdfdx1e]= _0xcdfdx22[_0xcdfdx1e]};_0xcdfdx15[0][_0xcdfdx22[_0x9c11[11]]- 1]= _0x9c11[32]};_0xcdfdx15[_0xcdfdx21[_0x9c11[11]]- 1][0]= _0x9c11[32];_0xcdfdx15[0][0]= _0x9c11[33];tablx(_0xcdfdx15)};const tablx=(_0xcdfdx24)=>{var _0xcdfdx25=document[_0x9c11[1]](_0x9c11[34]);var _0xcdfdx26=document[_0x9c11[36]](_0x9c11[35]);_0xcdfdx25[_0x9c11[37]]= _0x9c11[38];_0xcdfdx24[_0x9c11[43]](function(_0xcdfdx27){var _0xcdfdx28=document[_0x9c11[36]](_0x9c11[39]);_0xcdfdx27[_0x9c11[43]](function(data){var _0xcdfdx29=document[_0x9c11[36]](_0x9c11[40]);_0xcdfdx29[_0x9c11[42]](document[_0x9c11[41]](data));_0xcdfdx28[_0x9c11[42]](_0xcdfdx29)});_0xcdfdx26[_0x9c11[42]](_0xcdfdx28)});_0xcdfdx25[_0x9c11[42]](_0xcdfdx26)};function limpiar(){location[_0x9c11[44]]()}
