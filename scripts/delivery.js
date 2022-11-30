document.getElementById("order").addEventListener("click",function(){
    deliver()
})

function deliver(){
    let count=0;
    let aler=setInterval(function(){

        if(count==0){
            alert("Order Placed ")
        }else if (count==2) {
          alert(" Order Packed")
        }else if (count==4) {
            alert("Out for Delivery")
          }else if (count==6) {
            alert("Expect Delivery by 8 Oct")
          }else if (count==8) {
            alert("Thank You for Shopping 😍")
          }
          else if (count>8){
            clearInterval()
            window.location.href="index.html"
          } 
          count++
    },1000)
    
}


let gotohome= document.getElementById("logo")

gotohome.addEventListener("click",function(){
   console.log("checlk")

   window.location.href="index.html"
})