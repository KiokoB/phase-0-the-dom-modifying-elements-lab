// Write your code here!
const main = document.querySelector("#main")
//console.log(main)
main.remove("main");
const newHeader = document.createElement("h1");
//newHeader.nodeName = h1;
//document.body.append(newHeader)
// console.log(newHeader)
newHeader.id = "victory"
// console.log(newHeader)
newHeader.innerHTML = "Bianca Kioko is the champion"
console.log(newHeader.innerHTML)