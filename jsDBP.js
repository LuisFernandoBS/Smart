function DBD() {
    DBTipo=["PM","P","M","HD","F","G"];

    DBTipo.forEach(element => {
        var Itens
        $.ajax({
            type: 'POST',
            async:false,
            url: 'carregar'+element+'.php', //caminho do arquivo a ser executado
            dataType: 'json', //tipo do retorno
            complete: function(data){
                   Itens = data['responseText'].split("$|")
                }
            
        });
        ConfigCards(element,Itens);
    });
    
}
 function ConfigCards(tp,Itens) {

    switch (tp) {
        case "PM":
            
            if(Itens!=""){
                var i=0;
                var Itemd
                var modelo = document.getElementById("Modelo_Placa");
                while (Itens[i]!=undefined) {
                Itemd=Itens[i].split("&|");
                var novo = modelo.cloneNode(true);
                novo.setAttribute("id",Itemd[0].replace("/",""));
                novo.setAttribute("Marca",Itemd[1]);
                novo.setAttribute("ARQ",Itemd[2]);
                novo.setAttribute("SM",Itemd[3]);
                novo.setAttribute("SUPM",Itemd[4]);
                novo.setAttribute("MM",Itemd[5]);
                novo.setAttribute("FM",Itemd[6]);
                novo.setAttribute("SP",Itemd[7]);
                novo.setAttribute("GP",Itemd[8]);
                novo.setAttribute("SATA",Itemd[9]);
                novo.setAttribute("T",Itemd[10]);
                var img=Itemd[0].replace(/[/]/gi,"");
                novo.children[0].children[0].children[0].setAttribute("src","IMG/PlacaMãe/"+img);
                novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                novo.children[0].children[1].children[0].innerHTML = Itemd[0];
                var n = Itemd[11].indexOf(" ",42);
                var res = Itemd[11].slice(0,n);
                novo.children[0].children[1].children[1].innerHTML = res+"...";
                novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                novo.children[0].children[2].setAttribute("cod",Itemd[12]);
                novo.children[0].children[2].setAttribute("marca",Itemd[1]);
                novo.children[0].children[2].setAttribute("Tipo","Placamãe");
                novo.style.display = "flex";
                document.getElementById("DPlacamãe").appendChild(novo);
                i+=1;
        
                }
            }

            break;
    
        case "P":
            
                if(Itens!=""){
                    var i=0;
                    var Itemd
                    var modelo = document.getElementById("Modelo_Processador");
                    while (Itens[i]!=undefined) {
                    Itemd=Itens[i].split("&|");
                    var novo = modelo.cloneNode(true);
                    novo.setAttribute("id",Itemd[0]);
                    novo.setAttribute("ARQ",Itemd[1]);
                    novo.setAttribute("SP",Itemd[2]);
                    novo.setAttribute("GP",Itemd[3]);
                    var img=Itemd[0].replace(/[/]/gi,"");
                    novo.children[0].children[0].children[0].setAttribute("src","IMG/Processador/"+img);
                    novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                    novo.children[0].children[1].children[0].innerHTML = Itemd[0];
                    /*var n = Itemd[11].indexOf(" ",42);
                    var res = Itemd[11].slice(0,n);
                    novo.children[0].children[1].children[1].innerHTML = res+"...";*/
                    novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                    novo.children[0].children[2].setAttribute("cod",Itemd[4]);
                    novo.children[0].children[2].setAttribute("marca",Itemd[1]);
                    novo.children[0].children[2].setAttribute("Tipo","Processador");
                    novo.style.display = "flex";
                    document.getElementById("DProcessador").appendChild(novo);
                    i+=1;
            
                    }
                }

        break;
        case "M":
            
            if(Itens!=""){
                var i=0;
                var Itemd
                var modelo = document.getElementById("Modelo_Memoria");
                //console.log(Itens)
                while (Itens[i]!=undefined) {
                Itemd=Itens[i].split("&|");
                var novo = modelo.cloneNode(true);
                novo.setAttribute("id",Itemd[0]);
                novo.setAttribute("MM",Itemd[1]);
                novo.setAttribute("FM",Itemd[2]);
                novo.setAttribute("CM",Itemd[3]);
                var img=Itemd[0].replace(/[/]/gi,"");
                novo.children[0].children[0].children[0].setAttribute("src","IMG/Memoria/"+img);
                novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                novo.children[0].children[1].children[0].innerHTML =Itemd[4]+" - "+Itemd[0];
                /*var n = Itemd[11].indexOf(" ",42);
                var res = Itemd[11].slice(0,n);
                novo.children[0].children[1].children[1].innerHTML = res+"...";*/
                novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                novo.children[0].children[2].setAttribute("cod",Itemd[5]);
                novo.children[0].children[2].setAttribute("Tipo","Memoria");
                novo.style.display = "flex";
                document.getElementById("DMemoria").appendChild(novo);
                i+=1;
        
                }
            }

            break;
            case "HD":
            
                if(Itens!=""){
                    var i=0;
                    var Itemd
                    var modelo = document.getElementById("Modelo_HD");
                    //console.log(Itens)
                    while (Itens[i]!=undefined) {
                    Itemd=Itens[i].split("&|");
                    var novo = modelo.cloneNode(true);
                    novo.setAttribute("id",Itemd[0]);
                    novo.setAttribute("THD",Itemd[3]);
                    var img=Itemd[0].replace(/[/]/gi,"");
                    novo.children[0].children[0].children[0].setAttribute("src","IMG/HD/"+img);
                    novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                    novo.children[0].children[1].children[0].innerHTML = Itemd[1];
                    var n = Itemd[2].indexOf(" ",42);
                    var res = Itemd[2].slice(0,n);
                    novo.children[0].children[1].children[1].innerHTML = res+"...";
                    novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                    novo.children[0].children[2].setAttribute("cod",Itemd[4]);
                    novo.children[0].children[2].setAttribute("Tipo","HD");
                    novo.style.display = "flex";
                    document.getElementById("DHD").appendChild(novo);
                    i+=1;
            
                    }
                }

        break;
        case "F":
            
                if(Itens!=""){
                    var i=0;
                    var Itemd
                    var modelo = document.getElementById("Modelo_Fonte");
                    //console.log(Itens)
                    while (Itens[i]!=undefined) {
                    Itemd=Itens[i].split("&|");
                    var novo = modelo.cloneNode(true);
                    novo.setAttribute("id",Itemd[0]);
                    novo.setAttribute("FSATA",Itemd[2]);
                    var img=Itemd[0].replace(/[/]/gi,"");
                    novo.children[0].children[0].children[0].setAttribute("src","IMG/Fonte/"+img);
                    novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                    novo.children[0].children[1].children[0].innerHTML = Itemd[1];
                    var n = Itemd[3].indexOf(" ",42);
                    var res = Itemd[3].slice(0,n);
                    novo.children[0].children[1].children[1].innerHTML = res+"...";
                    novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                    novo.children[0].children[2].setAttribute("cod",Itemd[4]);
                    novo.children[0].children[2].setAttribute("Tipo","Fonte");
                    novo.style.display = "flex";
                    document.getElementById("DFonte").appendChild(novo);
                    i+=1;
            
                    }
                }

        break;
        case "G":
            
                if(Itens!=""){
                    var i=0;
                    var Itemd
                    var modelo = document.getElementById("Modelo_Gabinete");
                    //console.log(Itens)
                    while (Itens[i]!=undefined) {
                    Itemd=Itens[i].split("&|");
                    var novo = modelo.cloneNode(true);
                    novo.setAttribute("id",Itemd[0]);
                    novo.setAttribute("T",Itemd[2]);
                    novo.setAttribute("SHD3",Itemd[3]);
                    novo.setAttribute("SHD2",Itemd[4]);
                    var img=Itemd[0].replace(/[/]/gi,"");
                    novo.children[0].children[0].children[0].setAttribute("src","IMG/Gabinete/"+img);
                    novo.children[0].children[1].children[0].setAttribute("id","T_"+Itemd[0]);
                    novo.children[0].children[1].children[0].innerHTML = Itemd[1];
                    var n = Itemd[5].indexOf(" ",42);
                    var res = Itemd[5].slice(0,n);
                    novo.children[0].children[1].children[1].innerHTML = res+"...";
                    novo.children[0].children[2].setAttribute("Item",Itemd[0]);
                    novo.children[0].children[2].setAttribute("cod",Itemd[6]);
                    novo.children[0].children[2].setAttribute("Tipo","Gabinete");
                    novo.style.display = "flex";
                    document.getElementById("DGabinete").appendChild(novo);
                    i+=1;
            
                    }
                }

        break;
        
        default:
            console.log("Erro de aplicação dos Cards")
            break;
    }

    
 }