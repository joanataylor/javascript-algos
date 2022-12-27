// function swap(arr) {
//   //your code here
//   var temp = arr[0];
//   arr[0] = arr[arr.length - 1];
//   arr[arr.length - 1] = temp;
//   return arr;

function reverse(arr){
  //your code here!!
  //try to reverse the arr "in place", meaning don't make a new array!
for ( var i = 0; i<arr.length/2; i++){
  var temp = arr[i];
  arr[i] = arr[arr.length-1-i];
  arr[arr.length-1-i]=temp
}

  return arr;
}

var testArr = [4,8,15,16,23,42];
console.log(reverse(testArr));//should print out [42,32,16,15,8,4]

var testArr2 = ["vanilla","chocolate","pistachio","strawberry"];
console.log(reverse(testArr2));//should print out ["strawberry","pistachio","chocolate","vanilla"]