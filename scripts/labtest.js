





const track = document.querySelector(".corotrack");
const slide = Array.from(track.children);
const prev = document.querySelector("#leftbtn");
const next = document.querySelector("#rightbtn");

const slidewidth = slide[0].getBoundingClientRect().width;
console.log(slidewidth);
console.log(slide[0]);
//arrange slides next to each other
//since they are stacked one on top of other

const wideslide = (slide, index) => {
  slide.style.left = (slidewidth + 15) * index + "px";
};

// for each slide running the above function to give it width and margin
slide.forEach(wideslide);



const moveit = (track, current, target) => {
  track.style.transform = "translateX(-" + target.style.left + ")";
  current.classList.remove("current");
  target.classList.add("current");
};

next.addEventListener("click", (e) => {
  const current = track.querySelector(".current");
  var nextslide = current.nextElementSibling;
  //move to the next slide
  //Enter this condition if its at the last slide
  if (nextslide == null) {
    nextslide = track.querySelector(".slide");
    console.log("fuck it");
  }
  console.log(current, nextslide);
  moveit(track, current, nextslide);
});

//for previous button just change the event listener
prev.addEventListener("click", (e) => {
  const current = track.querySelector(".current");
  const prevslide = current.previousElementSibling;
  //move to the next slide
  moveit(track, current, prevslide);
});


//for second carousel

const track1 = document.querySelector(".corotrack1");
const slide1 = Array.from(track1.children);
const prev1 = document.querySelector("#leftbtn1");
const next1 = document.querySelector("#rightbtn1");

const slidewidth1 = slide1[0].getBoundingClientRect().width;
console.log(slidewidth1);
console.log(slide1[0]);

const wideslide1 = (slide1, index) => {
  slide1.style.left = (slidewidth1 + 15) * index + "px";
};

// for each slide running the above function to give it width and margin
slide1.forEach(wideslide1);

const moveit1 = (track1, current1, target1) => {
  track1.style.transform = "translateX(-" + target1.style.left + ")";
  current1.classList.remove("current1");
  target1.classList.add("current1");
};

next1.addEventListener("click", (e) => {
  const current1 = track1.querySelector(".current1");
  var nextslide1 = current1.nextElementSibling;
  //move to the next slide
  //Enter this condition if its at the last slide
  if (nextslide1 == null) {
    nextslide1 = track1.querySelector(".slide1");
    console.log("fuck it");
  }
  console.log(current1, nextslide1);
  moveit1(track1, current1, nextslide1);
});

//for previous button just change the event listener
prev1.addEventListener("click", (e) => {
  const current1 = track1.querySelector(".current1");
  const prevslide1 = current1.previousElementSibling;
  //move to the next slide
  moveit1(track1, current1, prevslide1);
});
let delay = 2;
setInterval(test, 4000);
setInterval(test2, 4000, delay * 1000);

next.addEventListener("click", test());
function test(e) {
  const current = track.querySelector(".current");
  var nextslide = current.nextElementSibling;
  console.log("work");
  //move to the next slide
  //Enter this condition if its at the last slide
  if (nextslide == null) {
    nextslide = track.querySelector(".slide");
    console.log("fuck it");
  }
  console.log(current, nextslide);
  moveit(track, current, nextslide);
}

next1.addEventListener("click", test2());
function test2(e) {
  const current1 = track1.querySelector(".current1");
  var nextslide1 = current1.nextElementSibling;
  //move to the next slide
  //Enter this condition if its at the last slide
  if (nextslide1 == null) {
    nextslide1 = track1.querySelector(".slide1");
    console.log("fuck it");
  }
  console.log(current1, nextslide1);
  moveit1(track1, current1, nextslide1);
}

let gotohome= document.getElementById("logo")

gotohome.addEventListener("click",function(){
   console.log("checlk")

   window.location.href="index.html"
})
