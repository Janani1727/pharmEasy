



 var slideshow = () => {
    let arr =[ "https://cms-contents.pharmeasy.in/banner/fcf06e6cf90-STAYHOMEDWEB.jpg?dim=1440x0&dpr=1.25&q=100",
    "https://cms-contents.pharmeasy.in/banner/3b30799ae78-COVIDFREE8JUNE.jpg?dim=1440x0&dpr=1.25&q=100",
    "https://cms-contents.pharmeasy.in/banner/fef1ef3c06a-DWEBCOVID.jpg?dim=1440x0&dpr=1.25&q=100",]


    let i=0;
    let cont = document.getElementById("slideshow")
    cont.innerHTML=null
    let img=document.createElement("img")
    img.src=arr[0]
    cont.append(img)
    i++;
    setInterval(function(){
        if(i==2){
            i=0
        }
        img.src=arr[i]
        cont.append(img)
        i++
    },3000)

}
slideshow()



let arr2=[
    {
        img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
        name:"Medicine",
        off:"UPTO 20% OFF"
        
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
        name:"Lab Test",
        off:"UPTO 70% OFF"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
        name:"Health Care",
        off:"UPTO 60% OFF"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
        name:"Health Blogs",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
        name:"Plus",
        off:"SAVE 5% EXTRA"
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
        name:"Offers",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0",
        name:"Surgeries",
        off:""
    },
    {
        img:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
        name:"Value Store",
        off:"UPTO 50% OFF"
    }
]
localStorage.setItem("category",JSON.stringify(arr2))
let data = JSON.parse(localStorage.getItem("category"))||[]

function appendCategories(data){
    let data_div=document.getElementById("category")

    data.forEach((el,index)=>{

        let div = document.createElement("div")

        div.id="container"
     
   
     

        div.id="container";
        // div.addEventListener("click",function(){
        //     if(arr2[0]){
        //         window.location.href="medicine.html"
        //     }
          
        // })

        
        let image=document.createElement("img")
        image.src=el.img
        image.setAttribute("id","image")

        let hr=document.createElement("hr")

        let name=document.createElement("h3")
        name.innerText=el.name
        name.style.marginTop="10px"
      



        let offer=document.createElement("h3")
        offer.innerText=el.off
        offer.style.color="red"
        offer.style.marginTop="10px"



        div.append(image,hr,name,offer)
        data_div.append(div)



        if([arr2[index[name]]]==="medicine"){
        
        }


    })



}
appendCategories(data)


let new_launches=document.getElementById("new_launches")


let new_launches_p= document.createElement("h2")
new_launches_p.innerText="New Launches"
new_launches_p.style.fontSize="1.5em"
new_launches_p.style.fontSize= "30px"

let para= document.createElement("p")
para.innerText="New wellness range just for you!"
para.style.color="grey"
para.style.marginTop="15px"
para.style.fontSize="20px"
para.style.lineHeight="1"

new_launches.append(new_launches_p,para)





let newlaunches_arr =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U65148/baidyanath-nagpur-mahamanjisthadi-kadha-ayurvedic-blood-purifier-syrup-450-ml-2-1655533130.jpg?dim=1440x0",
        name:"Baidyanath Nagpur Mahamanjisthadi Kadha, Ayurvedic Blood Purifier Syrup, 450 Ml",
        price:"MRP ₹210.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/P71315/pharmeasy-vitamin-b-complex-with-folic-acid-improves-energy-heart-eye-health-bottle-of-60-2-1659444053.jpg?dim=1440x0",
        name:"Pharmeasy Vitamin B Complex With Folic Acid - Improves Energy - Heart & Eye Health - Bottle Of 60",
        price:"MRP ₹649.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U13516/fixderma-kairfoll-anti-hair-loss-conditioner-200ml-2-1652259133.jpg?dim=1440x0",
        name:"Fixderma Kairfoll Anti Hair Loss Conditioner 200ml",
        price:" MRP ₹825.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0",
        name:"Godrej Hit Flies & Mosquitoes Black Insect Killer (Spray)-400 Ml",
        price:"MRP ₹225.00"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0",
        name:"Liveasy Wellness Pain Relief Spray 55gm",
        price:"MRP ₹199.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E00158/all-out-ultra-mosquito-repellant-refills-pack-of-6-2-1645196377.jpg?dim=1440x0",
        name:"All Out Ultra Mosquito Repellant Refills (Pack Of 6)",
        price:"MRP ₹438.00"
    },




]

localStorage.setItem("newlaunches",JSON.stringify(newlaunches_arr))
let newlaunches_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appendNewLaunches(newlaunches_arr){

let new_launches_div=document.querySelector(".new_launches_div")


newlaunches_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","new_launc_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify(newlaunches_arr[index]))
        window.location.href="product.html"
    })
    
    let image_div=document.createElement("div")
    image_div.setAttribute("id","newlaunchimage_div")
    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","new_launches_img")
   
    let div2=document.createElement("div")
    div2.setAttribute("id","inside_div")
    div2.append(image)
    image_div.append(div2)

    let content_div=document.createElement("div")

    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.setAttribute("id","new_launches_name")
    // name.style.fontSize="20px"
    // name.style.display=""
    // name.style. 
    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="10px"
    price.style.textAlign="left"
    content_div.append(name,price )

    div.append( image_div,content_div)
    new_launches_div.append(div)
})

}
 appendNewLaunches(newlaunches_arr)

let login_div2=document.querySelector(".offer_login_div")
    login_div2.addEventListener("click",function(){
    window.location.href="login.html"
})




let shop_by_cat=[
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=360x0",
        title:"Covid essentials"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=360x0",
        title:"Personal care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=360x0",
        title:"Health food and drinks"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=360x0",
        title:"Beauty"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=360x0",
        title:"Skin care"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=360x0",
        title:"Home care"
    }
]




function appendShopBYCategories(shop_by_cat){
    let shop_by_cat_div=document.getElementById("shop_by_categories")


    shop_by_cat.forEach(function(el,index){

        

        let div = document.createElement("div")
        div.setAttribute("id","shopBycatinnerdiv")

        let image_div=document.createElement("div")
        image_div.setAttribute("id","imagediv")

        let image=document.createElement("img")
        image.src=el.img
        

        image_div.append(image)


        let title = document.createElement("p")
        title.innerText=el.title
        title.style.marginTop="20px"


        div.append(  image_div,title)

        shop_by_cat_div.append(div)


    })
}
appendShopBYCategories(shop_by_cat)




let popularincity_arr =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1440x0",
        name:"Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        price:"MRP ₹849.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/G19614/liveasy-essentials-adhesive-bandages-box-of-100-1-1641791579.jpg?dim=1440x0",
        name:"Liveasy Essentials Adhesive Bandages - Box Of 100",
        price:"MRP ₹199.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1654077435.jpg?dim=1440x0",
        name:"Accu-Chek Active Glucometer Test Strips Box Of 50",
        price:" MRP ₹1049.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I00631/cetaphil-gentle-skin-cleanser-250ml-2-1632774266.jpg?dim=1440x0",
        name:"Cetaphil Gentle Skin Cleanser - 250ml",
        price:"MRP ₹563.00"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1664428023.jpg?dim=1440x0",
        name:"Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        price:"MRP ₹399.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/105900/himalaya-liv52-ds-tablets-60s-2-1654078613.jpg?dim=1440x0",
        name:"Himalaya Liv.52 Ds Tablets - 60's",
        price:"MRP ₹170.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-blue-2-1656420198.jpg?dim=1440x0",
        name:"Pharmeasy Hot Water Bag - Relieves Pain - Relaxes Sore Muscles - Improves Blood Supply - Blue - 2l",
        price:"MRP ₹349.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/266249/depura-60000-iu-vitamin-d3-oral-solution-helps-bones-healthy-aids-in-boosting-immunity-sugarfree-2-1654077895.jpg?dim=1440x0",
        name:"Depura, 60000 Iu Vitamin D3 Oral Solution,Helps Bones Healthy, Aids In Boosting Immunity, Sugarfree",
        price:"MRP  ₹94.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1641787823.jpg?dim=1440x0",
        name:"Unwanted 72 Strip Of 1 Tablet",
        price:"MRP ₹110.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1654166925.jpg?dim=1440x0",
        name:"Accu-Chek Instant Glucometer Test Strips Box Of 50",
        price:"MRP ₹1049.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I40164/durex-extra-dots-packet-of-10-condoms-3-1654166124.jpg?dim=1440x0",
        name:"Durex Extra Dots Packet Of 10 Condoms",
        price:"MRP ₹245.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I39010/whisper-ultra-clean-size-xl-plus-sanitary-pads-packet-of-44-2-1654166470.jpg?dim=1440x0",
        name:"Whisper Ultra Clean Size Xl Plus Sanitary Pads Packet Of 44",
        price:"MRP ₹549.00"
    },




]

localStorage.setItem("newlaunches",JSON.stringify(popularincity_arr))
let popularincity_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appendPopularInCity(popularincity_arr){

let popularInIcity_div=document.getElementById("popularincity")


popularincity_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","popularInIcity_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify(popularincity_arr[index]))
        window.location.href="product.html"
    })
    
let image_div=document.createElement("div")
image_div.setAttribute("id","imageofpopularincity")



    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","popularIncity_img")
    image_div.append(image)
   

    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.setAttribute("id","popularInCity_name")
   
   
    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="10px"
    price.style.textAlign="left"


    div.append( image_div,name,price)
    popularInIcity_div.append(div)
})

}
appendPopularInCity(popularincity_arr)

document.querySelector(".offer_login_div").addEventListener("click",function(){
    console.log("check")
    window.location.href="login.html"
})



let healthcare_div_arr=[
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/777a9fe8c6a-6.png?dim=360x0"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/ac76496b9bd-1.png?dim=360x0"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/1ffc6f347ca-3.png?dim=360x0"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/a33c6275845-10.png?dim=360x0"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/02892662de6-8.png?dim=360x0"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/f09b27cd9f0-2.png?dim=360x0"
    }
]


function appendhealthcareImg(healthcare_div_arr){

    healthcare_div_arr.forEach(function(el,index){
        let div = document.createElement("div")
        




        let image=document.createElement("img")
        image.src=el.img
        image.setAttribute("id","healthcareimg")

 let p_offer = document.createElement("p")
 p_offer.innerText=""


    
        div.append(image)

        document.getElementById("healthcare_div").append(div)
    })


}
appendhealthcareImg(healthcare_div_arr)



document.getElementById("offer").addEventListener("click",function(){
    window.location.href="offer.html"
})




let superchargeImmunit_arr=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1664428024.jpg?dim=1440x0",
        name:"Pharmeasy Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        price:"MRP ₹419.40"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000591/abzorb-antifungal-dusting-powder-100gm-2-1656944432.jpg?dim=1440x0",
        name:"Abzorb Antifungal Dusting Powder 100gm",
        price:"MRP ₹120.70"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/D18153/econorm-250mg-strip-of-6-capsules-7-1641307470.jpg?dim=1440x0",
        name:"Econorm 250mg Strip Of 6 Capsules",
        price:"MRP ₹206.55"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/I14509/protectis-bottle-of-5ml-baby-drops-box-front-1-1612364894.jpg?dim=1440x0",
        name:"Protectis Bottle Of 5ml Baby Drops",
        price:"MRP ₹977.08"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/209762/depiwhite-cream-15ml-2-1664257598.jpg?dim=1440x0",
        name:"Depiwhite Cream 15ml",
        price:"MRP ₹502.50"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/I13351/atarax-anti-itch-lotion-100ml-1-1641537029.jpg?dim=1440x0",
        name:"Atarax Anti-Itch Lotion, Quick Relief From Itching, Soothing Action Of Aloe Vera & Glycerine, 100ml",
        price:"MRP ₹342.98"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1661760071.jpg?dim=1440x0",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price:"MRP ₹311.48"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/I14509/protectis-bottle-of-5ml-baby-drops-box-front-1-1612364894.jpg?dim=1440x0",
        name:"Vantej Toothpaste Hypersensitive Tube Of 50 G",
        price:"MRP ₹129.21"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/B11296/dr-vaidyas-my-prash-chyawanprash-for-daily-health-500-gms-2-1649924989.jpg?dim=1440x0",
        name:"Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
        price:"MRP ₹399.50"
    }
]







localStorage.setItem("newlaunches",JSON.stringify( superchargeImmunit_arr))
let superchargeImmunit_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appendsuperchargeImmunity(superchargeImmunit_arr){

let  superchargeImmunity_div=document.getElementById("superchargeImmunity")


superchargeImmunit_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","superchargeImmunity_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify( superchargeImmunit_arr[index]))
        window.location.href="product.html"
    })
    
let image_div=document.createElement("div")
image_div.setAttribute("id","imageofsuperchargeImmunity")



    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","superchargeImmunity_img")
    image_div.append(image)
   
    let name_div=document.createElement("div")
    name_div.setAttribute("id","namePrice_div")

    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.setAttribute("id","superchargeImmunity_name")
   
   
    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="30px"
    price.style.textAlign="left"
    price.style.fontSize="20px"

    name_div.append(name,price)


    div.append( image_div,name_div)
    superchargeImmunity_div.append(div)
})

}
appendsuperchargeImmunity(superchargeImmunit_arr)



let featuredBrand_arr=[
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/a559f294d43-Vicks-min.png?dim=1440x0",
        title:"Vicks"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0",
        title:"Himalaya"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0",
        title:"Pharmeasy"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/83ada4a51e4-5849cd97369-App-Neurobion-min.png?dim=1440x0",
        title:"Neurobion"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/c7cfaa4b6c9-Cetaphil_v2.png?dim=1440x0",
        title:"Cetaphil"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",
        title:"Revital"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0",
        title:"Jhonson's"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/d0a5680bd13-OneTouchApp.jpg?dim=1440x0",
        title:"One Touch"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/d0a5680bd13-OneTouchApp.jpg?dim=1440x0",
        title:"Huggies"
    },
    {
        img:"https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0",
        title:"Sugar Free"
    }
]

function appendfeatureBrand(featuredBrand_arr){
    let featureBrand_div=document.getElementById("featuredBrands")

    featuredBrand_arr.forEach(function(el,index){

        let div = document.createElement("div")

        let image=document.createElement("img")
        image.src=el.img
        image.setAttribute("id","featureBrand_img")

        let title=document.createElement("p")
        title.innerText=el.title
        title.style.fontSize="22px"
        title.style.color="#30363c"
        title.style.fontFamily="sans-serif"



        div.append(image,title)

        featureBrand_div.append(div)
    })

}
appendfeatureBrand(featuredBrand_arr)




let dealsoftheday_arr=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U92247/toothsi-electro-rechargeable-electric-toothbrush-with-2-replaceable-heads-sonic-technology-1-1650108808.jpg?dim=1440x0",
        name:"Toothsi Electro Rechargeable Electric Toothbrush (With 2 Replaceable Heads) - Sonic Technology",
        price:"MRP ₹899.55"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1440x0",
        name:"Neurobion Forte Tablet 30's",
        price:"MRP ₹31.23"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/082015/himalaya-gasex-tablets-100s-2-1641399057.jpg?dim=1440x0",
        name:"Himalaya Gasex Tablets - 100's",
        price:"MRP ₹136.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=1440x0",
        name:"Revital H Men Multivitamin With Calcium, Zinc & Ginseng For Immunity, Strong Bones & Energy (30 Capsules)",
        price:"MRP ₹263.55"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/V31511/liveasy-essentials-diabetic-orthopedic-slippers-style-2-women-brown-size-uk-7-2-1655896250.jpg?dim=1440x0",
        name:"Liveasy Essentials Diabetic & Orthopedic Slippers (Style 2) - Women Brown- Size Uk-7",
        price:"MRP ₹519.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/M15866/kidrich-d3-bottle-of-5ml-oral-solution-1-1663157621.jpg?dim=1440x0",
        name:"Kidrich D3 Bottle Of 5ml Oral Solution",
        price:"MRP ₹38.25"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/269287/muout-plus-powder-119gm-2-1641531916.jpg?dim=1440x0",
        name:"Muout Plus Powder 119gm",
        price:"MRP ₹266.48"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/L69317/new-polybion-active-sugar-free-bottle-of-100ml-syrup-1-1648457630.jpg?dim=1440x0",
        name:"New Polybion Active Sugar Free Bottle Of 100ml Syrup",
        price:"MRP ₹76.67"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1664427941.jpg?dim=1440x0",
        name:"Everherb (By Pharmeasy) Aloe Vera Juice With Pulp - Rejuvenates Skin & Hair - 1 Litre Bottle",
        price:"MRP ₹199.50"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/X96596/power-gummies-hair-vitamins-with-biotin-multivitamin-gummies-2-month-pack-bottle-120-gummies-1-1654233091.jpg?dim=1440x0",
        name:"Power Gummies Hair Vitamins With Biotin Multivitamin Gummies (2 Month Pack) Bottle - 120 Gummies",
        price:"MRP ₹2185.00"
    }
]



localStorage.setItem("newlaunches",JSON.stringify( dealsoftheday_arr))
let dealoftheday_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appenddealoftheday(dealsoftheday_arr){

let  dealsoftheday_div=document.getElementById("dealsoftheday")


dealsoftheday_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","dealsoftheday_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify(dealsoftheday_arr[index]))
        window.location.href="product.html"
    })
    
let image_div=document.createElement("div")
image_div.setAttribute("id","dotday_img")



    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","dealsoftheday_img")
    image_div.append(image)
   


    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.style.textAlign="center"
    name.setAttribute("id","dealsoftheday_name")
   
   
    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="20px"
    price.style.color="#30363c"
    price.style.fontFamily="sans-serif"
    price.style.fontSize="20px"

    


    div.append( image_div,name,price)
    dealsoftheday_div.append(div)
})

}
appenddealoftheday(dealsoftheday_arr)







let spotlight_arr=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1664428023.jpg?dim=360x0",
        name:"Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        price:"MRP ₹207.48"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=360x0",
        name:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price:"MRP ₹569.75"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1661760039.jpg?dim=360x0",
        name:"Liveasy Wellness Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        price:"MRP ₹384.54"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=360x0",
        name:"Pharmeasy All-in -one Vaporizer",
        price:"MRP ₹269.55"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1661760071.jpg?dim=360x0",
        name:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price:"MRP ₹311.00"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/N70299/everherb-by-pharmeasy-shilajit-500mg-natural-vigour-improvement-strength-stamina-for-men-bottle-of-60-2-1661760185.jpg?dim=360x0",
        name:"Everherb (By Pharmeasy) Shilajit 500mg - Natural Vigour Improvement - Strength & Stamina For Men - Bottle Of 60",
        price:"MRP ₹499.50"
    },
    
]



localStorage.setItem("newlaunches",JSON.stringify(spotlight_arr))
let spotlight_data = JSON.parse(localStorage.getItem("newlaunches"))||[]

function appendspotlight( spotlight_arr){

  let spotlight_div=document.getElementById("inthespotlight_maindiv")


  spotlight_arr.forEach((el,index)=>{



    

    let div = document.createElement("div")
    div.setAttribute("id","spotlight_container")
    div.addEventListener("click",function(){
        localStorage.setItem("newlaunches",JSON.stringify(spotlight_arr[index]))
        window.location.href="product.html"
    })
    
let image_div=document.createElement("div")
image_div.setAttribute("id","spotlight_img_div")



    let image=document.createElement("img")
    image.src=el.img
    image.setAttribute("id","spotlight_img")
    image_div.append(image)
   


    let name=document.createElement("h3")
    name.innerText=el.name
    name.style.marginTop="10px"
    name.style.textAlign="center"
    name.setAttribute("id","spotlight_name")
   
   
    let price=document.createElement("p")
    price.innerText=el.price

    price.style.color="grey"
    price.style.marginTop="20px"
    price.style.color="#30363c"
    price.style.fontFamily="sans-serif"
    price.style.fontSize="20px"
    price.style.textAlign="center"

    


    div.append( image_div,name,price)
    spotlight_div.append(div)
})

}
appendspotlight( spotlight_arr)




let heatharticle_arr=[
    {
        img:"https://blog-images.pharmeasy.in/2022/09/29124727/19.jpg?dim=1440x0",
        title:"Benefits of Sudarshan Kriya and How to Do it By Dr. Ankit Sankhe"
    },
    {
        img:"https://blog-images.pharmeasy.in/2022/09/29122712/12.jpg?dim=1440x0",
        title:"Benefits of Sukhasana (Easy Pose) and How to Do it By Dr. Himani Bisht"
    },
    {
        img:"https://blog-images.pharmeasy.in/2022/09/29121435/11.jpg?dim=1440x0",
        title:"Benefits of Bhastrika Pranayama and How to Do it By Dr. Ankit Sankhe"
    },
    {
        img:"https://blog-images.pharmeasy.in/2022/09/29120043/9.jpg?dim=1440x0",
        title:"Benefits of Ustrasana (Camel Pose) and How to Do it By Dr. Ankit Sankhe"
    },
    {
        img:"https://blog-images.pharmeasy.in/2022/09/29115156/20.jpg?dim=1440x0",
        title:"Benefits of Gomukhasana (Cow Face Pose) and How to Do it By Dr. Himani Bisht"
    },
  
]

function appendhealtharticle(heatharticle_arr){
    let heatharticle_div=document.getElementById("healthArticles")

    heatharticle_arr.forEach(function(el,index){

        let div = document.createElement("div")
        div.setAttribute("id","heatharticle_div")

        let image_div=document.createElement("div")
        image_div.setAttribute("id","heatharticleimage_div")


        let image=document.createElement("img")
        image.src=el.img
        image.setAttribute("id","healthArticles_img")

        image_div.append(image)

        let title=document.createElement("p")
        title.innerText=el.title
        title.style.fontSize="22px"
        title.style.color="#30363c"
        title.style.fontFamily="sans-serif"
        title.setAttribute("id","healtharticle_title")



        div.append(image_div,title)

        heatharticle_div.append(div)
    })

}
appendhealtharticle(heatharticle_arr)




let gotohome= document.getElementById("logo")


gotohome.addEventListener("click",function(){
   console.log("checlk")

   window.location.href="index.html"
})


//     let frequentlysearcheditemsinsearchbar=document.getElementsByClassName('frequentlysearched');
   

//     for(i=0;i<frequentlysearcheditemsinsearchbar.length;i++){
//        document.getElementById("searchinput").addEventListener("click",function(){
//           this.classList.toggle('active');
    
//     })
    
// }



