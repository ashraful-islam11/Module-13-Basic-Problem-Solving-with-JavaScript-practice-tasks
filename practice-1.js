// todo:     Practice task - 1. 
/**
 ** Task 13-2A: Hot, Cold, or Normal
 ** Problem Statement:
 ** Write a function checkTemperature that takes a temperature (in Celsius) and returns "Hot" if it is 30 or above,  "Cold" if it is 15 or below, and "Normal" otherwise.

 */

 function checkTemperature( tem){
    // Condition check : 
     if( tem >= 30){
         return "Hot";
     }
     
     else if( tem <= 15){
      return "Cold";
     }

     else{
      return "Normal";
     }

 }

 const checkOver = checkTemperature(35);
 console.log(checkOver);

 const checkLow = checkTemperature(10);
 console.log(checkLow);

 const checkNormal = checkTemperature( 25);
 console.log(checkNormal);
