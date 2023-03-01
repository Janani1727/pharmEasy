

// let carts = JSON.parse(localStorage.getItem("cart")) 
//let items=JSON.parse(localStorage.getItem("cart")) || []

//console.log("cart:",items)
// let count= carts.length
// console.log(count)
// appendimg(carts)

// appenddetails(carts)

//  appendmrp(carts)

//  appendrs(carts)

//  appendRs(carts)


  


// function appendimg(data){
//     console.log(data)

//    data.forEach(el => {
//     let soap=document.getElementById("items")

//     let card=document.createElement("div")


//     let image=document.createElement("img")
//     image.src=el.img
//     console.log(image)

//     let title=document.createElement("h2")
//     title.innerText=el.name

//     let mrps=document.createElement("p")
//     mrps.innerText=el.price

//     let del = document.createElement('p');
//     del.innerText = 'Delivery By 08 Oct - 09 Oct'

//     let delImg = document.createElement('img');
//     delImg.src='https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg'
     
//     card.append(image,title,mrps,del,delImg);
//     soap.append(card)
//    });

   
// }



// function appendimg(data){
//     console.log(data)

 
//     let soap=document.getElementById("left")

//     //let card=document.createElement("div")


//     let image=document.createElement("img")
//     image.src=data.img
//     console.log(image)
     
    
//     soap.append(image)


   
// }

// function appenddetails(data){

   

//      let details=document.getElementById("name")
//     // let card=document.createElement("div")
     
//     //  let card=document.createElement("div")


//     let title=document.createElement("h2")
//     title.innerText=data.name

 
   
//      details.append(title)
//     // details.append(card)

// }

// function appendmrp(data){

   

//       //  let card=document.createElement("div")
//     let mrp=document.getElementById("mrp")

//     let mrps=document.createElement("p")
//     mrps.innerText=data.price

//  mrp.append(mrps)


// }


// function appendrs(data){
//     let mrp=document.getElementById("rs")

//     let mrps=document.createElement("h6")
//     mrps.innerText=data.price

//  mrp.append(mrps)

// }


// function appendRs(data){

   
//     let mrp=document.getElementById("Rs")

//     let mrps=document.createElement("h6")
//     mrps.innerText=data.price

//  mrp.append(mrps)


// }

// document.getElementById("dele").addEventListener("click",function(){
//     Dele()
// })

// function Dele(){
//     document.getElementById("items").innerHTML=null
// }

// document.getElementById("msec").addEventListener("click",function(){
//     address()
// })

// function address(){
//     window.location.href="delivery.html"
// }

// let gotohome= document.getElementById("logo")

// gotohome.addEventListener("click",function(){
//    //console.log("checlk")

//    window.location.href="index.html"
// })




let carts = JSON.parse(localStorage.getItem("cart")) ||[]
console.log(carts)
display(carts)

function display(data){
    console.log(data)

   data.forEach(el => {
    let soap=document.getElementById("items")

    let card=document.createElement("div")
    card.style.border="1px dashed gray"
    card.style.display="flex"
    card.style.marginTop="10px"
    
    let left=document.createElement("div")


    let middle=document.createElement("div")


     
    // let hi=document.getElementById("total")
    // let hello=document.getElementById("div")
    // hello.innerText=el.price




    let image=document.createElement("img")
    image.src=el.img


    let title=document.createElement("h2")
    title.innerText=el.name
    title.style.fontSize="20px"
    title.style.marginLeft="50px"
    title.style.marginTop="20px"

    let mrps=document.createElement("p")
    mrps.innerText=el.price
    mrps.style.marginLeft="50px"

    let del = document.createElement('p');
    del.innerText = 'Delivery By 08 Oct - 09 Oct'
    del.style.marginLeft="50px"

    // let delImg = document.createElement('img');
    // delImg.src='https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg'
    // delImg.style.width="40px"
    // delImg.style.height="40px"
    // delImg.style.marginTop="10px"
     

    left.append(image)
    middle.append(title,mrps,del)
    // right.append()

    card.append(left,middle);
    soap.append(card)

    // hi.append(hello)
   });

     
   
}




document.getElementById("del").addEventListener("click",function(){
    Dele(index)
})

function Dele(){

}

document.getElementById("msec").addEventListener("click",function(){
    address()
})

function address(){
    window.location.href="delivery.html"
}

let gotohome= document.getElementById("logo")

gotohome.addEventListener("click",function(){
   //console.log("checlk")

   window.location.href="index.html"
})