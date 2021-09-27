var Objeto;
function CarregaCampos(tipo,modelo,titulo,qtd=1) {
    let atributos  = [titulo,modelo,qtd]   

    let Tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
            
    if(Tipo == "Hd") {
        Tipo = "HD";
    }

    var Hardware = document.getElementById("B_"+Tipo);

    if(Tipo == "Placamae") {
        Tipo = "Placamãe";
    }

    let linha = document.createElement("TR");

    let celulaimg = document.createElement("TD");
    let img = document.createElement("IMG");
    if (Tipo == "Gabinete"||Tipo == "HD"||Tipo == "Memoria"||Tipo == "Fonte") {
        img.setAttribute("src","IMG/"+Tipo+"/"+modelo.replace("/","")+".jpg")
    }else{
        img.setAttribute("src","IMG/"+Tipo+"/"+titulo.replace("/","")+".jpg")
    }
    img.setAttribute("class","uk-preserve-width uk-border-circle")
    img.setAttribute("width","45")
    celulaimg.appendChild(img)
    linha.appendChild(celulaimg)

    atributos.forEach(parte => {
        let celula = document.createElement("TD");
        celula.innerText = parte;
        celula.setAttribute("class","uk-text-truncate")
        linha.appendChild(celula)
    });
    Hardware.appendChild(linha)

}
function Carregar() {
    let especificacao = sessionStorage.getItem("especificacao")
    let config = sessionStorage.getItem("config")
    Objeto = JSON.parse(especificacao)
    cliente = JSON.parse(config)
    
    if (sessionStorage.getItem("acao") == "vendedor") {
        let divBotoes = document.getElementById("Botoes");
        document.getElementById("btnF").style.width="0%";
        document.getElementById("btnF").style.display="none";
        let buttonV = document.createElement("button");
        buttonV.setAttribute("class","uk-button uk-button-back");
        buttonV.setAttribute("ID","btnV");
        buttonV.style.width="50%";
        buttonV.style.backgroundColor="#0dcaf0";
        buttonV.style.color="black";
        buttonV.innerText="VOLTAR";
        buttonV.addEventListener("click",function() {
            window.location.href=(window.location.href).replace("especificacao","consulta");
        })
        divBotoes.appendChild(buttonV);
    } else {
        document.getElementById("btnF").addEventListener("click",function () {
            $.ajax({
                type: 'POST',
                data:{op:0,placamae:Objeto.placamae.cod,processador:Objeto.processador.cod,fonte:Objeto.fonte.cod,gabinete:Objeto.gabinete.cod,memoria:Objeto.memoria,hd:Objeto.hd,cliente:cliente.nome},
                async:false,
                url: 'operacoesPed.php', //caminho do arquivo a ser executado
                dataType: 'json', //tipo do retorno
                complete: function(data){
                    if (data.responseJSON==1) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Seu pedido foi enviado com sucesso',
                            showConfirmButton: false,
                            timer: 1800
                        }).then(()=>{
                            window.location.href=(window.location.href).replace("especificacao","");
                        })
                    }
                    }
                
            });
        });
    }

    for (var key in Objeto) {
        let tipo = key;
        let  titulo;
        let  model;
        let  qtd;
        if (tipo == "memoria"||tipo == "hd") {
            for (var item in Objeto[tipo]) {    
            titulo = Objeto[tipo][item].text;
            model = Objeto[tipo][item].modelo;
            qtd = Objeto[tipo][item].qtd;
            CarregaCampos(tipo,model,titulo,qtd)
            }
        } else if (tipo == "placamae"||tipo == "processador") {
            titulo = Objeto[tipo].text;
            model = Objeto[tipo].marca;
            CarregaCampos(tipo,model,titulo,qtd)
        } else if (tipo == "cliente") {
            //pula
        }else{
            titulo = Objeto[tipo].text;
            model = Objeto[tipo].modelo;
            CarregaCampos(tipo,model,titulo,qtd)
        }
        
        
    };
     
}

function Imprimir(btn){
    if (sessionStorage.getItem("acao")=="vendedor") {
        document.getElementById(btn).style.display="none";
        document.getElementById("btnV").style.display="none";
        window.print();
        document.getElementById(btn).style.display="block";
        document.getElementById("btnV").style.display="block";
    } else {
        document.getElementById(btn).style.display="none";
        document.getElementById("btnF").style.display="none";
        window.print();
        document.getElementById(btn).style.display="block";
        document.getElementById("btnF").style.display="block";
    }
    
}