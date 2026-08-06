//1) Q1. Remove Duplicates Given array:
//[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7]

function uniqueElement(){
    let arr=[1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7];
    let unique=[];
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<unique.length;j++){
            if(arr[i]==unique[j]){
                isDuplicate=true;
                break;
            }

        }
        if(!isDuplicate){
            unique.push(arr[i])
        }

    }
    console.log(unique);
}
uniqueElement();

//Q2. Find Second Largest Number 
//[45, 89, 23, 89, 56, 12, 78, 34]
function  FindSecondLargestNumber(arr1){
    let largest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>largest){
            secondLargest=largest;
            largest=arr1[i];
        }else if(arr1[i]>secondLargest && arr1[i]!==largest){
            secondLargest=arr1[i];
        }

    }
    return secondLargest;
}
let arr1=[45, 89, 23, 89, 56, 12, 78, 34];
console.log(FindSecondLargestNumber(arr1));

//Q3. Reverse an Array [1, 2, 3, 4, 5]
function reverse(arr2){
let start=0
let end=arr2.length-1;
while(start<end){
    let temp=arr2[start];
    arr2[start]=arr2[end]
    arr2[end]=temp;
    start++;
    end--;
}
return arr2;

}
let arr2=[1, 2, 3, 4, 5];
console.log(reverse(arr2));
//Q4. Find Missing Number [1, 2, 3, 5, 6, 7, 8]
function missingNumber(){
let arr3=[1, 2, 3, 5, 6, 7, 8];
let missingNumber=0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i+1]!==arr3[i]+1){
        missingNumber=arr3[i]+1;
        console.log(missingNumber);
        break;
    }
}
}
missingNumber();

//Q5 findDuplicate let arr4= [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5];
function findDuplicate(){
let arr4= [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5];
let duplicate=[];

for(let i=0;i<arr4.length;i++){
    for(let j=i+1;j<arr4.length;j++){
        if(arr4[i]===arr4[j]){
            if(!duplicate.includes(arr4[i])){
                duplicate.push(arr4[i])
                break;
            }

        }

    }

}
console.log(duplicate);
}
findDuplicate();

//Q6-merge array   let arr1 = [1, 3, 5, 7, 9];
             //  let arr2 = [2, 4, 6, 8, 10];

    function mergereArray(){
        let arr1 = [1, 3, 5, 7, 9];
       let arr2 = [2, 4, 6, 8, 10];
        let merger=[];
       let i=0;
       let j=0;

       while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
                merger.push(arr1[i])
                i++;
        }else{
            merger.push(arr2[j]);
            j++
        }

       }
       while(i<arr1.length){
         merger.push(arr1[i])
                i++;
       }
       while(j<arr2.length){
         merger.push(arr2[j]);
            j++
       }
       console.log(merger);

    }
     mergereArray();
     // 2. AdditionOfNumbers (sum of digits) let number = 2345;
      function AdditionOfnumber(){
        let number = 2345;
        let sum=0;
        while(number>0){
            let digit=number%10;
             sum=sum+digit;
             number=Math.floor(number/10);

        }
        console.log(sum);
          
      }
AdditionOfnumber();

//// 9. FactorialNumber  number=5

function factorialNumber(){
    let number=5;
    let factorial=1;
    for(let i=1;i<=number;i++){
        factorial=factorial*i;
    }
    console.log(factorial);
}
factorialNumber();
// 10.FibonacciSeries 
function  FibonacciSeries(){
    let num=10;
    let friest=0;
    let second=1;
    console.log(friest);
    console.log(second);
    for(let i=3;i<=num;i++){

        let next= friest+second;
        console.log(next);
        friest=second;
        second=next;
    }
}
FibonacciSeries()
//11) amstrong Number
function  amstrongNumber(){
    let number=153;
    let sum=0;
    let original=number;
    while(number>0){
        let digit=number%10;
        sum=sum+(digit*digit*digit);
        number=Math.floor(number/10)

    }
    if(original==sum){
         console.log("This is the amstrong number");
    }else{
         console.log("This is the notamstrong number");
    }
console.log('/n')


}
amstrongNumber();
//// 12. CheckPositiveOrNegativeExample
function positiveOrnegavtiveNUmber(){
    let number=-10
    if(number>0){
        console.log("This is the postive number");
    }else if(number<0){
          console.log("This is the negative number");
    }else {
        console.log("Zero");
    }
}
positiveOrnegavtiveNUmber();
// 13. LeapYear
function leapYear(){
    let year=2024;
    if(year%4===0 && year%100!==0 || year%400===0){
        console.log("This is the leap year");
    }else{
        console.log("This is not leap year");
    }
}
leapYear();
//14 palindrom Number

function palindrom(){
    let number=121;
    let orignal=number;
    let reverse=0;
    while(number >0){
        let digit= number%10;
          reverse=reverse*10+digit;
          number=Math.floor(number/10);
    }
    if(orignal===reverse){
        console.log("This is the palindrom number");
    }else{
         console.log("This is the palindrom number");
    }
}
palindrom();
//15  SwappingTwonumber
function SwappingTwoNwithoutThirdvar(){
    let a=10;
    let b=20;
     console.log("berode a=",a);
       console.log("berode b=",b);
     a=a+b;
      b=a-b;
      a=a-b
       console.log("after a=",a);
      console.log("after b=",b);


}
SwappingTwoNwithoutThirdvar();

//16 SwappingTwonumber using third variable

function withThridVariabel(){
    let a=10;
    let b=20;
    console.log("before a=",a );
    console.log("before b=",b );

    let temp=a;
    a=b;
    b=temp;
    console.log("after a=",a);
     console.log("after b=",b);
}
//17 .PrimeNumber
function PrimeNumber(){
    let number=17;
    let isPrime=true;
    if(number<=0){
        isPrime=false;
    }else{
        for(let i=2;i<number;i++){
            if(number%i===0){
                isPrime=false;
                break;
            }
        }
    }
    if(isPrime){
        console.log("prime number")
    }else{
         console.log("Not prime number")
    }
}
PrimeNumber();