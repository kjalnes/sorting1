function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var middle = Math.floor(wholeArray.length/2);
  var firstHalf = wholeArray.slice(0, middle);
  var secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }

    var simpleSplit = split(array);
    var leftArr = mergeSort(simpleSplit[0]);
    var rightArr = mergeSort(simpleSplit[1]);
    var result = [];

    //logic to zip
    while (leftArr.length && rightArr.length){
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }

    if(leftArr.length === 0) {
        result = result.concat(rightArr);
    }

    if(rightArr.length === 0) {
        result = result.concat(leftArr);
    }

    return result;
}


