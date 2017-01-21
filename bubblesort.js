function bubbleSort(arr){

    var swap=true;

if(arr.length===0){
    return [];
}
   while(swap){
       swap=false;
         for(var i=0;i<arr.length;i++){
             var current=arr[i];
             var next=arr[i+1];
             if(current>next){
                 var temp=arr[i];
                 arr[i]=next;
                 arr[i+1]=temp;
                 swap=true;
             }


    }

    }
return arr;
  }


