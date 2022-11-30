

// let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

// appendimg(newlaunches_data)

// appenddetails(newlaunches_data)

//  appendmrp(newlaunches_data)



// function appendimg(data){

//     let soap=document.getElementById("left")

//     let image=document.createElement("img")
//     image.src=data.img

//     soap.append(image)
// }

// function appenddetails(data){

//      let details=document.getElementById("name")
//     //  let card=document.createElement("div")


//     let title=document.createElement("h2")
//     title.innerText=data.name
   

 

//      details.append(title)
//     // details.append(card)
// }

// function appendmrp(data){
//     let mrp=document.getElementById("mrp")

//     let mrps=document.createElement("h3")
//     mrps.innerText=data.price

//  mrp.append(mrps)
// }


// let addto=document.getElementById("right")

// let btn=document.createElement("button")
// btn.innerText="View Cart";

// addto.append(btn)
// btn.addEventListener("click",function(){
//     tocart()
// })

// let carts = JSON.parse(localStorage.getItem("cart"))||[]
// //console.log(carts)
// function tocart(){

   
  
//     localStorage.setItem("cart",JSON.stringify(newlaunches_data))
//     window.location.href="cart1.html"
// }

// btn.addEventListener("click",()=>{
    
//     cart(newlaunches_data)

//    })
   
   
   
//    let items=JSON.parse(localStorage.getItem("cart")) || []
//    function cart(element,index){
//        //console.log(element )
//    items.push(element);
//    localStorage.setItem("cart",JSON.stringify(items))
   
//    }
// // console.log(items)

// document.getElementById("to").addEventListener("click",function(){
//     to()
// })
// function to(){
//     alert("item added to cart")
// }


let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

appendimg(newlaunches_data)

appenddetails(newlaunches_data)

 appendmrp(newlaunches_data)



function appendimg(data){

    let soap=document.getElementById("left")

    let image=document.createElement("img")
    image.src=data.img

    soap.append(image)
}

function appenddetails(data){

     let details=document.getElementById("name")
    //  let card=document.createElement("div")


    let title=document.createElement("h2")
    title.innerText=data.name
   

 

     details.append(title)
    // details.append(card)
}

function appendmrp(data){
    let mrp=document.getElementById("mrp")

    let mrps=document.createElement("h3")
    mrps.innerText=data.price

 mrp.append(mrps)
}


let addto=document.getElementById("right")

let btn=document.getElementById("bat")
btn.innerText="View Cart";

//addto.append(btn)
btn.addEventListener("click",function(){
    tocart()
})

let carts = JSON.parse(localStorage.getItem("cart"))||[]
//console.log(carts)
function tocart(){

    localStorage.setItem("cart",JSON.stringify(newlaunches_data))

    localStorage.setItem("cart",JSON.stringify(carts))

    window.location.href="cart1.html";

}

btn.addEventListener("click",()=>{
    
       cart(newlaunches_data)
   })
    
   
   
   let items=JSON.parse(localStorage.getItem("cart")) || []
   function cart(element,index){
       //console.log(element )
   items.push(element);
   localStorage.setItem("cart",JSON.stringify(items))
   
   }

   document.getElementById("to").addEventListener("click",function(){
    to()
})
function to(){
    alert("item added to cart")
}

// document.getElementById("bat").addEventListener("click",function(){
//     next()
// })

// function next(){
//     window.location.href="cart1.html"
// }