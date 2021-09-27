let Itens,Lista=[];

function PreLoader() {
  $(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
}

function Iniciar() {
  $.ajax({
    type: 'POST',
    data:{op:1},
    async:false,
    url: 'operacoesPed.php', //caminho do arquivo a ser executado
    dataType: 'json', //tipo do retorno
    complete: function(data){
      console.log(data)
          Itens = data.responseJSON
          Lista = [];
        }
    
  });
  
  for (var item in Itens) {
    document.createElement("button")
    item = Itens[item];
    let parte = (item["DATE_FORMAT(data_pedido, '%d/%m/%y %H:%i:%s')"]).split(" ")
    let itemFormatado = {cod:item.cod,cliente:item.cliente,data:parte[0],horario:parte[1]}
    Lista.push(itemFormatado);
  }
}

Iniciar()

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
          search: '',
          headers: [
            {
              text: 'Cod',
              align: 'start',
              value: 'cod',
            },
            { text: 'Cliente', value: 'cliente' },
            { text: 'Data', value: 'data' },
            { text: 'Horario', value: 'horario' },
          ],
          desserts: Lista,
        }
      },
      methods: {
        next () {
          Iniciar(),
          this.desserts = Lista
        },
        Click(pedido) {
          let config = {}
          $.ajax({
            type: 'POST',
            data:{op:2,cod:pedido.cod},
            async:false,
            url: 'operacoesPed.php', //caminho do arquivo a ser executado
            dataType: 'json', //tipo do retorno
            complete: function(data){
                console.log(data.responseJSON)
                sessionStorage.clear();
                sessionStorage.setItem("especificacao",JSON.stringify(data.responseJSON));
                config["Cliente"] = {"nome":pedido.nome}
                sessionStorage.setItem("config",JSON.stringify(config));
                sessionStorage.setItem("acao","vendedor");
                window.location.href = "http://localhost/smart/especificacao";
                }
            
        });
        }
      }
  })
  PreLoader()
