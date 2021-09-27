<?php
require_once('pedido.php');

$op=$_POST['op'];

$pedido = new Pedido;
if($op==0){
    $cliente=$_POST['cliente'];
    $placamae=$_POST['placamae'];
    $processador=$_POST['processador'];
    $fonte=$_POST['fonte'];
    $gabinete=$_POST['gabinete'];
    $memoria=$_POST['memoria'];
    $hd=$_POST['hd'];
    

    $pedido->cadastrarPedido($cliente, $placamae, $fonte, $gabinete, $processador,$memoria,$hd);
}elseif ($op==1) {
    $pedido->listarPedidos();
}elseif ($op==2) {
    $cod=$_POST['cod'];
    $pedido->buscarPedido($cod);
}
?>