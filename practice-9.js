/**
 * todo :    Task 13-6A: Find the Second Smallest Number .
 * *Write a function findSecondSmallest that takes an array of numbers and returns the second smallest distinct value. 
 *     
 */


        function findSecondSmallest(numbers) {
                let smallest = Infinity;
                let secondSmallest = Infinity;
        
                for( let currentElement of numbers){

                      if( currentElement  < smallest){
                        secondSmallest = smallest;
                        console.log(secondSmallest);
                        smallest = currentElement;
                        console.log(smallest);
                      }
                    else if( currentElement < secondSmallest &&  currentElement > smallest ){
                          secondSmallest =currentElement;
                     }
                }
        
             return secondSmallest;
        }
        
        console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8



        // todo: Ai give me , this problem ; 

        function findSmallest ( number ){
             let smallest = Infinity;

             for( let element of number){

                if( element < smallest){
                    smallest = element;
                    // console.log(smallest);
                }
             }

             return smallest;
        }

        // console.log(findSmallest([12, 8, 25, 3, 17]));


        // todo: problem largest number use infinity: 

     function    findLargest(numbers) {
            let largest = -Infinity;

            for( let arrElement of numbers){
                if( arrElement > largest){
                    largest = arrElement;
                }

            }
            return largest;
        }
        // console.log(findLargest([12, 8, 25, 3, 17]));



        // todo:   Count Positive smallest Numbers , infinity. 
         function countPositive(numbers) {

            
            let count = 0;

            for( let allElements of numbers){
                if( allElements > 0){
                    // console.log(allElements);
                    count++;

                }
            }
            return count;

         }
        //  console.log(countPositive([-5, 8, -2, 10, 3]));


         // todo: Problem 3: Sum of Array ⭐⭐⭐. 

         function sumArray(numbers){
            let sum = 0; 

            for( let nowElement of numbers){
                sum+= nowElement;

            }
            return sum;

         }

        //  console.log(sumArray([2, 4, 6, 8]));





         /**
          * todo:   🟡 Intermediate - Set 1
          * Problem 1: Find Second Largest ⭐⭐⭐⭐
          */

       function  findSecondLargest(numbers){
            let largest = -Infinity;
            let secondLargest = -Infinity;

            for( let number of numbers){

                 if( number > largest){
                     secondLargest = largest;
                     largest = number

                 }
                 else if(  number < largest &&  number > secondLargest){
                    secondLargest = number;
                 }
            }
            return secondLargest;

         }

         console.log(findSecondLargest([10, 5, 8, 20, 15])); // 15



// todo:        Next problem : smallest even number: 

         function findSmallestEven(numbers){

            let smallest = Infinity;

            for( let currentElement of numbers){
                
                if( currentElement < smallest && currentElement % 2 === 0){
                     smallest = currentElement;
                }
            }

            return smallest;
         }

         console.log(findSmallestEven([15, 18, 7,  10]));



         // todo:    largest odd number : 

         function findLargestOdd(numbers){
            let  largest = -Infinity;

            for( let currentElement of numbers){

                if( currentElement % 2 !== 0){
                      if(currentElement > largest){
                          largest =currentElement;
                      }
                }
            }
            return largest;


         }

         console.log(findLargestOdd([12, 17, 8, 23, 5])); // 23

         // todo: find average of positive number: 

     function     findAveragePositive(numbers){
         let average =0;
          let count =0 ;
           let sum = 0; 
           
         for( let currentElement of numbers){
             if( currentElement > 0){
               
                 sum+= currentElement;
                 count ++;

                

             }
         }
          average = sum /count;
         return average ;
     }

     console.log(findAveragePositive([-5, 10, 20, -2, 30]));


    // todo:        second largest odd number:

     function findSecondLargestOdd(numbers){
        let largest = -Infinity;
        let secondLargestOdd = -Infinity;


        for( let currentElement of numbers){

            if( currentElement % 2 !== 0){

                 if(currentElement > largest){
                     secondLargestOdd = largest;
                    largest =currentElement;
                 }else if( currentElement < largest && secondLargestOdd < currentElement ){
                    secondLargestOdd = currentElement;
                 }

            }   

             }

             return secondLargestOdd;
     }


     console.log(findSecondLargestOdd([23, 17, 19]));

     // 

     function findSecondSmallestPositive(numbers){
        let smallest = Infinity ;
        let secondSmallest = Infinity;

        for ( let currentElement  of numbers){
             if( currentElement  > 0 ){
                if(  currentElement < smallest){
                    secondSmallest = smallest;
                     smallest = currentElement;
                }
                 else if(  currentElement > smallest && currentElement < secondSmallest){
                    secondSmallest = currentElement;
                 }

             } 


        }
        return secondSmallest;
     }

     console.log(findSecondSmallestPositive([-10, 5, -2, 8, 1, 3]));