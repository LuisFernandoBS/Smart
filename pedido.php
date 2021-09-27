<?php
include_once 'conexao.php'; 
class Pedido{
    public $cliente;
    public $placamae;
    public $fonte;
    public $gabinete;
    public $processador;
    public $memoria;
    public $hd;

    function cadastrarPedido($cliente, $placamae, $fonte, $gabinete, $processador,$memoria,$hd){
        $pdo = Conexao::getInstance();
        $stmt = $pdo->prepare('INSERT INTO tb_especificacao (cliente,cod_placamae,cod_processador,cod_fonte,cod_gabinete) VALUES(:cliente,:placamae,:processador,:fonte,:gabinete)');
        $stmt->execute(array(
            'cliente' => $cliente,
            'placamae' => $placamae,
            'processador' => $processador,
            'fonte' => $fonte,
            'gabinete'=> $gabinete
        ));
        if ($stmt->errorCode() == "00000" ) {
            $stmt1 = $pdo->prepare("SELECT cod FROM tb_especificacao WHERE cod_placamae=:placamae AND cod_processador=:processador AND cliente=:cliente  ORDER BY data_pedido DESC");
            $stmt1->execute(array(
                'placamae' => $placamae,
                'processador' => $processador,
                'cliente' => $cliente
            ));
            $result = $stmt1->fetch();
            foreach ($memoria as $value) {
                $stmt2 = $pdo->prepare('INSERT INTO tb_pedido_memoria (cod_especificacao,cod_memoria,quantidade) VALUES(:cod_especificacao,:cod_memoria,:quantidade)');
                $stmt2->execute(array(
                    'cod_especificacao' => $result['cod'],
                    'cod_memoria' => $value['cod'],
                    'quantidade' => $value['qtd']
                ));       
            }
            foreach ($hd as $value2) {
                $stmt3 = $pdo->prepare('INSERT INTO tb_pedido_hd (cod_especificacao,cod_hd,quantidade) VALUES(:cod_especificacao,:cod_hd,:quantidade)');
                $stmt3->execute(array(
                    'cod_especificacao' => $result['cod'],
                    'cod_hd' => $value2['cod'],
                    'quantidade' => $value2['qtd']
                ));       
            }
            echo json_encode(1);
        }

        
    }
    
    function listarPedidos(){
        $conexao = Conexao::getInstance();
        $stmt = $conexao->prepare("SELECT cod,cliente,DATE_FORMAT(data_pedido, '%d/%m/%y %H:%i:%s') FROM tb_especificacao ORDER BY data_pedido DESC");
        $stmt->execute();
        $result = $stmt->fetchAll();
        echo json_encode($result);
    }
    function buscarPedido($cod){
        $conexao = Conexao::getInstance();
        $stmt = $conexao->prepare("SELECT * FROM tb_especificacao WHERE cod=:cod");
        $stmt->execute(array(
            'cod'=> $cod
        ));
        $pedido = $stmt->fetch();
        if ($stmt->errorCode() == "00000" ) {
            //Busca da Placa Mãe
            $stmt = $conexao->prepare("SELECT cod,Modelo,Marca FROM tb_placamae WHERE cod=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod_placamae"]
            ));
            $resultPM = $stmt->fetch();
            $placamae = ["cod"=>$resultPM["cod"],"text"=>$resultPM["Modelo"],"marca"=>$resultPM["Marca"]];

            //Busca do Processador
            $stmt = $conexao->prepare("SELECT cod,MODELO,ARQ FROM tb_processador WHERE cod=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod_processador"]
            ));
            $resultP = $stmt->fetch();
            $processador = ["cod"=>$resultP["cod"],"text"=>$resultP["MODELO"],"marca"=>$resultP["ARQ"]];
            
            //Busca da Fonte
            $stmt = $conexao->prepare("SELECT COD,MODELO,TITULO FROM tb_fonte WHERE cod=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod_fonte"]
            ));
            $resultF = $stmt->fetch();
            $fonte = ["cod"=>$resultF["COD"],"modelo"=>$resultF["MODELO"],"text"=>$resultF["TITULO"]];
            
            //Busca do Gabinete
            $stmt = $conexao->prepare("SELECT COD,MODELO,TITULO FROM tb_gabinete WHERE cod=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod_gabinete"]
            ));
            $resultG = $stmt->fetch();
            $gabinete = ["cod"=>$resultG["COD"],"modelo"=>$resultG["MODELO"],"text"=>$resultG["TITULO"]];
            
            //Busca das Memorias
            $stmt = $conexao->prepare("SELECT * FROM tb_pedido_memoria WHERE cod_especificacao=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod"]
            ));
            $memoria = $stmt->fetchAll();

            $memorias = array();
            foreach ($memoria as $key => $value) {
                $stmt = $conexao->prepare("SELECT COD,MODELO,MARCA FROM tb_memoria WHERE COD=:cod");
                $stmt->execute(array(
                'cod'=> $value["cod_memoria"]
                ));
                $memoriaEspec = $stmt->fetch();
                $memorias['memoria'.$key] = ["cod"=>$memoriaEspec["COD"],"modelo"=>$memoriaEspec["MODELO"],"text"=>$memoriaEspec["MARCA"],"qtd"=>$value["quantidade"]];
            }
            //Busca dos HDs
            $stmt = $conexao->prepare("SELECT * FROM tb_pedido_hd WHERE cod_especificacao=:cod");
            $stmt->execute(array(
            'cod'=> $pedido["cod"]
            ));
            $hd = $stmt->fetchAll();

            $hds = array();
            foreach ($hd as $key => $value) {
                $stmt = $conexao->prepare("SELECT COD,MODELO,TITULO FROM tb_hd WHERE COD=:cod");
                $stmt->execute(array(
                'cod'=> $value["cod_hd"]
                ));
                $hdEspec = $stmt->fetch();
                $hds['hd'.$key] = ["cod"=>$hdEspec["COD"],"modelo"=>$hdEspec["MODELO"],"text"=>$hdEspec["TITULO"],"qtd"=>$value["quantidade"]];
            }
        }
        $result = ["placamae"=>$placamae,"fonte"=>$fonte,"gabinete"=>$gabinete,"memoria"=>$memorias,"hd"=>$hds,"processador"=>$processador];
        echo json_encode($result);
    }
}
?>