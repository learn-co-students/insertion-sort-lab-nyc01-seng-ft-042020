
function findMinAndRemove(array){
    //set min to first in array 
    //loop through to compare and set new min if its lower
    //removes the min with .splice and min index
    //returns then min
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) { 
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1)
    return min
}

function selectionSort(array){
    //define newMin variable 
    //new array called sorted to have the new min be pushed into
    let newMin; 
    let sorted = [];
    while (array.length != 0) {
        newMin = findMinAndRemove(array);
        sorted.push(newMin); 
    }
    //when loop is done going through every element of 
    //array it returns the new sorted array
    return sorted;
}
