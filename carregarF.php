<?php
include 'conexao.php';
header('Content-Type: text/html; charset=utf-8');
$pdo = Conexao::getInstance();

//                               0  ,  1   ,   2  ,  3  , 4
  $smtp = $pdo->query('SELECT MODELO,TITULO,DESCRI,FSATA,COD FROM tb_fonte');
  $result = $smtp->fetchAll();

 $cont=1;

foreach ($result as $key => $value) {
  if(count($result)!=$cont){
  echo $value[0]."&|";
  echo $value[1]."&|";
  echo $value[3]."&|";
  echo $value[2]."&|";
  echo $value[4]."$|";
  }else{
  echo $value[0]."&|";
  echo $value[1]."&|";
  echo $value[3]."&|";
  echo $value[2]."&|";
  echo $value[4];
  }
  $cont+=1;
}
 


?>