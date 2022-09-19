//Given a column title as appear in an Excel sheet, return its corresponding column number.

//it is guaranteed that string consists of characters from 'A' - 'Z'.

//For example:

  //  A -> 1
  //  B -> 2
 //   C -> 3
 //   ...
 // Z -> 26
  //  AA -> 27
  //  AB -> 28 
 //   ...

// Approach: 
// first of all create a object of all the alphabet;
// who's key is alphabet and value is from 1 to 27;
// Loop over the given str till the 0 to length-1;
// sum all the element and multiply with 26 every time;
// print sum+obj[str[str.length-1]];
//why str[str.length-1] becuase we need to add last char value as value;

function Excel(str){

    let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let counter=1;

    let obj={};

     for(let i=0;i<alpha.length;i++){
            obj[alpha[i]]=counter;
       counter++;
      }
    //console.log(obj)
     
    let sum=0;
     for(let j=0;j<str.length-1;j++){
        sum=(sum+obj[str[j]])*26;      
     }

     console.log(sum+obj[str[str.length-1]]);
    }