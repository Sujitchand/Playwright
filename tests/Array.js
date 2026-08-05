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