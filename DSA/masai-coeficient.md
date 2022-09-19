# Problem : You are given an array A of length n and a number k. A number A[i] is Masaian if there exists a contiguous subarray that contains exactly k numbers that are strictly greater than A[i]. The specialty of an array is defined as the sum of all Masaian numbers that are available in the array. Your task is to determine the specialty of the provided array.

# n=5 k=2
# arr=4 3 2 7 8
# ans:9
Algorithm:

    step-1:- Just try to understand the problem clearly. Because its very easy question but the wording used here is little bit tricky. 

    step-2:- It is trying to say that we have to sum of the masain number.

    step-3 Now we have to understand what this masain number is? Masain no is number who is present in the subArray of lenght k(which is given in question) of Array and whick is greater than the arr[i](which is the current index of array).

    step-4 Its a little tricky to understand that how is it possible that when we are taking a subarray then all element of array are greater.

    step-5 So the logic comes here that suppose if this array is like. [2,3,4,7,8]


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
 
let input1=readLine().trim().split(" ").map(Number);
let x=input1[0];
let y=input1[1];
let input2=readLine().trim().split(" ").map(Number);
SpecialSequence(y,input2);
 
function SpecialSequence(n,array){
    array.sort((a,b)=>a-b);
    let sum=0;
    let index_length=array.length-1-n;
    for(let i=0;i<=index_length;i++){
        // console.log(array[i])
        sum+=array[i];
    }
    console.log(sum);
}
 