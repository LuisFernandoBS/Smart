var GPlacaMae,GProcessador,GFonte,GGabinete;

function Iniciar(){
    var categorias=["Placamãe","Processador","Memoria","HD","Fonte","Gabinete"];
    
    categorias.forEach(divs => {
        document.getElementById("D"+divs).style.display="none";
    });
    document.getElementById("DPlacamãe").style.display="flex";
    DBD();
}

function PreConfig() {
    let base = location.search.slice(1)
    var config = {};
    var chaveValor = base.split('=');
    chaveValor[1] = (chaveValor[1]).replace('%20'," ")
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    config[chave] = valor;
    return config;
}
    




function Selecao(Tipo,Item,cod,marca=null) {
    var T_item=document.getElementById("T_"+Item).innerText;
    
    
    if (Tipo=="Placamãe") {
        var node = document.createElement("li");
        var textnode = document.createTextNode(T_item);
        node.setAttribute("cod",cod);
        node.setAttribute("marca",marca);
        node.appendChild(textnode);
        document.getElementById("Placamãe").appendChild(node);
        Regras(Tipo);

    }else if(Tipo=="Processador"){

        var node = document.createElement("li");
        var textnode = document.createTextNode(T_item);
        node.setAttribute("cod",cod);
        node.setAttribute("marca",marca);
        node.appendChild(textnode);
        document.getElementById("Processador").appendChild(node);
        Regras(Tipo);

    }else if(Tipo=="Memoria"){

        var MT = parseInt(document.getElementById("Memoria").getAttribute("MT"));
        var SV = 0;
        if (document.getElementById("Memoria").childElementCount > 0) {
            let contador = document.getElementById("Memoria").childNodes;
            contador.forEach(element => {
                if (element.nodeName == "LI") {
                    SV += parseInt(element.getAttribute("qtd"));
                }
            });
        } else {
            SV = document.getElementById("Memoria").childElementCount;
        }
       
        var PM =(document.getElementById("Placamãe").children[0].innerHTML).replace(" / ","");
        PM = PM.replace("/","")
        PM=document.getElementById(PM);

        console.log(document.getElementById("Placamãe").children[0].innerHTML)
        if (MT<PM.getAttribute("SUPM")) {
            if (SV<PM.getAttribute("SM")) {
                let existe  = VerifExistencia(cod,Tipo)
                if (!existe) {
                    var node = document.createElement("li");
                    var textnode = document.createTextNode(T_item);
                    node.setAttribute("cod",cod);
                    node.setAttribute("modelo",Item);
                    node.setAttribute("qtd",1);
                    node.appendChild(textnode);
                    document.getElementById("Memoria").appendChild(node);
                }
                
                var CM = parseInt(document.getElementById(Item).getAttribute("CM"));
                if (SV<PM.getAttribute("SM")-1) {
                    Swal.fire({
                        title: 'Adicionar?',
                        text: "Deseja adicionar mais Memoria RAM?",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sim, desejo!',
                        cancelButtonText: 'Não'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            document.getElementById("Memoria").setAttribute("MT",(MT+CM));
                            Regras(Tipo);
                        }else{
                            document.getElementById("Memoria").setAttribute("MT",(MT+CM));
                            Regras(Tipo);
                            Aba(Tipo);
                        }
                      })
                }else{
                    document.getElementById("Memoria").setAttribute("MT",(MT+CM));
                    Regras(Tipo);
                    Aba(Tipo);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      Toast.fire({
                        icon: 'info',
                        title: 'Todos slots da Placa-mãe foram oculpados.'
                      })
                }
                
                
            } else {
                UIkit.notification({message: "A Placa mãe está com todo os "+ PM.getAttribute("SM") + " slots de Memoria oculpados", status: 'danger'});
                Regras(Tipo);
                Aba(Tipo);
            }
        }else{
            UIkit.notification({message: "A Placa mãe não suporta mais que "+ PM.getAttribute("SUPM") + "Gb de Memoia RAM", status: 'danger'});
        }

        
    }else if(Tipo=="HD"){

        var QTD = 0;
        if (document.getElementById("HD").childElementCount > 0) {
            let contador = document.getElementById("HD").childNodes;
            contador.forEach(element => {
                if (element.nodeName == "LI") {
                    QTD += parseInt(element.getAttribute("qtd"));
                }
            });
        } else {
            QTD = document.getElementById("HD").childElementCount;
        }
        let existe  = VerifExistencia(cod,Tipo)
        if (!existe) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(T_item);
            node.setAttribute("cod",cod);
            node.appendChild(textnode);
            node.setAttribute("modelo",Item);
            node.setAttribute("id",Item);
            node.setAttribute("qtd",1);
            document.getElementById("HD").appendChild(node);
        }

        var HDT = parseInt(document.getElementById("HD").getAttribute("HDT"));

        if (QTD>2) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'warning',
                title: "Atenção, acima de 3 HD's pode ser dificil encontrar gabinetes."
              })
        }

        var QTDS = (document.getElementById("Placamãe").children[0].innerHTML).replace(" / ","");
        QTDS = QTDS.replace("/","")
        QTDS=document.getElementById(QTDS).getAttribute("SATA");

        if (QTDS==QTD) {
            document.getElementById("HD").setAttribute("HDT",(HDT+QTD+1));
            Regras(Tipo);
            Aba(Tipo);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'warning',
                title: 'A placa mãe não tem suporte para mais HDs.'
              })
        }else{

            Swal.fire({
                title: 'Adicionar?',
                text: "Deseja adicionar mais HDs?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, desejo!',
                cancelButtonText: 'Não'
              }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("HD").setAttribute("HDT",(HDT+QTD));
                    Regras(Tipo);
                }else{
                    document.getElementById("HD").setAttribute("HDT",(HDT+QTD));
                    Regras(Tipo);
                    Aba(Tipo);
                }
              })

        
        }
        

    }else if(Tipo=="Fonte"){

        var node = document.createElement("li");
        var textnode = document.createTextNode(T_item);
        node.setAttribute("cod",cod);
        node.setAttribute("modelo",Item);
        node.appendChild(textnode);
        document.getElementById("Fonte").appendChild(node);
        Regras(Tipo);
        Aba(Tipo);

    }else if(Tipo=="Gabinete"){

        var node = document.createElement("li");
        var textnode = document.createTextNode(T_item);
        node.setAttribute("cod",cod);
        node.setAttribute("modelo",Item);
        node.appendChild(textnode);
        document.getElementById("Gabinete").appendChild(node);
        Finalizar()
    }
}

function VerifExistencia(cod,tipo) {
    let contem = false;
    if (tipo=="Memoria") {
        var Itens = document.getElementById("Memoria").childNodes;
    } else {
        var Itens = document.getElementById("HD").childNodes;
    }
    
    Itens.forEach(function(elementos) {
        if (elementos.nodeName == "LI" ) {
            if(elementos.getAttribute("cod")==cod){
                elementos.setAttribute("qtd",parseInt(elementos.getAttribute("qtd"))+1);
                contem = true;
            }
        }
    });
    return contem;
}

function Finalizar(){
    let placamaeDiv = document.getElementById("Placamãe").children[0];
    let placamae = {"cod":placamaeDiv.getAttribute("cod"),"text":placamaeDiv.innerHTML,"marca":placamaeDiv.getAttribute("marca")}
    let processadorDiv = document.getElementById("Processador").children[0];
    let processador = {"cod":processadorDiv.getAttribute("cod"),"text":processadorDiv.innerHTML,"marca":processadorDiv.getAttribute("marca")}
    let memoriaDiv = document.getElementById("Memoria").childNodes;
    let memoria = {};
    memoriaDiv.forEach(function(elementos,index) {
        if (elementos.nodeName == "LI" ) {
            let item = {}
            item["cod"] = elementos.getAttribute("cod");
            item["modelo"] = elementos.getAttribute("modelo");
            item["text"] = elementos.innerText;
            item["qtd"] = elementos.getAttribute("qtd");
            memoria["memoria"+index]=item;
        }
    });
    let hdDiv = document.getElementById("HD").childNodes;
    let hd = {};
    hdDiv.forEach(function(elementos,index) {
        if (elementos.nodeName == "LI" ) {
            let item = {}
            item["cod"] = elementos.getAttribute("cod");
            item["modelo"] = elementos.getAttribute("modelo");
            item["text"] = elementos.innerText;
            item["qtd"] = elementos.getAttribute("qtd");
            hd["hd"+index]=item;
        }
    });
    let fonteDiv = document.getElementById("Fonte").children[0];
    let fonte = {"cod":fonteDiv.getAttribute("cod"),"text":fonteDiv.innerHTML,"modelo":fonteDiv.getAttribute("modelo")}
    let gabineteDiv= document.getElementById("Gabinete").children[0];
    let gabinete = {"cod":gabineteDiv.getAttribute("cod"),"text":gabineteDiv.innerHTML,"modelo":gabineteDiv.getAttribute("modelo")}
    
    let Especificacoes = {"placamae":placamae,"processador":processador,"memoria":memoria,"hd":hd,"fonte":fonte,"gabinete":gabinete}
    let config = PreConfig();
    sessionStorage.clear();
    sessionStorage.setItem("especificacao",JSON.stringify(Especificacoes));
    sessionStorage.setItem("config",JSON.stringify(config));
    sessionStorage.setItem("acao","cliente");
    window.location.href = "http://localhost/smart/especificacao";
}


function Regras(Tipo) {
    var PlacamaeE=(document.getElementById("Placamãe").children[0].innerHTML).replace(" / ","");
    PlacamaeE = PlacamaeE.replace("/","")
    PlacamaeE=document.getElementById(PlacamaeE);

    if (Tipo=="Placamãe") {
        var Itens = document.getElementById("DProcessador").childNodes;

        Itens.forEach(item => {
            if (item.id!=undefined ) {
                if(!(item.id).includes("Modelo")){
                    var itemc = document.getElementById(item.id);
                    if (itemc.getAttribute("ARQ")==PlacamaeE.getAttribute("ARQ")) {
                        if(itemc.getAttribute("SP")==PlacamaeE.getAttribute("SP")){
                            if (itemc.getAttribute("GP")<=PlacamaeE.getAttribute("GP")) {
                            }else{
                                itemc.style.display="none";
                            }
                        }else{
                            itemc.style.display="none";
                        }
                    }else{
                        itemc.style.display="none";
                    }
                }
            }
        });
        Aba(Tipo);
        
    }else if(Tipo=="Processador"){
        
        var Itens = document.getElementById("DMemoria").childNodes;

        Itens.forEach(item => {
            if (item.id!=undefined) {
                var itemc = document.getElementById(item.id)

                if (itemc.getAttribute("MM")==PlacamaeE.getAttribute("MM")) {
                    if(itemc.getAttribute("FM")<=PlacamaeE.getAttribute("FM")){
                    }else{
                        itemc.style.display="none";
                    }
                }else{
                    itemc.style.display="none";
                }

            }
        });
        Aba(Tipo);

    }else if(Tipo=="Memoria"){

    }else if(Tipo=="HD"){
        var Itens = document.getElementById("DFonte").childNodes;
        var HDs = document.getElementById("HD").childElementCount;

        Itens.forEach(item => {
            if (item.id!=undefined) {
                var itemc = document.getElementById(item.id)

                if (itemc.getAttribute("FSATA")>=HDs) {
                    
                }else{
                    itemc.style.display="none";
                }

            }
        });

    }else if(Tipo=="Fonte"){
        var THDs = document.getElementById("HD").childNodes;

        var T3=0;
        var T2=0;
        THDs.forEach(nomehd => {
            if ("#text"!=nomehd.nodeName) {
                var hd=document.getElementById(nomehd.id);
                if (hd.getAttribute("THD")==3) {
                    T3+=1;
                }else{
                    T2+=1;
                }
            }
            

        });

        var Itens = document.getElementById("DGabinete").childNodes;

        Itens.forEach(item => {
            if (item.id!=undefined) {
                var itemc = document.getElementById(item.id);

                if (itemc.getAttribute("T")>=PlacamaeE.getAttribute("T")) {
                    if(itemc.getAttribute("SHD3")>=T3){
                        if(itemc.getAttribute("SHD2")>=T2){
                        }else{
                            itemc.style.display="none";
                        }
                    }else{
                        itemc.style.display="none";
                    }
                }else{
                    itemc.style.display="none";
                }

            }
        });

    }else if(Tipo=="Gabinete"){

        

    }
    
}


function Aba(Atual) {
    var categorias=["Placamãe","Processador","Memoria","HD","Fonte","Gabinete"];

    categorias.forEach(function(divs,index){
        if (Atual=="Gabinete") {
            Finalizar()
        }
        if (Atual==divs) {
            document.getElementById(divs).parentElement.children[0].click();
                categorias.forEach(divs => {
                    document.getElementById("D"+divs).style.display="none";
                });
                document.getElementById("S_"+divs).setAttribute("src","IMG/icon/OK.png")
                document.getElementById("S_"+categorias[index+1]).setAttribute("src","IMG/icon/Atual.png")
                document.getElementById("D"+categorias[index+1]).style.display="flex";
                document.getElementById(categorias[index+1]).parentElement.children[0].click();
        }
    });
}

function Status(Atual,ST) {
    var categorias=["Placamãe","Processador","Memoria","HD","Fonte","Gabinete"];
    var prox = categorias.indexOf(Atual)+1;
    
    if(ST=="OK"){
        document.getElementById("S_"+Atual).src="IMG/icon/"+ST+".png";
        document.getElementById("S_"+categorias[prox]).src="IMG/icon/Atual.png";
    }else if(ST=="Pulou"){
        document.getElementById("S_"+Atual).src="IMG/icon/"+ST+".png";
        document.getElementById("S_"+categorias[prox]).src="IMG/icon/Atual.png";
    }
}

function Cancelar() {
    window.location.href = "http://localhost/smart/";
}