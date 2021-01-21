function destroyer(arr) {
  let arr2 = [...arr]; let arr3 = [];
  //console.log(arr2);
  // take other arguments and remove them from arguments[0]
  for (let i=1; i < arguments.length; i++){
    //console.log(arguments[i]);
    arr.map((item, index, arr1) =>{
      //console.log(arguments[i] + "--"+item + " " + index + " " + arr1);
      console.log("i="+ i + "; "+ arr1.indexOf(arguments[i]) + " -> " + arguments[i]);
       if(arr1.indexOf(arguments[i])!=-1) arr1.splice(arr1.indexOf(arguments[i]),1);
       console.log(arr1 + "] item " + item + " index " + index);
       arr3 = arr1;
    });
  }
  //console.log(arr3);
  return arr3;
}

destroyer([2, 3, 2, 3], 2, 3);
//-----------------------------------------
function destroyer(arr) {
let arr1=[...arr]; let arr2=[];
var newArr = []; 
let rep=[];
  for (let i=1; i <arguments.length; i++){
    arr2.push(arguments[i]);
  }
  
rep = arr1.map((item) => {
	if( arr2.indexOf(item) >= 0) return "r"; 
	else return newArr.push(item) });
console.log(newArr);
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
