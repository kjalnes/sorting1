describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
  });
});



describe('mergesort', function(){
  // it('handles an empty array', function(){
  //   expect( mergeSort([]) ).toEqual( [] );
  // });

it('handles splitting a simple array', function(){
    expect( mergeSort([2,1]) ).toEqual( [1,2] );
  });

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([2,1,6,4,3,9,0]) ).toEqual( [0,1,2,3,4,6,9] );
  });
});




  // it("sortarry",function(){
  //   var arr=[9,8,7,6,5,2,3];
  //   expect(bubbleSort(arr)).toEqual([2,3,5,6,7,8,9]);
  // });

  // it("sort",function(){
  //   var arr=[5,1,2,3]
  //   expect(bubbleSort(arr)).toEqual([1,2,3,5]);
  // });

  });

