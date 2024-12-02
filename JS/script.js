const navBar = document.getElementById('navbar');
let scrolled = false;
let myButton = document.getElementById("backToTopBtn");

window.onscroll = function(){
  if(window.pageYOffset > 100){
    navBar.classList.remove('top');
    if(!scrolled){
      navBar.style.transform = 'translateY(-200px)';
    }
    setTimeout(function(){
      navBar.style.transform = 'translateY(0)';
      scrolled = true
    }, 200);
  }else{
    navBar.classList.add('top');
    scrolled = false;
  }
   // When the user scrolls down 200px from the top, show the button
  //  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the page
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

    
   