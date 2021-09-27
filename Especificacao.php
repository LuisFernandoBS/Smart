<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jsE.js"></script>
    <script src="jquery-3.4.1.min.js"></script>
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/css/uikit.min.css" />
    <!-- CSS -->
    <link rel="stylesheet" href="css/especificacao.css" />
    
    <!-- UIkit JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/js/uikit.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/js/uikit-icons.min.js"></script>
    
<title>Especificação</title>

</head>
<body onload="Carregar()">
        <H2 style="text-align: center;">ESPECIFICAÇÕES</H2>
    <div style="width: 90%;position: relative;left: 5%;">
            
        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">PLACA MÃE</th>
                        <th class="uk-form-width-medium ">MARCA</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_Placamae" >
                </tbody>
        </table>

        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">PROCESSADOR</th>
                        <th class="uk-form-width-medium">MARCA</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_Processador" >
                </tbody>
        </table>

        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">MEMORIA</th>
                        <th class="uk-form-width-medium">MODELO</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_Memoria" >
                </tbody>
        </table>

        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">HD</th>
                        <th class="uk-form-width-medium">MODELO</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_HD" >
                </tbody>
        </table>

        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">FONTE</th>
                        <th class="uk-form-width-medium">MODELO</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_Fonte" >
                </tbody>
        </table>

        <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-table-shrink">IMAGEM</th>
                        <th class="uk-form-width-medium">GABINETE</th>
                        <th class="uk-form-width-medium">MODELO</th>
                        <th class="uk-table-shrink uk-text-nowrap">QTD</th>
                    </tr>
                </thead>
                <tbody id="B_Gabinete" >
                </tbody>
        </table>
    </div>
    <div id="Botoes" class="uk-button-group uk-width-1-1">
    <button id="btnI" onclick="Imprimir(this.id)" class="uk-button uk-button-primary" >IMPRIMIR</button>
    <button id="btnF" class="uk-button uk-button-success" >FINALIZAR</button>
    </div>
    <!-- Sweetalert -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>