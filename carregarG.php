<?php
include 'conexao.php';
header('Content-Type: text/html; charset=utf-8');
  $pdo = Conexao::getInstance();
//                               0  ,  1   ,   2  ,3,  4 ,  5 , 6
  $smtp = $pdo->query('SELECT MODELO,TITULO,DESCRI,T,SHD3,SHD2,COD FROM tb_gabinete');
  $result = $smtp->fetchAll();

 $cont=1;

foreach ($result as $key => $value) {
  if(count($result)!=$cont){
  echo $value[0]."&|";
  echo $value[1]."&|";
  echo $value[3]."&|";
  echo $value[4]."&|";
  echo $value[5]."&|";
  echo $value[2]."&|";
  echo $value[6]."$|";
  }else{
  echo $value[0]."&|";
  echo $value[1]."&|";
  echo $value[3]."&|";
  echo $value[4]."&|";
  echo $value[5]."&|";
  echo $value[2]."&|";
  echo $value[6];
  }
  $cont+=1;
}
 


?>