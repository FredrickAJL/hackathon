var div=document.createElement("div");
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">search</button>
<div id="brand"></div>
<div id="name"></div>
<div id="price"></div>
<div id="image_link"></div>
<div id="product_link"></div>
<div id="description"></div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo(){
    try{
    let cc=document.getElementById("txt").value;
    console.log(cc);
    let res= await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${cc}`);
    let res1=await res.json();
    console.log(res1);
    
     
    


let index=res1.length-1;
var result=res1[index].brand;
console.log(result);
document.getElementById("brand").innerText=`Brand:${result}`;

let Nresult=res1[index].name;
console.log(Nresult);
document.getElementById("name").innerText=`Name:${Nresult}`;

let ppri=res1[index].price;
console.log(ppri);
document.getElementById("price").innerText=`Price:${ppri}`;

let imgresult=res1[index].image_link;
console.log(imgresult);
document.getElementById("image_link").innerText=`Image_Link:${imgresult}`;

let prdresult=res1[index].product_link;
console.log(prdresult);
document.getElementById("product_link").innerText=`Product_Link:${prdresult}`;

let descresult=res1[index].description;
console.log(descresult);
document.getElementById("description").innerText=`Description:${descresult}`;

} catch(error){
    console.log(error)
} 
}




