//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function displayEnquiry(){
  const enq = document.getElementById("enquirydiv");
  if(enq.style.display === 'none'){
  enq.style.display = 'block';
  enq.style.zIndex = 9;
  }
  else{
    enq.style.display = 'none';
    enq.style.zIndex = 0;
  
  }
}

function enquiryClose(){
  const enq = document.getElementById("enquirydiv");
  enq.style.display = 'none';
  enq.style.zIndex = 0;
}

