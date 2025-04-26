/*const obj={
    JS:"JavaScript",
    HTML:"Hyper Text Markup Language",
    CPP:"C++" 
}
for(const key in obj)
{
    console.log(obj[key])
}

let num = [45,345,34,5,534,534,534,53,5345,34,34,53,34,5]
let newnum = console.log(num.filter((num)=>num>100))
let nayanumber= num.map((n)=>n+10)
console.log(nayanumber);
*/
const num=[1,2,3]
const total = num.reduce((acc,currval)=>{return acc+currval},0)
console.log(total)