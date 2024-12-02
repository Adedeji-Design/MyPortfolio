

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/feet.jpg") {
    myImage.setAttribute("src", "img/pitch.jpg");
  } else {
    myImage.setAttribute("src", "img/feet.jpg");
  }
};


function displayMenu(){
  const display1 = document.getElementById('navbar');
  display1.style.display = 'block';
}
