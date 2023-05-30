let segundos = 0;
let minutos = 0;
let horas = 0;
let milisegundos = 0;
let cronometro;

function reset(){
    segundos = 0
    minutos = 0
    horas = 0
    milisegundos = 0

    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
    document.getElementById("milisegundos").innerHTML = "000";
}

function pause(){
    clearInterval(cronometro);    

}

function init(){
   cronometro = setInterval(() => {
       timer();
   }, 10);
     
}

function timer(){
   if((milisegundos +=10) == 1000){
       milisegundos = 0;
       segundos++;
   }

   if(segundos == 60){
       segundos = 0;
       mintos++;
   }

   if(minutos == 60){
       mintos = 0;
       horas++;
   }

   document.getElementById("horas").innerHTML = returnData(horas);
   document.getElementById("minutos").innerHTML = returnData(minutos);
   document.getElementById("segundos").innerHTML = returnData(segundos);
   document.getElementById("milisegundos").innerHTML = returnData(milisegundos);

}

function returnData(input){
    return input >= 10 ? input : `0${input}`
}

