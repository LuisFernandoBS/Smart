<?php
include 'conexao.php';
header('Content-Type: text/html; charset=utf-8');
  $pdo = Conexao::getInstance();
  //                          MARCA,  id  ,  <p> ,  ARQ,  SP  ,  GP ,   MM   ,  SM , SUPM  ,  FM ,SATA,   T     ,cod
  //                            0  ,  1   ,  2   ,  3  ,  4   ,  5  ,   6    ,  7  ,   8   ,  9  , 10 ,   11    ,12
  $smtp = $pdo->query('SELECT Marca,Modelo,Descri,P_Arq,Soquet,P_Ger,Mem_Slot,Mem_Q,Mem_Sup,Mem_F,Sata,Tam_Placa,cod FROM tb_placamae');
  $result = $smtp->fetchAll();

 $cont=1;

foreach ($result as $key => $value) {
  if(count($result)!=$cont){
  echo $value[1]."&|";
  echo $value[0]."&|";
  echo $value[3]."&|";
  echo $value[7]."&|";
  echo $value[8]."&|";
  echo $value[6]."&|";
  echo $value[9]."&|";
  echo $value[4]."&|";
  echo $value[5]."&|";
  echo $value[10]."&|";
  echo $value[11]."&|";
  echo $value[2]."&|";
  echo $value[12]."$|";
  }else{
  echo $value[1]."&|";
  echo $value[0]."&|";
  echo $value[3]."&|";
  echo $value[7]."&|";
  echo $value[8]."&|";
  echo $value[6]."&|";
  echo $value[9]."&|";
  echo $value[4]."&|";
  echo $value[5]."&|";
  echo $value[10]."&|";
  echo $value[11]."&|";
  echo $value[2]."&|";
  echo $value[12];
  }
  $cont+=1;
}
 


?>