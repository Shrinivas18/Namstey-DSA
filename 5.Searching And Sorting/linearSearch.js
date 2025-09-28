/*
Linear Search
    Checking each element of an array one by one until you either find the 
    value or reach the end.
*/

var linearSearch = function(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}