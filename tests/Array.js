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