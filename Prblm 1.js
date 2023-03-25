// To compare to Json Objects:

let obj1 = {"name" : "person1" , "age" : 5};
let obj2 = {"age" : 5 , "name" : "person1"};

let jsonString1 = JSON.stringify(obj1); //  object to  JSON string
let jsonString2 = JSON.stringify(obj2); //  object to  JSON string

console.log(jsonString1 === jsonString2);

