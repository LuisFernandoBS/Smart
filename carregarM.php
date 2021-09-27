<?php
include 'conexao.php';
header('Content-Type: text/html; charset=utf-8');
$pdo = Conexao::getInstance();

//                              0  ,   1  ,  2 ,    3     ,    4     ,5
  $smtp = $pdo->query('SELECT MARCA,MODELO,TIPO,FREQUENCIA,CAPACIDADE,COD FROM tb_memoria');
  $result = $smtp->fetchAll();

 $cont=1;

foreach ($result as $key => $value) {
  if(count($result)!=$cont){
  echo $value[1]."&|";
  echo $value[2]."&|";
  echo $value[3]."&|";
  echo $value[4]."&|";
  echo $value[0]."&|";
  echo $value[5]."$|";
  }else{
  echo $value[1]."&|";
  echo $value[2]."&|";
  echo $value[3]."&|";
  echo $value[4]."&|";
  echo $value[0]."&|";
  echo $value[5];
  }
  $cont+=1;
}
 


?>