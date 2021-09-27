<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="styleP.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.4.1.min.js"></script>
    <script src="jsP.js"></script>
    <script src="jsDBP.js"></script>
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/js/uikit.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/js/uikit-icons.min.js"></script>

    <title>Principal</title>
</head>


<body onload="Iniciar()">
    
<div id="DPlacamãe" class="uk-child-width-1-3@s uk-text-center" uk-grid>
    
    <div id="Modelo_Placa" Marca="" class="uk-text-center card-color" ARQ="" SM=0 SUPM=0 MM="" FM="" SP="" GP="" SATA=0 T=0 style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                <img src="IMG/PlacaMãe/">
            </div>
            <div class="uk-card-body">
                <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
                <p id="D_"></p>
            </div>
            <button Tipo="Placamãe" Item="" class="uk-button uk-button-default uk-width-1-1" onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'),this.getAttribute('marca'))">ADICIONAR</button>
        </div>
    </div>

</div>


<div id="DProcessador" class="uk-child-width-1-4@s uk-text-center" uk-grid>

    <div id="Modelo_Processador" class="  uk-text-center " ARQ="" SP="" GP="" style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                <img src="IMG/Processador/">
            </div>
            <div class="uk-card-body">
                <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
                <p id="D_"></p>
            </div>
            <button Tipo="Processador" Item="" class="uk-button uk-button-default uk-width-1-1"onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'),this.getAttribute('marca'))">ADICIONAR</button>
        </div>
    </div>


</div>


<div id="DMemoria" class="uk-child-width-1-5@s uk-text-center" uk-grid>

    <div id="Modelo_Memoria" class=" uk-text-center " MM="" FM="" CM=0 style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                <img src="IMG/Memoria/">
            </div>
            <div class="uk-card-body">
                <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
                <p id="D_"></p>
            </div>
            <button Tipo="Memoria" Item="" class="uk-button uk-button-default uk-width-1-1"onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'))">ADICIONAR</button>
        </div>
    </div>
      
</div>


<div id="DHD" class="uk-child-width-1-3@s uk-text-center" uk-grid>


   <div id="Modelo_HD" class=" uk-text-center " THD=0 style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                 <img src="IMG/HD/">
            </div>
            <div class="uk-card-body">
               <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
               <p id="D_"></p>
           </div>
           <button Tipo="HD" Item="" class="uk-button uk-button-default uk-width-1-1"onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'))">ADICIONAR</button>
       </div>
   </div>



</div>

<div id="DFonte" class="uk-child-width-1-3@s uk-text-center" uk-grid>

   <div id="Modelo_Fonte" class=" uk-text-center " FSATA=0 style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                 <img src="IMG/Fonte/">
            </div>
            <div class="uk-card-body">
               <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
               <p id="D_"></p>
           </div>
           <button Tipo="Fonte" Item="" class="uk-button uk-button-default uk-width-1-1"onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'))">ADICIONAR</button>
       </div>
   </div>

</div>

<div id="DGabinete" class="uk-child-width-1-3@s uk-text-center" uk-grid>

   <div id="Modelo_Gabinete" class=" uk-text-center " T=0 SHD3=0  SHD2=0 style="display:none">
        <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                 <img src="IMG/Gabinete/">
            </div>
            <div class="uk-card-body">
               <h3 id="T_" class="uk-card-title uk-text-small uk-text-bold"></h3>
               <p id="D_"></p>
           </div>
           <button Tipo="Gabinete" Item="" class="uk-button uk-button-default uk-width-1-1"onclick= "Selecao(this.getAttribute('Tipo'),this.getAttribute('Item'),this.getAttribute('cod'))">ADICIONAR</button>
       </div>
   </div>

</div>

<button id="Btn_Cancelar" style="display:block;" class="uk-button uk-button-default" onclick="Cancelar()"><span uk-icon="icon: ban; ratio: 2"></span></button>


<!---  Modal Lateral  -->

<button id="Btn_Lista" class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip"></button>

<div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">


    <div id="Aba" class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Computador</h3>

        <div id="Estatisticas">

        </div>
        <div id="LPC">
            <ul uk-accordion>
                <li class="uk-open">
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_Placamãe" src="IMG/icon/Atual.png"> Placa Mãe</a>
                    <div id="Placamãe" class="uk-accordion-content">
                        
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_Processador" src="IMG/icon/Nada.png"> Processador</a>
                    <div id="Processador" class="uk-accordion-content">
                        
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_Memoria" src="IMG/icon/Nada.png"> Memoria</a>
                    <div id="Memoria" MT=0 class="uk-accordion-content">
                        
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_HD" src="IMG/icon/Nada.png"> HD</a>
                    <div id="HD" HDT=0 class="uk-accordion-content">
                        
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_Fonte" src="IMG/icon/Nada.png"> Fonte</a>
                    <div id="Fonte" class="uk-accordion-content">
                       
                    </div>
                </li>
                <li>
                    <a class="uk-accordion-title" href="#"><img class="Status" id="S_Gabinete" src="IMG/icon/Nada.png"> Gabinete</a>
                    <div id="Gabinete" class="uk-accordion-content">
                       
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- Sweetalert -->
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>