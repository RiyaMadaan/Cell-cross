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

function displayEnquiry() {
  const enq = document.getElementById("enquirydiv");
  if (enq.style.display === 'none') {
    enq.style.display = 'block';
    enq.style.zIndex = 9;
  }
  else {
    enq.style.display = 'none';
    enq.style.zIndex = 0;

  }
}

function enquiryClose() {
  const enq = document.getElementById("enquirydiv");
  enq.style.display = 'none';
  enq.style.zIndex = 0;
}

// ---------------------------form validation-----------------------------//

var subjectObject = {
  "PHARMA": {
    "FERMINI 20 TABLET": [],
    "CORFINE D3 TABLET ": [],
    "CORFINE PLUS TABLET": [],
    "CORFINE D3 60K Capsules*": [],
    "UTICELL 100 mg SR TABLET": [],
    "DEFCROSS 6 mg*": [],
    "GASCROSS SUSPENSION (Mint Flavour)": [],
    "GASCROSS - DSR CAPSULES": [],
    "NITPURE 100 mg SR TABLET": [],
    "CUFFCROSS - A SYRUP": [],
    "CUFFCROSS - D SYRUP": [],

  },
  "FEMINA": {
    "FERMINI 20 TABLET": [],
    "CORFINE D3 TABLET ": [],
    "CORFINE PLUS TABLET": [],
    "NITPURE 100 mg SR TABLET": [],
    "LETCROSS 2.5 MG": [],
    "LETCROSS 5 MG SR*": [],
    "GASCROSS SUSPENSION (Mint Flavour)": [],
    "GASCROSS - DSR CAPSULES": [],
    "YAMUNA 21 TABLETS*": [],
    "ARGICROSS  SACHET*": [],
    "GESTCROSS  200 CAPSULES*": [],

  },
  "VETCROSS": {
    "CEFTIGROW 1 gm INJ (Lyophilized)": [],
    "LACTOLIME GOLD 5 Litre": [],
    "LACTOLIME GOLD 20 Litre": [],
    "LACTOLIME GOLD 10 Litre*": [],
    "LACTOLIME GEL": [],
    "LEVOCROSS INJECTION": [],
    "NIMUDOL INJECTION (with DMSO)": [],
    "WORMCROSS": [],
    "WORMCROSS-R": [],
    "WORMCROSS-DS*": [],

  },

  "PETCROSS": {
    "LIMECAL PET": [],
    "WORMCROSS PET ": [],
    "CEPHACELL Tablet 300 mg": [],
    "CEPHACELL Tablet 600 mg": [],
    "PETSGLOW Shampoo": [],
    "PETSLAC": [],

  }
}
window.onload = function () {
  var division = document.getElementById("divselect");
  var medicine = document.getElementById("medselect");
  for (var x in subjectObject) {
    division.options[division.options.length] = new Option(x, x);
  }
  division.onchange = function () {
    medicine.length = 1;
    for (var y in subjectObject[this.value]) {
      medicine.options[medicine.options.length] = new Option(y, y);
    }
  }
  medicine.onchange = function () {
    var z = subjectObject[division.value][this.value];
  }

}

const cmntForm = document.forms['loginForm'];

cmntForm.addEventListener('submit', function(event){
  event.preventDefault();
  loginFailed();
  this.textarea.value = ""; 
});

function loginFailed(){
      $("#incorrectData").show();
}
  
  function reset(){
    document.querySelector("form").reset();
    $("#incorrectData").hide();
  }
