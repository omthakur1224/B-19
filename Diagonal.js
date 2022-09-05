function runProgram(input){
input=input.trim().split('\n')
tc=+input[0];
line=1;
for(k=0;k<tc;k++){
   let n=+input[line];
   line++;
   let arr= input[line].trim().split(" ").map(Number);
   
//creating matrix of size n
   let mat= new Array(n);
   
   let k=0;

   for(let i=0;i<mat.length;i++){

       let nums=new Array(n);

       for(let j=0;j<n;j++){
           nums[j]=arr[k];
           k++;
       }

       mat[i]=nums;
   }
   line++;
   console.log(mat)
}
 
}
console.log("hello")