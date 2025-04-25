/*const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
*/
const map=new Map()
{
map.set("IN","India")
map.set("FR","France")
map.set("PK","Pakistan")
}

for(const [key,value] of map)
{
    console.log(key,':-',value);
}