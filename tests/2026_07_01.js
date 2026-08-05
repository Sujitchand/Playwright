
//map - map is collection object which store the data in key value pair

//key will any type of data type like  (String, Number, Boolean, Object, Function).
/* key must be unique
Duplicate does not allow 
insertion order is maintain 

syntax of map  key:value  */

const map=new Map();

map.set("Name","sujit");
map.set("age","20");
map.set("course","playwright");

console.log(map);
  console.log("=====================================");
//how to update the existing

map.set("age","50");
console.log(map);
  console.log("=====================================");
//how to get the data
console.log("name",map.get('Name'));
console.log("age",map.get('age'));
console.log("course",map.get('course'));
  console.log("=====================================");
//check key 
console.log(map.has("Age"));
  console.log("=====================================");
//Size
console.log(map.size);
  console.log("=====================================");
//get the keys 

for (const key of map.keys()) {
    console.log(key);
}
  console.log("=====================================");
//valuse
for (const key of map.values()) {
    console.log(key);
}
  console.log("=====================================");

for (const [key,value] of map.entries()) {
    console.log(`${key}:${value}`);
}