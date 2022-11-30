

// import navbar from "./ready-lock-9044/components/navbar.js";

// document.getElementById("navbar").innerHTML=navbar()



let movies = [
    " https://cms-contents.pharmeasy.in/banner/33ce2b5ba8b-Friends-CB-May22.jpg ",
    " https://cms-contents.pharmeasy.in/banner/b77482ca212-Mintop.jpg ",
    " https://cms-contents.pharmeasy.in/banner/4600109971c-OneTouchSPS-CB-Sep22-min.png "
 
]

 



   let id;
   let i = 0
  function start(){

    //    let arr = JSON.parse(localStorage.getItem("getdata")) || []
       let con = document.getElementById("slider")
           con.innerHTML = null
    //    let div = document.createElement("div")
       let img = document.createElement("img")
     
          img.src = movies[i]
          
         
     
    //    div.append(img)
       con.append(img)
       i++
     id =   setInterval(function(){
        if(i==3){
            i = 0
        }
        img.src = movies[i]
           i++
       },2000)
       
  }

     start()

     let gotohome= document.getElementById("logo")

     gotohome.addEventListener("click",function(){
        console.log("checlk")
    
        window.location.href="index.html"
    })